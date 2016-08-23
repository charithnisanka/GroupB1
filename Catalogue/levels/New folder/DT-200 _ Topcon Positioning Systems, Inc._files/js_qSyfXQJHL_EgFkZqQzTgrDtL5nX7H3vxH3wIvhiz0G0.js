/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = {
  attach: function (context) {
    if ($.viewsUi && $.viewsUi.tabs) {
      $('#views-tabset').once('views-processed').viewsTabs({
        selectedClass: 'active'
      });
    }

    $('a.views-remove-link').once('views-processed').click(function(event) {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      event.preventDefault();
   });
  /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row)
    */
  $('a.display-remove-link')
    .addClass('display-processed')
    .click(function() {
      var id = $(this).attr('id').replace('display-remove-link-', '');
      $('#display-row-' + id).hide();
      $('#display-removed-' + id).attr('checked', true);
      return false;
  });
  }
};

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress-wrapper" aria-live="polite"></div>');
  this.element.html('<div id ="' + id + '" class="progress progress-striped active">' +
                    '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
                    '<div class="percentage sr-only"></div>' +
                    '</div></div>' +
                    '</div><div class="percentage pull-right"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.progress-bar', this.element).css('width', percentage + '%');
    $('div.progress-bar', this.element).attr('aria-valuenow', percentage);
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">&times;</a><h4>Error message</h4></div>').append(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function ($) {

/**
 * Attaches the AJAX behavior to Views exposed filter forms and key View links.
 */
Drupal.behaviors.ViewsAjaxView = {};
Drupal.behaviors.ViewsAjaxView.attach = function() {
  if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
    $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
      Drupal.views.instances[i] = new Drupal.views.ajaxView(settings);
    });
  }
};

Drupal.views = {};
Drupal.views.instances = {};

/**
 * Javascript object for a certain view.
 */
Drupal.views.ajaxView = function(settings) {
  var selector = '.view-dom-id-' + settings.view_dom_id;
  this.$view = $(selector);

  // Retrieve the path to use for views' ajax.
  var ajax_path = Drupal.settings.views.ajax_path;

  // If there are multiple views this might've ended up showing up multiple times.
  if (ajax_path.constructor.toString().indexOf("Array") != -1) {
    ajax_path = ajax_path[0];
  }

  // Check if there are any GET parameters to send to views.
  var queryString = window.location.search || '';
  if (queryString !== '') {
    // Remove the question mark and Drupal path component if any.
    var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
    if (queryString !== '') {
      // If there is a '?' in ajax_path, clean url are on and & should be used to add parameters.
      queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
    }
  }

  this.element_settings = {
    url: ajax_path + queryString,
    submit: settings,
    setClick: true,
    event: 'click',
    selector: selector,
    progress: { type: 'throbber' }
  };

  this.settings = settings;

  // Add the ajax to exposed forms.
  this.$exposed_form = this.$view.children('.view-filters').children('form');
  this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

  // Add the ajax to pagers.
  this.$view
    // Don't attach to nested views. Doing so would attach multiple behaviors
    // to a given element.
    .filter(jQuery.proxy(this.filterNestedViews, this))
    .once(jQuery.proxy(this.attachPagerAjax, this));

  // Add a trigger to update this view specifically. In order to trigger a
  // refresh use the following code.
  //
  // @code
  // jQuery('.view-name').trigger('RefreshView');
  // @endcode
  // Add a trigger to update this view specifically.
  var self_settings = this.element_settings;
  self_settings.event = 'RefreshView';
  this.refreshViewAjax = new Drupal.ajax(this.selector, this.$view, self_settings);
};

Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
  var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
  button = button[0];

  this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
};

Drupal.views.ajaxView.prototype.filterNestedViews= function() {
  // If there is at least one parent with a view class, this view
  // is nested (e.g., an attachment). Bail.
  return !this.$view.parents('.view').size();
};

/**
 * Attach the ajax behavior to each link.
 */
Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
  this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
  .each(jQuery.proxy(this.attachPagerLinkAjax, this));
};

/**
 * Attach the ajax behavior to a singe link.
 */
Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
  var $link = $(link);
  var viewData = {};
  var href = $link.attr('href');
  // Construct an object using the settings defaults and then overriding
  // with data specific to the link.
  $.extend(
    viewData,
    this.settings,
    Drupal.Views.parseQueryString(href),
    // Extract argument data from the URL.
    Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
  );

  // For anchor tags, these will go to the target of the anchor rather
  // than the usual location.
  $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

  this.element_settings.submit = viewData;
  this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
};

Drupal.ajax.prototype.commands.viewsScrollTop = function (ajax, response, status) {
  // Scroll to the top of the view. This will allow users
  // to browse newly loaded content after e.g. clicking a pager
  // link.
  var offset = $(response.selector).offset();
  // We can't guarantee that the scrollable object should be
  // the body, as the view could be embedded in something
  // more complex such as a modal popup. Recurse up the DOM
  // and scroll the first element that has a non-zero top.
  var scrollTarget = response.selector;
  while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
    scrollTarget = $(scrollTarget).parent();
  }
  // Only scroll upward
  if (offset.top - 10 < $(scrollTarget).scrollTop()) {
    $(scrollTarget).animate({scrollTop: (offset.top - 10)}, 500);
  }
};

})(jQuery);
;
(function($, Drupal)
{

	$(document).on('click', '#signout-link', function(){
		$('.signout-form').submit();
	});


	// Our function name is prototyped as part of the Drupal.ajax namespace, adding to the commands:
	Drupal.ajax.prototype.commands.topconServicesLoginForm = function(ajax, response, status)
	{
		var signInForm = new TopconSignupForm();
		// form is reloaded, setup styling again
        signInForm.setupForm();
        // reset validation for existing fields
        // signInForm.validateFields();


        // clear errors in top form, then add them back if needed
		// $('#topcon-services-signup-form-container .form-group').removeClass('error');

		// expects and array of selectors.  Style these fields
		for(n in response.errors) {
			var errorSelector = response.errors[n];

			styleField($(errorSelector), 'error');
			// console.log($(errorSelector));
			// $(errorSelector).focus();
		}


        if(response.status == 'error') {
        	$('#createAccountMsg').removeClass('alert-success').addClass('alert-danger').fadeIn(150);
        	$('#createAccountSubmit').removeClass('hidden');

        } else if(response.status == 'success') {
        	// $('#createAccountMsg').html(response.msg);
        	$('#createAccountMsg').removeClass('alert-danger').addClass('alert-success').fadeIn(150);
        }


        // if(response.debug) {
        // 	console.log(response.debug);
        // }
	};

	/* TopconSignup */
	var TopconSignupForm = function() {
		var _self = this;

		this.init = function() {

			$('#createAccountModal').on('shown.bs.modal', function (e) {
				_self.setupForm();
			});

			$('.info').on('click', function(){
				$(this).siblings('input').focus();
			});

			$('.form-group input').on('blur', function() {
				if($(this).val() != '') {
					$(this).siblings('.info').fadeTo(10,0, function() {
						$(this).hide();
					});
				} else {
					$(this).siblings('.info').delay(100).show().fadeTo(100,1);
				}
			});
			$('.form-group input').on('focus', function() {
				$(this).siblings('.info').fadeTo(10,0, function() {
					$(this).hide();
				});
			});

			$('.form-group input').each(function(){
				if($(this).val()) $(this).siblings('.info').fadeTo(10,0, function() {
					$(this).hide();
				});
			});



			// $('.create-account-field').on('keyup', function(){
			// 	_self.validateField('#' + $(this).attr('id'));
			// 	_self.checkIfFormIsValid();
			// });
			// $('.create-account-field').on('blur', function(){
			// 	_self.validateField('#' + $(this).attr('id'));
			// 	_self.checkIfFormIsValid();
			// });
			$('.create-account-field').on('focus', function(){
				if($(this).val() == '') styleField($(this), 'reset');
			});

			$('#topcon-services-signup-form-container input, #topcon-services-signup-form-container textarea').placeholder();


		}
		this.setupForm = function() {
			$('.form-group .info').each(function() {
				var placeholderText = $(this).siblings('input').attr('placeholder');
				var tmpPlaceholderText = $('<span>'+placeholderText+'</span>');
				var placeholderTextWidth = tmpPlaceholderText.appendTo($(this).parent()).width();

				$(this).css('left', placeholderTextWidth + 15);
				tmpPlaceholderText.remove();
			});

			if(!$('#createAccountFirstName').hasClass('error')) $('#createAccountFirstName').focus();
		}

		// this.validateField = function(selector) {
		// 	var emailRegEx = /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/;
		// 	// var status = 'error';
		// 	// removing the error styling from the front end
		// 	var status = '';

		// 	switch (selector) {
		// 		case '#createAccountFirstName':
		// 		case '#createAccountLastName':
		// 		case '#createAccountCompanyName':
		// 		case '#createAccountEmail':
		// 			if($(selector).val()) {
		// 				status = 'valid';
		// 			}
		// 			if($(selector).is(':focus') && $(selector).val() == '') {
		// 				status = 'reset';
		// 			}
		// 			styleField($(selector), status);
		// 			break;

		// 		case '#createAccountPassword':
		// 		case '#createAccountPasswordConfirm':
		// 			if($('#createAccountPassword').val() && $('#createAccountPasswordConfirm').val()) {
		// 				if($('#createAccountPassword').val() == $('#createAccountPasswordConfirm').val()) {
		// 					styleField($('#createAccountPassword, #createAccountPasswordConfirm'), 'valid');
		// 				} else {
		// 					// styleField($(selector), 'error');
		// 				}
		// 			} else {
		// 				styleField($('#createAccountPassword, #createAccountPasswordConfirm'), 'reset');
		// 			}
		// 			break;
		// 		default:
		// 			break;
		// 	}

		// }

		// this.validateFields = function() {
		// 	$('.create-account-field').each(function(){
		// 		_self.validateField('#' + $(this).attr('id'));
		// 	});
		// }



		this.checkIfFormIsValid = function() {
				if($('#topcon-services-signup-form').find('.valid').length == 6 && $('#topcon-services-signup-form').find('.form-group.error').length == 0) {
					$('#createAccountSubmit').removeClass('disabled');
				} else {
					$('#createAccountSubmit').addClass('disabled');
				}
		}

		this.init();
		return this;
	}




	Drupal.ajax.prototype.commands.topconServicesSubscribeForm = function(ajax, response, status)
	{
		var subscribeForm = new TopconSubscribeForm();

        // reset validation for existing fields

        if(response.status == 'error') {
        	$('#newsletterMsg').removeClass('alert-success').addClass('alert-danger').fadeIn(150);
        	$('#newsletterSignupSubmit').removeClass('hidden');
        } else if(response.status == 'success') {
        	$('#newsletterMsg').removeClass('alert-danger').addClass('alert-success').fadeIn(150);
        }

        // expects and array of selectors.  Style these fields
		for(n in response.errors) {
			var errorSelector = response.errors[n];

			styleField($(errorSelector), 'error');
		}


        // if(response.debug) {
        // 	console.log(response.debug);
        // }
	};

	/* TopconSubscribe */
	var TopconSubscribeForm = function() {
		var _self = this;

		this.init = function() {
			$('#newsletterSignupModal').on('show.bs.modal', function (e) {
				if($('#email-presignup').val() != '') {
					$(this).find('input:text[name="email"]').val($('#email-presignup').val());
					// _self.validateEmail();
				}
				$('#newsletterSignupModal').find('input[name="url"]:hidden').val(window.location.href);
			});

			$('#newsletterSignupModal').on('hidden.bs.modal', function (e) {
				$('#insightsFormContainer').removeClass('hidden');
				$('#newsletterMsg').addClass('hidden');
			});

			$('#topcon-services-subscribe-form-container input, #topcon-services-subscribe-form-container textarea').placeholder();

		}




		this.init();
		return this;
	}


	Drupal.ajax.prototype.commands.topconServicesDealerForm = function(ajax, response, status)
	{
		var dealerForm = new TopconDealerForm();

		$('.dealer-list-carousel').carouFredSel({
			auto: false,
			circular: false,
			infinite: false,
			direction: 'up',
			items: {
				visible: 2
			},
			next: {
				button: $('.dealer-list .nav-down')
			},
			prev: {
				button: $('.dealer-list .nav-up')
			},
			swipe: {
				onTouch: true
			}
		});

		if(response.status == 'error') {
			$('#findDealerMsg').removeClass('hidden');
		} else {
			$('#findDealerMsg').addClass('hidden');
		}

		// console.log(response);

		if(typeof _gaq == 'object') _gaq.push(['_trackEvent', 'Forms', 'Submit', 'Dealer']);


        if(response.debug && typeof console == 'object') {
        	console.log(response.debug);
        }


	};

	var TopconDealerForm = function() {
		var _self = this;


		this.init = function() {
			$('#dealerModal').on('shown.bs.modal', function (e) {
				if((($('input[name=latitude]').val() && $('input[name=longitude]').val()) || $('input[name=country]').val() )&& $('.dealer-placeholder').length > 0) {
					$('#dealerSubmit').mousedown();
				} else {

				}
			});

			// clear selected dealer on load
			$('input[name="dealer"]').val('');
			$('.media-dealer').removeClass('selected');

			$(document).on('change', '#topcon-services-find-a-dealer-form select', function(){
				_self.validateForm();
			});
			$(document).on('change', '#dealerProduct', function(){
				$('#dealerModal').find('input[name="product"]').val($('#dealerProduct').val());
			});
			$(document).on('change', '#dealerCountry', function(){
				$('#dealerModal').find('input[name="country"]').val($('#dealerCountry').val());
			});

			$(document).on('keyup', '#topcon-services-find-a-dealer-form input', function(){
				_self.validateForm();
			});
			$(document).on('submit', '#dealer-form-container form', function(e){
				e.preventDefault();
				$('#dealerSubmit').mousedown();
				return false;
			});
			$(document).on('change', '#dealerPostal', function(){
				$('input[name="postalCode"]:hidden').val($('#dealerPostal').val());
			});
		    $(document).on('click', '.media-dealer', function(){
	    		$('.media-dealer').removeClass('selected');
		    	$(this).addClass('selected');
		        $('input[name="dealer"]').val( $(this).data('dealer-id') );
		    });

		    $('#dealer-form-container input, #dealer-form-container textarea').placeholder();

		    _self.validateForm();
		}

		// check that at least one field is filled out
		// this simple validation is used when only searching for a dealer
		this.validateForm = function() {
			// var is_valid = false;

			// $('#topcon-services-find-a-dealer-form select').each(function(){
			// 	if($(this).val() != '') is_valid = true;
			// })

			// if($('#topcon-services-find-a-dealer-form input:text').val() != '') {
			// 	is_valid = true;
			// }

			// if(is_valid) $('#dealerSubmit').removeClass('disabled');
			// else $('#dealerSubmit').addClass('disabled');

			return;
		}
		this.init();
		return this;
	}

	Drupal.ajax.prototype.commands.topconContactDealerForm = function(ajax, response, status)
	{
		var contactDealerForm = new TopconContactDealerForm();
		$('#dealerContactMsg').removeClass('hidden');

		// clear errors in top form, then add them back if needed
		$('#dealer-form-container .form-group').removeClass('error');

		// expects and array of selectors.  Style these fields
		for(n in response.errors) {
			var errorSelector = response.errors[n];

			styleField($(errorSelector), 'error');
		}
	}


	var TopconContactDealerForm = function() {
		var _self = this;


		this.init = function() {
			$('#dealerModal').on('shown.bs.modal', function (e) {
				$('#dealerModal').find('input[name="url"]:hidden').val(window.location.href);
				// $('#dealerModal').find('input[name="page"]:hidden').val(window.document.title);
			});

			$('#dealerModal').on('hidden.bs.modal', function (e) {
				if($('#contactFormContainer').hasClass('hidden')) {
					$('#contactFormContainer').removeClass('hidden');
					$('#dealerContactMsg').addClass('hidden');
				}
			});

			$('input[name="postalCode"]:hidden').val($('#dealerPostal').val());
			$('input[name="country"]').val($('#dealerCountry').val());
			$('input[name="product"]').val($('#dealerProduct').val());




		    $('#dealerModal input').on('keyup', function(){
				// _self.validateField('#' + $(this).attr('id'));
				_self.checkIfFormIsValid();
			});
			$('#dealerModal input').on('blur', function(){
				// _self.validateField('#' + $(this).attr('id'));
				_self.checkIfFormIsValid();
			});
			$('#dealerModal input').on('focus', function(){
				if($(this).val() == '') styleField($(this), 'reset');
			});

			$('#contactFormContainer input, #contactFormContainer textarea').placeholder();

		    _self.checkIfFormIsValid();
		}

		this.checkIfFormIsValid = function() {
			// if($('#dealerEmail').val() && $('#dealerFirstName').val() && $('#dealerLastName').val()) {
			// 	$('#sendDealerMsg').removeClass('disabled');
			// } else {
			// 	$('#sendDealerMsg').addClass('disabled');
			// }

		}

		this.init();
		return this;
	}

	function styleField($field, status) {
		if(status == 'valid') {
			$field.closest('.form-group').removeClass('error').addClass('valid');
		} else if(status == 'error') {
			$field.closest('.form-group').removeClass('valid').addClass('error');
		} else {
			$field.closest('.form-group').removeClass('valid').removeClass('error');

		}
	}

	Drupal.ajax.prototype.commands.topconMoreInfoForm = function(ajax, response, status)
	{
		var moreInfoForm = new TopconMoreInfoForm();

		$('#moreInfoMsg').removeClass('hidden');
		for(n in response.errors) {
			var errorSelector = response.errors[n];

			styleField($(errorSelector), 'error');
			$(errorSelector).focus();
		}
		// console.log(response.errors);

	}

	var TopconMoreInfoForm = function() {
		var _self = this;


		this.init = function() {
			$('#moreInfoModal').on('shown.bs.modal', function (e) {
				if($('#more-info-email').val()) {
					$('#moreInfoEmail').val($('#more-info-email').val());
				}
				$('#moreInfoFirstName').focus();
				$('#moreInfoModal').find('input[name="url"]:hidden').val(window.location.href);
			});

			$('#moreInfoModal').on('hidden.bs.modal', function (e) {
				if($('#moreInfoContainer').hasClass('hidden')) {
					$('#moreInfoContainer').removeClass('hidden');
					$('#moreInfoMsg').addClass('hidden');
				}
			});

			$('#more-info-form-container input, #more-info-form-container textarea').placeholder();
		}

		this.init();
		return this;
	}

	Drupal.ajax.prototype.commands.topconRegisterProductForm = function(ajax, response, status) {

		var registerProductForm = new TopconRegisterProductForm();

		$('#registerProductMsg').removeClass('hidden');
		for(n in response.errors) {
			var errorSelector = response.errors[n];

			styleField($(errorSelector), 'error');
			$(errorSelector).focus();
		}

		if(typeof response.team_id !== 'undefined') {
			// set the hidden team id field with the team id passed to this funciton.
			// this is done so when a new team is created, the user does not see the "duplicate team" error when trying to re-submit the form
			if($('#registerProductModal').find('input[name="team_id"]:hidden').length > 0) {
				$('#registerProductModal').find('input[name="team_id"]:hidden').val(response.team_id);
			}
		}
	}

	var TopconRegisterProductForm = function() {
		$(document).on('submit', '#register-product-form-container form', function(e){
				e.preventDefault();
				$('#registerProductSubmit').mousedown();
				return false;
		});
	}


	jQuery(document).ready(function(){
		var signInForm = new TopconSignupForm();
		var subscribeForm = new TopconSubscribeForm();
		var dealerForm = new TopconDealerForm();
		var contactDealerForm = new TopconContactDealerForm();
		var moreInfoForm = new TopconMoreInfoForm();
		var registerProductForm = new TopconRegisterProductForm();

	});
}(jQuery, Drupal));;
