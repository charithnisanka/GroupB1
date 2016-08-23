(function ($) {
	$(document).ready(function() {

		// main site events and functions
		Topcon.site = new TopconSite();
	    // initialize contact
	    Topcon.contact = new TopconContact();
	    // initialize parallax
	    Topcon.parallax = new TopconParallax();
	    // initialize video stuff
	    Topcon.video = new TopconVideo();
	    // initialize insights page handling
	    Topcon.news = new TopconNews();
	    // JS events for the support page
	    Topcon.support = new TopconSupport();
	    // main carousel behavior
	    Topcon.carousel = new TopconCarousel();
	    // menu launcher behavior
	    Topcon.menuLauncher = new TopconMenuLauncher();
	    // search
	    Topcon.search = new TopconSearch();
	    // menu callouts
	    Topcon.callouts = new TopconCallouts();

	    $(document).on('mouseenter mouseover', '#atstbx', function(e){
	    	e.preventDefault();
	    });

		// init category lists
		if($('.product-category-list').length != 0) {
			var productCategoryList = $('.product-category-list');
			productCategoryList.find('.panel-heading').first().find('.panel-title a').click();
		}

		$('.event-read-more').on('click', function() {
			var $short_desc = $(this).closest('.short-desc');
			var $long_desc = $short_desc.siblings('.long-desc');
			$short_desc.addClass('hidden');
			$long_desc.removeClass('hidden').addClass('show');
			return false;
		})

		// footer industry and product dropdowns
		var footerDropdown = $('#industry_dropdown, #product_dropdown');

		footerDropdown.append(' <span class="caret"></span>');
		footerDropdown.addClass('dropdown-toggle');
		footerDropdown.attr('data-toggle','dropdown');
		footerDropdown.each(function() {
			$(this).parent().addClass('dropup');
			$(this).parent().append('<span class="dropup-nib"></span>');

			var drop_id = $(this).attr('id');
			// look for drop-down menu that matches this menu link's class
			$(this).parent().append($('.' + drop_id)[0]);
		});

		$(document).on('change', '.view-events .form-select', function(){
			$('#edit-submit-events').click();
		});

		// close search when user clicks on industry menu
		$('#industry-menu').on('click', function() {
			Topcon.search.closeSearch();
		});

		// all products dropdown
		$("#product-sort li a").on('click', function(){
			$(this).parents(".dropdown").find('.btn #sort-name').text($(this).text());
		});

		$('.private-files-dl').on('click', function(){
			if($(this).hasClass('psuedo-disabled')) {
				$('#signInPromptModalLink').click();
			}
		});

		$('.signInPromptOpenCreateAccountModal').on('click', function(){

			$('#signInPromptModal').modal('hide');
			$('#registerSignInPromptModal').modal('hide');
			$('#createAccountModalLink').click();
		});

		$('.accountValidationOpenCreateAccountModal').on('click', function(){
			$('#activateAccountModal').modal('hide');
			$('#createAccountModal').modal('show');
		});

		$('.signout-btn').on('click', function(){
			$('#signout-link').click();
		});

		$('#dealerModal').on('shown.bs.modal', function (e) {
			// google analytics tracking
			var $invoker = $(e.relatedTarget);
			if(typeof _gaq == 'object') _gaq.push(['_trackEvent', 'Forms', 'Open', 'Dealer - ' + $invoker.attr('class')]);
		});


		$('.block-demo input, .block-demo textarea, .insights-signup-container input, .insights-signup-container textarea, .insights-view input').placeholder();

		// iOS check...ugly but necessary
		if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) {
		    $('.modal').on('show.bs.modal', function() {
		        // Position modal absolute and bump it down to the scrollPosition
		        $(this)
		            .css({
		                position: 'absolute',
		                marginTop: $(window).scrollTop() + 'px',
		                bottom: 'auto'
		            });
		        // Position backdrop absolute and make it span the entire page
		        //
		        // Also dirty, but we need to tap into the backdrop after Boostrap
		        // positions it but before transitions finish.
		        //
		        setTimeout( function() {
		            $('.modal-backdrop').css({
		                position: 'absolute',
		                top: 0,
		                left: 0,
		                width: '100%',
		                height: Math.max(
		                    document.body.scrollHeight, document.documentElement.scrollHeight,
		                    document.body.offsetHeight, document.documentElement.offsetHeight,
		                    document.body.clientHeight, document.documentElement.clientHeight
		                ) + 'px'
		            });
		        }, 0);
		    });
		}



	});

	function get_browser_info(){
	    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    if(/trident/i.test(M[1])){
	        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
	        return {name:'IE ',version:(tem[1]||'')};
	        }
	    if(M[1]==='Chrome'){
	        tem=ua.match(/\bOPR\/(\d+)/)
	        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
	        }
	    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
	    return {
	      name: M[0],
	      version: M[1]
	    };
	 }










	/* TopconSite */
	var TopconSite = function() {
		var _self = this;

		this.windowHash = '';
		this.is_scrolling = false;

		this.init = function() {

			if ($('.highlights-container').length != 0) {
				this.updateTopconToday();
			}


			$(window).resize(function(){
				$('.backstretch').parent().backstretch('resize');

				if ($('.highlights-container').length != 0) {
					_self.updateTopconToday();
				}
			});

			$(document).on('keyup', '.digits-only', function(){
				var new_val = $(this).val().replace(/[^0-9\-\.\(\)\+\s]/g, '');
				if($(this).val() != new_val) {
					$(this).val( new_val );
				}
			});

			$(document).on('touchmove', function(){
				_self.is_scrolling = true;
			});
			$(document).on('touchend', function(){
				_self.is_scrolling = false;
			});
			$(document).on('touchend', ".block-event, .block-news, .block-solution-product, .block-industry-news, .support-block, .testimonial-link, .block-news-article, .block-insight, .insight-block", function(){
		        if($(this).find("a:first").length > 0 && _self.is_scrolling == false) {
		        	if($(this).find("a:first").data('toggle') == 'modal') $($(this).find("a:first").data('target')).modal('show');
		        	else if($(this).find("a:first").attr("href")) window.location = $(this).find("a:first").attr("href");
		        }
		        return false;
		    });
		    $(document).on('click', ".block-event, .block-news, .block-solution-product, .block-industry-news, .support-block, .testimonial-link, .block-news-article, .block-insight, .insight-block", function(){
		        if($(this).find("a:first").length > 0) {
		        	if($(this).find("a:first").data('toggle') == 'modal') $($(this).find("a:first").data('target')).modal('show');
		        	else if($(this).find("a:first").attr("href")) window.location = $(this).find("a:first").attr("href");
		        }
		        return false;
		    });

		    // attach url hash on click
			$(document).on('click', '.tes-signin', function(e) {
				e.preventDefault();
				var ref = $(this).attr("href");
				var url_hash = window.location.hash;
				if(url_hash != '#') {
					url_hash = url_hash.replace('#', '%23');
					ref = ref.split('#')[0] + url_hash;
					$(this).attr("href", ref);
				}
				// console.log($(this).attr("href"));
				window.location = $(this).attr("href");
			});



		    // Show URL on Mouse Hover
		    $(".block-insight, .block-event, .block-news").hover(function () {
		        window.status = $(this).find("a:first").attr("href");
		    }, function () {
		        window.status = "";
		    });

		    if($('.node').hasClass('node-unpublished')) {
		    	$('#not-published').removeClass('hidden');
		    }

		    $('.labeled-links h6').matchHeight();

		    // check for form hash
		    var url_hash = window.location.hash;
		    if(url_hash) {

		    	// special handling for the Contact a Dealer form, which is in the same modal as the find a dealer form
		    	if(url_hash == '#contactDealerModal') {
		    		url_hash = '#dealerModal';
		    		$('#contact-dealer-form-container').removeClass('hidden');
		    	} else {
		    		$('#contact-dealer-form-container').addClass('hidden');
		    	}

		    	$hashElement = $(url_hash);
		    	if($hashElement.length > 0 && $hashElement.hasClass('modal-form') && $hashElement.data('deep-link') == true) {
		    		$hashElement.modal("show");
		    	}
		    }

		    // hash Modal id on show
		    $('.modal-form').on('show.bs.modal', function (e) {

		    	Topcon.search.closeSearch();
				var $invoker = $(e.relatedTarget);
				// special handling for the Contact a Dealer form, which is in the same modal as the find a dealer form
				if($invoker.hasClass("show-contact-dealer-form")) {
					$('#contact-dealer-form-container').removeClass('hidden');
				} else {
					$('#contact-dealer-form-container').addClass('hidden');
				}

				var url_hash = window.location.hash;

				if($(this).data('deep-link') == true) {
					var modalFormHash = $(this).attr("id");
					// change urlHash if contact form is present
					if($invoker.hasClass("show-contact-dealer-form")) modalFormHash = 'contactDealerModal';
					// save previous hash value to revert
					_self.windowHash = url_hash;

					window.location.hash = modalFormHash;
				}
			});
			// hide modal hash on close
			$('.modal-form').on('hide.bs.modal', function (e) {
				var url_hash = window.location.hash;
				if(url_hash) {
					var modalFormHash = $(this).attr("id");

					// not implemented on < ie10
					if(typeof(history.pushState) == 'function') {
						history.pushState('', document.title, window.location.pathname);
					}
					if(_self.windowHash) window.location.hash = _self.windowHash;


				}
			});

			// The activate account modal should only appear immediately following an account activation attempt.
			// if it's here, show it
			if($('#activateAccountModal').length > 0) {
				$('#activateAccountModal').modal('show');
			}


		    // usage: log('inside coolFunc',this,arguments);
			// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
			window.log = function(){
			  //log.history = log.history || [];   // store logs to an array for reference
			  //log.history.push(arguments);
			  if(this.console){
			    console.log( Array.prototype.slice.call(arguments) );
			  }
			};

		}

		this.isScrolledIntoView = function(elem) {
			if ($(elem).length > 0) {
			    var docViewTop = $(window).scrollTop();
			    var docViewBottom = docViewTop + $(window).height();

			    var elemTop = $(elem).offset().top;
			    var elemBottom = elemTop + $(elem).height();

			    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		    }
		}

		this.updateTopconToday = function() {
			var width = 0;
			var positionAdjustmentLeft = 0;
			var positionAdjustmentRight = 0;

			$('.highlights-container > div').each(function() {
				width += $(this).width();
			});

			positionAdjustmentLeft = positionAdjustmentRight = -(width/2);

			$('.highlights-container').css('left', positionAdjustmentLeft+'px');
			$('.highlights-container').css('right', positionAdjustmentRight+'px');
		}

		this.init();
		return this;
	}


	// menu launcher
	var TopconMenuLauncher = function() {
		var _self = this;

		this.init = function() {
			// init product launcher
			var is_sliding_down = false;
			var productLauncher = $('.menu-launcher');

			productLauncher.on('click', function() {
				return false;
			});

			var is_open = false;
			var is_products_open = false;
			productLauncher.swipe({
				tap: function() {
						var launcherType = $(this).attr('id');
						var barType;

						if (launcherType == 'product_launcher') {
							barType = 'products-bar';
						} else {
							barType = 'industries-bar';
						}

						if(!is_open) {
							$(this).addClass('active');

							if (launcherType == 'industry_launcher') {
								dropdownClosable = true;
								$('.dropdown.keep-open').removeClass('open');
								$('.dropdown.keep-open').find('.dropdown-menu').first().stop(true, true).slideUp(150);
							} else {
								is_products_open = true;
							}

							if($('.header-industry').hasClass('no-hero')) {
								$('.header-industry.no-hero').fadeTo(100,0);
							} else {
								$('.header-industry').fadeOut(100);
							}
							$('.'+barType).slideDown(function() {
								is_open = true;
							});
						} else {
							if ((launcherType == 'industry_launcher') && (is_products_open)) {
								dropdownClosable = true;
								$('.dropdown.keep-open').removeClass('open');
								$('.dropdown.keep-open').find('.dropdown-menu').first().stop(true, true).slideUp(150);

								if($('.header-industry').hasClass('no-hero')) {
									$('.header-industry.no-hero').fadeTo(100,0);
								} else {
									$('.header-industry').fadeOut(100);
								}
								$('.'+barType).slideDown(function() {
									is_open = true;
									is_products_open = false;
								});

								$('#product_launcher').removeClass('active');
								$('.products-bar').slideUp();
								launcherActive = false;
							} else {
								is_open = false;
								is_products_open = false;
								$('.menu-launcher').removeClass('active');
								$('.products-bar, .industries-bar').slideUp(400, function() {
									if (launcherType == 'industry_launcher') {
										if($('.header-industry').hasClass('no-hero')) {
											$('.header-industry.no-hero').delay(200).fadeTo(400,1);
										} else {
											$('.header-industry').delay(200).fadeIn();
										}
									}
								});
							}
						}
				},

				excludedElements: ''
			});

			//productLauncher.append(' <span class="caret"></span>');
			//productLauncher.after($('.products-bar'));

			var launcherTimeout = false;
			var launcherActive = false;

			productLauncher.parent().hoverIntent(function() {
				var launcherType = $(this).children('.menu-launcher').attr('id');

				$('#'+launcherType).addClass('active');
					if (!is_sliding_down) {
						is_sliding_down = true;

						var barType;

						if (launcherType == 'product_launcher') {
							barType = 'products-bar';
						} else {
							barType = 'industries-bar';
							dropdownClosable = true;
							$('.dropdown.keep-open').removeClass('open');
							$('.dropdown.keep-open').find('.dropdown-menu').first().stop(true, true).slideUp(150);
						}

						if($('.header-industry').hasClass('no-hero')) {
							$('.header-industry.no-hero').fadeTo(100,0);
						} else {
							$('.header-industry').fadeOut(100);
						}
						$('.'+barType).slideDown(function() {
							is_sliding_down = false;
						});
					}
				}, function() {
					launcherTimeout = setTimeout(function() {
						if (!launcherActive) {
							// if ($('.menu-launcher.active').is('#industry_launcher')) {
							// 	$('.header-industry').fadeIn();
							// }
							var isIndustry = $('.menu-launcher.active').is('#industry_launcher');
							$('.menu-launcher').removeClass('active');
							$('.products-bar, .industries-bar').slideUp(400, function() {
								if (isIndustry) {
									if($('.header-industry').hasClass('no-hero')) {
										$('.header-industry.no-hero').delay(200).fadeTo(400,1);
									} else {
										$('.header-industry').delay(200).fadeIn();
									}
								}
							});
						}
					}, 200);
				});

			$('.products-bar, .industries-bar').on('mouseenter', function() {
				launcherActive = true;
				clearTimeout(launcherTimeout);
			});

			$('.products-bar, .industries-bar').on('mouseleave', function() {
				launcherActive = false;
				$('.menu-launcher').removeClass('active');
				$('.products-bar, .industries-bar').slideUp();
				if ($(this).hasClass('industries-bar')) {
					if($('.header-industry').hasClass('no-hero')) {
						$('.header-industry.no-hero').fadeTo(400,1);
					} else {
						$('.header-industry').fadeIn();
					}
				}
			});

			var dropdownClosable;
			$('.dropdown.keep-open .dropdown-toggle').on('click', function() {
				if (dropdownClosable === undefined) {
					dropdownClosable = false;
				} else {
					if(dropdownClosable) {
						dropdownClosable = false;
					} else {
						dropdownClosable = true;
						// $(this).siblings('.dropdown-menu').first().stop(true, true).slideUp(150);
						// $('.header-industry').fadeIn();
					}
				}
			});
			$('.dropdown.keep-open').on('show.bs.dropdown', function() {
				$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
				if($('.header-industry').hasClass('no-hero')) {
					$('.header-industry.no-hero').fadeTo(100,0);
				} else {
					$('.header-industry, .header-simple').fadeOut(100);
				}
			});
			$('.dropdown.keep-open').on('hide.bs.dropdown', function() {
				// $('.header-industry').fadeIn();
			    // return dropdownClosable;
			    if (dropdownClosable) {
					$(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
					if($('.header-industry').hasClass('no-hero')) {
						$('.header-industry.no-hero').fadeTo(400,1);
					} else {
						$('.header-industry, .header-simple').fadeIn();
					}
			    } else {
			    	return dropdownClosable;
			    }
			});


		}


		this.init();
		return this;

	}


	var TopconCallouts = function() {
		var _self = this;

		this.init = function() {
			$(window).on("backstretch.after", function (e, instance, index) {
		      $('.solution-callout').fadeTo(350, 1, _self.positionCallouts());
			});
		    $(window).resize(function(){
		    	_self.positionCallouts();
		    });

		    $(document).on('click', '.solution-img .backstretch, .active-callout', function(){
				$('.active-callout').remove();
				$('.solution-callout').removeClass('icon-callout-active').addClass('icon-callout-inactive');
			});

		    $(document).on('click', '.solution-callout', function(){
		    	$('.active-callout').remove();


		    	if($(this).hasClass('icon-callout-inactive')) {
		    		$('.solution-callout').removeClass('icon-callout-active').addClass('icon-callout-inactive');
		    		$(this).removeClass('icon-callout-inactive').addClass('icon-callout-active');

		    		var callout_text = '<div class="active-callout">' + $(this).data('callout-text') + '</div>';
		    		$(this).after(callout_text);

		    		var pos = _self.calculateCalloutTextPosition($(this));
				    $('.active-callout').css({top: pos.top, left: pos.left})

		    		$('.active-callout').fadeTo(250, .9);
		    	} else {
		    		$(this).removeClass('icon-callout-active').addClass('icon-callout-inactive');
		    	}
		    });

		    $('#tabCollection-solutionSet').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
				_self.positionCallouts();
			});
		}


	    this.positionCallouts = function() {
	    	$('.solution-callout').each(function(){
		    	var x_amount = $(this).data('x').replace('%','');
		    	var y_amount = $(this).data('y').replace('%','');
		    	var $backstretch_container = $(this).parent();
		    	if($backstretch_container.hasClass('solution-img') && $(this).is(':visible')) {
		    		$backstretched_img = $backstretch_container.find('.backstretch img');
			    	var x_compensation = new Number($backstretched_img.css('left').replace('px',''));

			    	x_amount = (x_amount/100) * $backstretched_img.width();
			    	x_amount += x_compensation;

			    	var y_compensation = $backstretched_img.height() - $backstretch_container.height();
			    	y_compensation = 1 + (y_compensation / $backstretch_container.height());
			    	y_amount = y_amount * y_compensation;
			    	y_amount = (y_amount/100) * $backstretch_container.height();

			    	// compensate for box size
			    	x_amount -= ($(this).width())/2;
			    	y_amount -= ($(this).height())/2;

			    	// keep points from falling off the left
			    	x_amount = Math.max(x_amount, -10);
			    	// and the right
			    	x_amount = Math.min(x_amount, $backstretch_container.width() - $(this).width());

			    	// keep y points from falling off the bottom
			    	y_amount = Math.min(y_amount, $backstretch_container.height() - $(this).height() +15);
			    	// and the top
			    	y_amount = Math.max(y_amount, 10);

			    	x_amount = x_amount + 'px'
			    	y_amount = y_amount + 'px';

			    	$(this).css({
		    					top: y_amount,
		    					left: x_amount
		    				});
			    	if($(this).next('.active-callout').length > 0) {
			    		var pos = _self.calculateCalloutTextPosition($(this));
			    		$('.active-callout').css({top: pos.top, left: pos.left})
			    	}
		    	}

		    });
	    }


	    this.calculateCalloutTextPosition = function($callout) {
	    	var left_amount = new Number($callout.css('left').replace('px',''));
    		var top_amount = new Number($callout.css('top').replace('px',''));
    		var window_width = $(window).width();
    		var active_callout_width = $('.active-callout').outerWidth();
    		var active_callout_height = $('.active-callout').outerHeight();
    		var container_height = $('.solution-img').height();

    		if($callout.width() + 10 + left_amount > window_width / 2) {
    			left_amount -= active_callout_width + 10;
    		} else {
    			left_amount += $callout.width() + 10;
    		}

    		if((top_amount + active_callout_height + 10) > container_height) {
    			while((top_amount + active_callout_height + 10) > container_height) {
    				top_amount -= 1;
    			}
    		} else if(top_amount <= 10) {
    			top_amount = 10;
    		}

    		left_amount = left_amount + 'px';
	    	top_amount = top_amount + 'px';

    		return {left:left_amount, top:top_amount};
	    }

	    this.init();
		return this;

	}


	// carousel fun!
	var TopconCarousel = function() {
		var _self = this;

		this.init = function() {
			this.initCarousel();
			var productTab = '#product-info';

			if ($('.home-insight-list').length != 0) {
				$('.home-insight-list').backstretch('/sites/all/themes/topconglobal/images/insights-bg.jpg');
			}
			if($('#insights-carousel').length > 0) {
				this.resizeInsightCarousel();
			}

			if ($('.product-insight-carousel').length != 0) {
				this.resizeProductInsightCarousel(productTab);
			}
			if ($('.related-product-carousel').length != 0) {
				this.resizeRelatedProductsCarousel(productTab);
			}

			if ($('.career-quotes-carousel').length != 0) {
				this.careerQuotesCarousel();
			}

			$(window).resize(function() {
				_self.resizeInsightCarousel();
				_self.resizeProductInsightCarousel(productTab);
				_self.resizeRelatedProductsCarousel(productTab);
				_self.dealersCarousel();
			});

			// lets leave this off for now...
			// if($('#tabCollectionContent').length > 0) {
			// 	$(window).on("backstretch.after", function (e, instance, index) {
			//       $('#tabCollectionContent').trigger('updateSizes');
			// 	});
			// }


			// resize backstretched images
			$('#tabCollection-solutionSet').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
				productTab = $(this)[0].hash;

				// get hash for URL
				var url = $(this)[0].href.replace('#', '#panel-');
				location.href = url;
				$('.backstretch').parent().backstretch('resize');

				if($('.block-specs').length > 0) {
					/*$('.block-specs').masonry({
					  columnWidth: '.spec-group',
					  itemSelector: '.spec-group',
					  transitionDuration: 0,
					});*/
				}

				// set the value of the page field for the hidden More Information form
				var $page_title_field = $('#more-info-form-container').find('input[name="page"]:hidden');
				var $dealer_page_title_field = $('#contact-dealer-form-container').find('input[name="page"]:hidden');

				var tab_title = $(this).data('title');
				if(tab_title && $page_title_field) $page_title_field.val(tab_title);
				if(tab_title && $dealer_page_title_field) $dealer_page_title_field.val(tab_title);
				// log($page_title_field.val());
				if($('#tabCollection-solutionSet').hasClass('product')) {
					// do nothing
				} else if($('#tabCollection-solutionSet').hasClass('solution-set')) {
					if(typeof _gaq == 'object') _gaq.push(['_trackEvent', 'Solution Set', tab_title]);
				}

				_self.resizeProductInsightCarousel(productTab);
				_self.resizeRelatedProductsCarousel(productTab);
			});

			var url_hash = window.location.hash;
			if(url_hash.match('#panel-solution') || url_hash.match('#panel-product')) {
				var tab_hash = url_hash.replace('panel-', 'tab-');
				$(tab_hash).click();
				// scroll to the active tab
				if($('#solution-set-anchor').length > 0) window.location.hash = '#solution-set-anchor';
				else window.location.hash = '#primary-content-wrapper';
				window.location.hash = url_hash;
			}

		}

		this.initCarousel = function(){
			// tab carousel
			if($('#tabCollectionContent').length > 0) {
				$('#tabCollectionContent').carouFredSel({
					auto: false,
					responsive: true,
					width: '100%',
					scroll: {
						fx: $('.support-carousel').length >0 ? 'fade' : 'crossfade',
						onBefore: function(data) {
									var itemID = data.items.visible.attr('id');
									var slideDirection = data.scroll.direction;

									if($('#tabCollection a[href="#'+itemID+'"]').parent().hasClass('hidden')) {
										var tabToShow;
										var numItems = $('#tabCollectionContent').children().length;

										$('#tabCollection .show-inline-block').each(function() {
											$(this).removeClass('show-inline-block').addClass('hidden');
										});

										if(slideDirection == 'next') {
											var tabToShow = parseInt(itemID.replace('tab',''));
											var i = 0;
											for(i; i < 3; i++) {
												if(tabToShow >= numItems) {
													tabToShow = 0;
												}

												var currentItem = $('#tabCollection a[href="#tab'+tabToShow+'"]').parent();

												if (i==0) {
													currentItem.insertAfter('.tab-arrow-container:first-child');
												} else {
													currentItem.insertAfter($('.show-inline-block').last());
												}

												currentItem.removeClass('hidden').addClass('show-inline-block');

												tabToShow++;
											}
										} else {
											var tabToShow = parseInt(itemID.replace('tab',''));
											var i = 0;
											for(i; i < 3; i++) {
												if(tabToShow < 0) {
													tabToShow = numItems - 1;
												}

												var currentItem = $('#tabCollection a[href="#tab'+tabToShow+'"]').parent();

												if (i==0) {
													currentItem.insertBefore('.tab-arrow-container:last-child');
												} else {
													currentItem.insertBefore($('.show-inline-block').first());
												}

												currentItem.removeClass('hidden').addClass('show-inline-block');

												tabToShow--;
											}
										}
									}

									$('#tabCollection a[href="#'+itemID+'"]').parent().siblings().removeClass('active');
									$('#tabCollection a[href="#'+itemID+'"]').parent().addClass('active');
						},
					},
					swipe: {
						onTouch: true
					},
					linkAnchors: {
						container: '#tabCollection'
					},
					next: {
						button: '.tab-right'
					},
					prev: {
						button: '.tab-left'
					}
				});
			}
		}

		this.setupInsightCarousel = function(numItems, numVisible, scrollSpeed) {
			if($('#insights-carousel').length == 0) return;
			$('#insights-carousel').carouFredSel({
				align: "center",
				auto: false,
				width: "100%",
				items: {
					visible: numVisible
				},
				scroll: {
					items: numItems,
					duration: scrollSpeed
				},
				swipe: {
					onTouch: true,
					options: {
						swipe: function() {
							$('#insights-carousel .block-insight').each(function() {
								$(this).addClass('no-hover');
							});
						}
					},
					onBefore: function() {
						$('#insights-carousel .block-insight').each(function() {
							$(this).addClass('no-hover');
						});
					}
				},
				pagination: {
					container: '.insights-nav',
					items: numItems,
					anchorBuilder: function(nr) {
						return '<a href="#"></a>';
					}
				}
			});
		}

		this.resizeInsightCarousel = function(){
			var windowWidth = $(window).width();
			if (windowWidth < 992) {
				this.setupInsightCarousel(1,3,500);
			} else if (windowWidth > 1800) {
				this.setupInsightCarousel(5,5,1000);
			} else {
				this.setupInsightCarousel(3,5,750);
			}
		}

		this.setupProductInsightCarousel = function(numItems, productTab) {
			if($(productTab+' .product-insight-carousel').length == 0) return;
			$(productTab+' .product-insight-carousel').carouFredSel({
				auto: false,
				width: "100%",
				align: "center",
				items: numItems,
				next: {
					button: $(productTab+' .product-insights .nav-right')
				},
				prev: {
					button: $(productTab+' .product-insights .nav-left')
				}
			});
		}

		this.resizeProductInsightCarousel = function(productTab){
			var windowWidth = $(window).width();
			if (windowWidth < 992) {
				this.setupProductInsightCarousel(1, productTab);
			} else {
				this.setupProductInsightCarousel(2, productTab);
			}
		}

		this.setupRelatedProductsCarousel = function(numItems, productTab) {
			if($(productTab+' #carousel-related-products').length == 0) return;
			$(productTab+' #carousel-related-products').carouFredSel({
				auto: false,
				width: "100%",
				align: "center",
				items: numItems,
				next: {
					button: $(productTab+' .related-products .nav-right')
				},
				prev: {
					button: $(productTab+' .related-products .nav-left')
				}
			});
		}

		this.resizeRelatedProductsCarousel = function(productTab){
			var windowWidth = $(window).width();
			if (windowWidth < 992) {
				this.setupRelatedProductsCarousel(1, productTab);
			} else {
				this.setupRelatedProductsCarousel(3, productTab);
			}
		}

		this.careerQuotesCarousel = function() {
			if($('.career-quotes-carousel').length == 0) return;

			$('.career-quotes-carousel').carouFredSel({
				auto: false,
				responsive: true,
				align: "center",
				next: {
					button: $('.career-quotes .nav-right')
				},
				prev: {
					button: $('.career-quotes .nav-left')
				},
				scroll: {
					fx: "fade"
				}
			});
		}

		this.dealersCarousel = function() {
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
		}



		this.init();
		return this;
	}

	/* TopconSupport */
	var TopconSupport = function() {
		this.init = function() {
			// initialize

			// match heights of support blocks
			$('.support-block').matchHeight();
			$('.support-head').matchHeight();
			$('.support-pane').matchHeight();
		}

		this.init();
		return this;
	}



	/* TopconNews */
	var TopconNews = function() {
		var _self = this;
		this.init = function() {

			var ie8 = /(MSIE 8)/ig.test( navigator.userAgent );
			var show_masonry = (ie8) ? false : true;
			_self.show_masonry = show_masonry;

			$('#insights-container').imagesLoaded(function() {

				if(show_masonry) {
					$('#insights-container').masonry(
										{
										  columnWidth: '.insight-block.small',
										  itemSelector: '.insight-masonry-block',
										  gutter: 20,
										  isAnimated: true,
										  animationOptions: {
										    duration: 100,
										    easing: 'linear',
										    queue: false
										  }
										}
					);
				}

			});

			// firefox fix. masonry seems to be called before font is loaded. calling after timeout to update layout.
			// setTimeout(function() {
			// 	$('#insights-container').masonry({transitionDuration: 0});
			// }, 300);

			if($('#more-insights').length > 0) {
				$('#more-insights button').on("click", function() {
					$('#insights-ajax-loader').removeClass('hidden');
				    //var offset = 0;
				    // uncomment to turn on proper offsetting
				    var offset = new Number($('#offset').data('offset'));
				    var featured_insight_nid = $('#offset').data('featured-insight-nid');
				    $('#offset').data('offset', offset);
				    $.ajax({
				      type: "GET",
				      dataType: "json",
				      url: "insights/more/"+featured_insight_nid+"/"+offset,
				    })
				      .done(function( insights_data ) {
				        if(insights_data && insights_data.insights.length) {
				          for(var i = 0; i < insights_data.insights.length; i++) {
				          	var insightObj = $(insights_data.insights[i]);
				          	$('#insights-container').append(insightObj).masonry('appended',insightObj);
				          }
				        }
				        if(insights_data && !insights_data.has_more_insights) {
							$('#more-insights').fadeTo("fast",0);
				        }
				        offset += 1;
				        $('#offset').data('offset', offset);
				        $('#insights-ajax-loader').addClass('hidden');
				        $('#insights-container').imagesLoaded(function() {
				        	if(show_masonry) {
								$('#insights-container').masonry({
																	isAnimated: true,
																	animationOptions: {
																	    duration: 100,
																	    easing: 'linear',
																	    queue: false
																	}
																});
				        	}
						});
				      });
				});
			}

			$(document).on('change', '#industry-tid, #article-type-tid', function(){
				$('#search-text').val('');
				_self.filterInsights();
			});

			$(document).on('click', '.views-widget .icon-search', function(){
				_self.filterInsights();
			});

			$(document).on('keydown', '#search-text', function(e){
				if(e.which == 13)	_self.filterInsights();
			});
		}

		this.filterInsights = function() {
				$('#search-text').val( $.trim($('#search-text').val()) );
				if($('#industry-tid').val() == 'All' && $('#article-type-tid').val() == 'All' && $('#search-text').val() == '') {
					$('#offset').data('offset',0);
					setTimeout(function(){$('#more-insights').fadeTo("slow",1)}, 500);
				} else {
					$('#more-insights').fadeTo("fast",0);
				}

				// clear drop-downs if filter text is used
				if($.trim( $('#search-text').val() ) != '') {
					$('#industry-tid').val('All');
					$('#article-type-tid').val('All');
				}

				$('#insights-spinner').removeClass('hidden');
				$.ajax({
				      type: "GET",
				      dataType: "json",
				      url: "insights/filter/",
				      data: {
				      			industry:$('#industry-tid').val(),
				      			article_type: $('#article-type-tid').val(),
				      			search_text: $('#search-text').val(),
				      		},
				    })
				      .done(function( insights_data ) {
				      	$('#insights-spinner').addClass('hidden');
				        if(insights_data && insights_data.insights.length) {
				          $('#insights-container').html('');
				          for(var i = 0; i < insights_data.insights.length; i++) {
				          	var insightObj = $(insights_data.insights[i]);
				          	$('#insights-container').append(insightObj).masonry('appended',insightObj);
				          }

				          if(insights_data.has_more_insights) {
							$('#more-insights').fadeTo("slow",1);
				          }

				          $('#insights-ajax-loader').addClass('hidden');
					        $('#insights-container').imagesLoaded(function() {
					        	if(_self.show_masonry) {
									$('#insights-container').masonry({
																		isAnimated: true,
																		animationOptions: {
																		    duration: 100,
																		    easing: 'linear',
																		    queue: false
																		}
																	});
					        	}
							});

				        } else if(insights_data.no_results) {
				        	$('#insights-container').html('<div class="no-results">' + insights_data.no_results + '</div>');
				        }


				      });
		}

		this.init();
		return this;
	}

	/* TopconContact */
	var TopconContact = function() {
		this.init = function() {
			this.initContact();
		}

		this.initContact = function() {
			// match team heights
			//$('.team .items li').matchHeight();

			if ($('.locations').length > 0)
			{
				var center = new google.maps.LatLng(20, -10);
				var MY_MAPTYPE_ID = 'custom_style';
				function initialize() {
				 	var featureOpts = [
			          {
			            stylers: [
			              { color: '#f2f2f2' },
			              { visibility: 'simplified' }
			            ]
			          },
			          {
			            elementType: 'labels',
			            stylers: [
			              { color: '#535353' }
			            ]
			          },
			          {
					    featureType: "road",
					    elementType: "geometry",
					    stylers: [
					      { hue: "#535353" },
					      { saturation: 50 }
					    ]
					  },
					  {
					    featureType: "road",
					    elementType: "labels",
					    stylers: [
					      { hue: "#000000" }
					    ]
					  },
			          {
			            featureType: 'water',
			            stylers: [
			              { color: '#535353' }
			            ]
			          }
			        ];

			        var mapOptions = {
			          zoom: 2,
			          center: center,
			          mapTypeControlOptions: {
			            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			          },
			          mapTypeId: MY_MAPTYPE_ID,
			          scrollwheel: false
			        };

			        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			        var styledMapOptions = {
			          name: 'Custom Style'
			        };

			        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

			        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);var styledMapOptions = {
			          name: 'Topcon Positioning'
			        };

			        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

			        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

			        var markers = [];

			        var infowindow = new google.maps.InfoWindow();
			        var officeCount = data.count;
			        for (var i = 0; i < officeCount ; i++) {
			          var dataOffice = data.offices[i];
			          var latLng = new google.maps.LatLng(dataOffice.lat,
			              dataOffice.lon);
			          var caption = dataOffice.content;
			          var image = '/sites/all/themes/topconglobal/images/icon-googlemap-default.png';
			          var marker = new google.maps.Marker({
			            position: latLng,
			            map: map,
			            cap: caption,
			            icon: image
			          });

					var myOptions = {
						disableAutoPan: false
						,maxWidth: 0
						,pixelOffset: new google.maps.Size(-343, -160)
						,zIndex: null
						,closeBoxURL: ""
						,infoBoxClearance: new google.maps.Size(75, 1)
						,isHidden: false
						,pane: "floatPane"
						,enableEventPropagation: false
					};

					var ib = new InfoBox(myOptions);

			          google.maps.event.addListener(marker, 'click', function() {
		                for (var i=0; i<markers.length; i++) {
		                   markers[i].setIcon('/sites/all/themes/topconglobal/images/icon-googlemap-default.png');
		                }
			          	this.setIcon('/sites/all/themes/topconglobal/images/icon-googlemap-hover.png');

			            ib.setContent(this.cap);
			            ib.open(map, this);
			          });
			          google.maps.event.addListener(map, 'click', function() {
		                for (var i=0; i<markers.length; i++) {
		                   markers[i].setIcon('/sites/all/themes/topconglobal/images/icon-googlemap-default.png');
		                }
			            ib.close();
			          });
			          /*
			          google.maps.event.addListener(marker, 'mouseout', function(event) {
					  	infowindow.close(map, this);
					  });
			          google.maps.event.addListener(marker, 'click', function() {
			          	//alert('go to office page');
			          	window.location = this.url;
			          });
					  */
			          markers.push(marker);

			        }
			      }
			      google.maps.event.addDomListener(window, 'load', initialize);
				}

			  	// google map loading gif on single office
				$('.gmap iframe' ).load(function() {
					$('.loading-gif').hide();
				});


		}
		this.init();
		return this;
	}


	/* parallax effects */
	var TopconParallax = function() {
		var _self = this;

		var top_header;
		var parallax_img_container;
		var st;
		var iOS, android, is_tablet;
		var transform_amount;
		var has_pull_quotes = false;

		this.init = function() {
			this.initParallax();
			this.resizePullQuotes();
		}

		this.initParallax = function() {
			// hero and pull quote parallax effect
			_self.top_header = $('#hero-main');
			_self.parallax_img_container = $('.pull-quote-img');

			// only init if there are parallaxing images
			if(_self.top_header.length <= 0 && _self.parallax_img_container.length <= 0) return false;

			_self.browser = get_browser_info();

			_self.iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
			_self.android = /(Android)/ig.test( navigator.userAgent );
			_self.is_tablet = (_self.iOS || _self.android);

			_self.parallax_method = '3dtransform';

			var scrollIntervalID;


			if((_self.browser.name.toLowerCase() == 'safari' || _self.browser.name.toLowerCase() == 'msie') && !android) {
				_self.parallax_method = 'margin';
			}

			_self.st = $(window).scrollTop();

			// position pull quotes first
			if(_self.parallax_img_container.length > 0) {
				_self.positionPullQuoteImg();
				$('.pull-quote-img img').each(function(){
					var pull_quote_opacity = $(this).hasClass('no-pull-quote-text') ? 1 : 0.65 ;
					$('.pull-quote-img img').css({opacity:0}).fadeTo(1000,pull_quote_opacity);
				});
			}

			if(_self.iOS) {
				scrollIntervalID = setInterval(function(){
					_self.st = $(window).scrollTop();
				  	window.requestAnimationFrame(_self.handleIOsScroll);
				}, 10);
			} else if(_self.android) {
				scrollIntervalID = setInterval(function(){
					_self.st = $(window).scrollTop();
					if(typeof window.requestAnimationFrame == 'function') window.requestAnimationFrame(_self.handleIOsScroll);
				  	else _self.handleIOsScroll();
				}, 10);
			} else {
				// scroll handling
				scrollIntervalID = setInterval(function(){
					_self.st = $(window).scrollTop();
					if(typeof window.requestAnimationFrame == 'function') window.requestAnimationFrame(_self.handleScroll);
				  	else _self.handleScroll();
				}, 10);
			}

			$(window).resize(function(){
				_self.resizePullQuotes();
			});
		}

		this.handleScroll = function() {
		  var is_onscreen = ( (_self.top_header.position().top + _self.top_header.height() + 100)  - _self.st >= 0) ? true : false;
		  if(is_onscreen) {
		  	if(_self.parallax_method == 'margin') _self.top_header.css({'margin-top': ((_self.st*.1) - 88) +"px"});
	     	else _self.top_header.css({transform: 'translate3d(0px, '+((_self.st*.1)) +"px"+', 0px)', '-webkit-transform': 'translate3d(0px, '+((_self.st*.1)) +"px"+', 0px)' });
		  }
		  // other parallax images on the page
		  if(_self.has_pull_quotes == true) {
			_self.positionPullQuoteImg();
		  }
		}

		this.handleIOsScroll = function() {

		  var is_onscreen = ( (_self.top_header.position().top + _self.top_header.height()  + 100)  - _self.st >= 0) ? true : false;
		  if(is_onscreen) {

		  	_self.st = Math.floor($(window).scrollTop());

		  	if(_self.parallax_method == 'margin') _self.top_header.css({'margin-top': ((_self.st*.07) - 72) +"px"});
			else _self.top_header.css({transform: 'translate3d(0px, '+((_self.st*.07)) +"px"+', 0px)', '-webkit-transform': 'translate3d(0px, '+((_self.st*.07)) +"px"+', 0px)' });

			  // other parallax images on the page
			if(_self.has_pull_quotes == true) {
				_self.positionPullQuoteImg();
			}
		  }

		}


		this.positionPullQuoteImg = function() {
			var is_onscreen, element_position;
			var scrollAmount = _self.is_tablet ? .07 : .1;
			var iOSModifier = _self.is_tablet ? 300 : 0;

			_self.parallax_img_container.each(function(){
				element_position = $(this).position().top - iOSModifier;
				// if(iOS) element_position -= 200;
				is_onscreen = (element_position - _self.st - $(window).height() <= 0) ? true : false;
				if(is_onscreen)
				{
					if(_self.parallax_method == 'margin') $(this).css({'margin-top': ((_self.st - element_position)*scrollAmount) +"px"});
					else $(this).css({transform: 'translate3d(0px, '+((_self.st - element_position)*scrollAmount) +"px"+', 0px)', '-webkit-transform': 'translate3d(0px, '+((_self.st - element_position)*scrollAmount) +"px"+', 0px)' });
				}
				else
				{
					if(_self.parallax_method == 'margin') $(this).css({'margin-top': "0px"});
					else $(this).css({transform: 'translate3d(0px, 0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)' });
				}
			});
		}

		this.resizePullQuotes = function() {
			var pull_quote_img = $('.pull-quote-img img');
			if(pull_quote_img.length > 0) {
				_self.has_pull_quotes = true;
				if($(window).width() > 992) {
					pull_quote_img.css({width: '100%'});
				} else {
					var scale_amount = 100 + ((1 - $(window).width() / 992) * 100) + '%';
					pull_quote_img.css({width: scale_amount});

				}

			}
		}

		this.init();
		return this;
	}


	/* 	Video Handling	*/
	var TopconVideo = function() {
		var _self = this;

		this.init = function() {
			this.initVideo();
			this.videoCloseTime = 5;
		}

		this.initVideo = function() {

			$(window).resize(function(){
				if($('.modal-video').length > 0) {
					_self.resizeModalVideo();
				}
			});

			// resize backstretched images and stop any playing videos on tab change
			$('#tabCollection-solutionSet').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
				// send pause to playing videos
				$('.ba-video').each(function(){
					var videoPlayer = $(this).find('.embed-responsive-item')[0];
					_self.videoApi(videoPlayer, 'pause');
				});
			});

			$('.modal-video').on('shown.bs.modal', function (e) {
				var videoPlayer = $(this).find('.embed-responsive-item')[0];
				_self.videoApi(videoPlayer, 'play');
				_self.resizeModalVideo();
			});


			$('.modal-video').on('hide.bs.modal', function (e) {
				var videoPlayer = $(this).find('.embed-responsive-item')[0];
				_self.videoApi(videoPlayer, 'pause');
			});


			// inline BA video playing
			$(document).on('click', '.ba-video', function(e){
				var videoPlayer = $(this).find('.embed-responsive-item')[0];
				_self.videoApi(videoPlayer, 'play');
				$(this).children('.backstretch').fadeOut(300);
				$(this).prev('.close-ba-video').removeClass('hidden').css({opacity:0}).fadeTo(300,1);
				$(this).children('.video-container').removeClass('hidden').css({opacity:0, left:0}).fadeTo(500,1);

				$(this).animate({height: $(videoPlayer).css("height") }, 350, function(){
					$(this).css({height: 'auto'});
				});
			});

			$(document).on('click', '.close-ba-video', function(e){
				_self.closeBaVideo($(this));
			});

			// hero video playing
			$(document).on('click', '.hero-video-link', function(e){

				var videoPlayer = $('#hero-video').find('.embed-responsive-item')[0];
				var containerHeight = $('#hero-container').css('height');
				$('#hero-wrapper').css({height:containerHeight});
				$('#hero-main .backstretch, #hero-container').fadeOut(300, function(){
					_self.videoApi(videoPlayer, 'play');
					$('#hero-video').removeClass('hidden').css({opacity:0}).fadeTo(500,1);
					$('#hero-wrapper').animate({height: $(videoPlayer).css("height") }, 350, function(){
						$('#hero-wrapper').css({height: 'auto'});
						$('.close-hero-video').removeClass('hidden');
					});
				});
			});

			$(document).on('click', '.close-hero-video', function(e){
				var videoPlayer = $('.hero-video').find('.embed-responsive-item')[0];
				_self.videoApi(videoPlayer, 'pause');
				$('.close-hero-video').addClass('hidden');
				$('#hero-video').fadeOut(300, function(){
					$('#hero-main .backstretch, #hero-container').fadeIn(300);
				});
			});

		}

		this.videoApi = function(videoPlayer, videoCommand) {
			var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
			var videoContent = videoPlayer.src;
			// log("I have been called on " + videoPlayer + "with the command of " + videoCommand);


			var is_vimeo = (videoContent.search('vimeo') > -1);
			if(is_vimeo) {
				var player = $f(videoPlayer);
			}

			switch(videoCommand) {
				case 'play':
					//console.log("PLAY");
					if(iOS == true) {
						videoPlayer.src = videoPlayer.src;
					} else {
						if(is_vimeo) {
							player.api('play');
							player.addEvent('finish', function(){


								_self.closeVideoAfterStop(videoPlayer);
							});
						}
						else {
							videoPlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
						}
					}
					break;

				case 'pause':
					if(is_vimeo) videoPlayer.contentWindow.postMessage('{"method":"pause"}', '*');
					else videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
					break;
			}
		}

		this.closeVideoAfterStop = function(videoPlayer) {
			setTimeout(function(){
				_self.exitFullscreen();
				$('#' + $(videoPlayer).data('close-button')).click();
			}, _self.videoCloseTime);
		}

		this.closeBaVideo = function($close_button) {
	    	var $ba_video = $close_button.next('.ba-video');
			var videoPlayer = $ba_video.find('.embed-responsive-item')[0];

			_self.videoApi(videoPlayer, 'pause');
			$close_button.fadeOut(300);
			// get div height
			var containerHeight = $ba_video.closest('.ba-video').css('height');

			$ba_video.find('.video-container').fadeOut(300, function(){
				$(this).css({left:'-160000px'});
			});
			$ba_video.animate({height: containerHeight}, 350, function(){
				// $('.ba-video').attr('style', 'z-index:0; position:relative;').backstretch('resize');
				$('.ba-video').css('height', '').backstretch('resize');
				$ba_video.find('.backstretch').fadeIn(300);

			});
	    }

	    this.resizeModalVideo = function() {
			var windowHeight = $(window).height();
			var modalBody = $('.modal-video').find('.modal-body');
			var modalHeaderHeight = $('.modal-video').find('.modal-header').height();
			var videoFrame = $('.modal-video').find('iframe');

			var videoFrameHeight = Math.floor(windowHeight * .70);

			modalBody.css({
	              'max-height':'100%'
	       	});
			videoFrame.css({
	              'max-height':'100%'
	       	});

	       	videoFrame.height(videoFrameHeight);
	       	modalBody.height(videoFrame.height() + 2 + 'px');
		}

		this.exitFullscreen = function () {
		  if(document.exitFullscreen) {
		    document.exitFullscreen();
		  } else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();
		  } else if(document.webkitExitFullscreen) {
		    document.webkitExitFullscreen();
		  }
		}

		this.init();
		return this;
	}


	/* TopconSearch */
	var TopconSearch = function() {
		var _self = this;
		this.typeahead_id = 0;
		this.suggestion_index = false;
		this.last_query = '';
		this.typeahead_is_listening = true;

		// the master switch
		if($('#search-typeahead').length > 0 && $('#search-typeahead').data('enabled') == 1) {
			this.enable_typeahead = true;
		} else {
			this.enable_typeahead = false;
		}


		this.init = function() {

		    $('#search').on('click', function() {

				if(typeof _gaq == 'object') _gaq.push(['_trackEvent', 'Search', 'Open']);

		    	$('.navbar-collapse nav').fadeOut();
		    	$('.header-industry, .header-simple').addClass('faded');

		    	if ($('.dropdown.keep-open').hasClass('open')) {
					$('.dropdown.keep-open .dropdown-toggle').trigger('click');
		    	}
		    	$('#search-typeahead').addClass('hidden');

		    	$('#search-container').find('input').attr('value','');
		    	$('#search-container').delay(150).slideDown(150,"linear",function(){
		    		$('#search-container').css('overflow','');
		    		$('#search-container').find('input').focus();
		    	});
		    	_self.clearTypeahead();
		    });

		    $(document).on('click', '.view-search-page, #edit-query', function(){
		    	_self.clearTypeahead();
		    });
		    $(document).on('click', '#close-search', function() {
		    	_self.closeSearch();
		    });

		    // arrow keys, shift, ctrl, command
		    var keys_to_ignore = [37, 38, 39, 40, 16, 17, 18, 91, 93];
		    var up_arrow = 38;
		    var down_arrow = 40;
		    //typeahead
		    $(document).on('keydown', '#edit-query', function(e) {
		    	clearTimeout(_self.typeahead_id);
			    if(e.which == 13) {
					_self.clearTypeahead();
					_self.typeahead_is_listening = false;
			    }
			    else if (keys_to_ignore.indexOf(e.which) == -1) {
			    	_self.typeahead_is_listening = true;
			        _self.typeahead_id = setTimeout(_self.typeahead, 150);
			        _self.suggestion_index = false;
			    } else if (e.which == down_arrow) {

			    	if($('.suggestion.active').length == 0) {
			    		_self.suggestion_index = 0;
			    	} else _self.suggestion_index++;

			    	_self.typeaheadSelect();
			    } else if (e.which == up_arrow) {

			    	if($('.suggestion.active').length == 0) _self.suggestion_index = $('.suggestion').length - 1;
			    	else _self.suggestion_index--;

			    	_self.typeaheadSelect();
			    }
			});

			$(document).on('hover', '.suggestion', function(){

				_self.suggestion_index = $('.suggestion').index(this);
		    	_self.typeaheadSelect();
			});

			$(document).on('click', '.suggestion', function(){
				$('#search-container').find('.form-submit').click();
				_self.clearTypeahead();
			});

		}

		this.typeaheadSelect = function() {

			$('.suggestion').removeClass('active')
			if(_self.suggestion_index !== false) {
				$('.suggestion').eq(_self.suggestion_index).addClass('active');
				$('#edit-query').val( $('.suggestion').eq(_self.suggestion_index).data('suggestion') );
			}
		}

		this.typeahead = function() {
			var search_string = $.trim($('#edit-query').val());
	    	if(_self.enable_typeahead && search_string.length >= 2 && search_string != _self.last_query && _self.typeahead_is_listening) {
	    		_self.last_query = search_string;

	    		$('#typeahead-spinner').removeClass('hidden');
	    		$('#search-typeahead').removeClass('hidden');
	    		// hide the container if there are no suggestions.  use spinning class instead of "hidden" to allow spinner to remain visable
	    		if( $('.search-suggestions .suggestion').length == 0 ) {
	    			$('#search-typeahead').addClass("spinning");
	    		}
	    		$('#search-typeahead').fadeIn(200);

	    		$.ajax({
			      type: "GET",
			      // dataType: "json",
			      url: "/search/typeahead/"+search_string,
			    })
			      .done(function( suggestions ) {
			      	if(suggestions && _self.typeahead_is_listening) {
			      		$('#search-typeahead').removeClass('hidden').removeClass('spinning');
			    		$('#search-typeahead').fadeIn(200);
			      		$('#typeahead-spinner').addClass('hidden');
				        $('#suggestions-container').html(suggestions);
				        $('.header-industry').addClass('hidden');
				        // darken typeahead for double-overlay
				        if($('#search-container').find('.view-content').length > 0 ) {
				        	$('#search-typeahead').addClass('opaque');
				        } else {
				        	$('#search-typeahead').removeClass('opaque');
				        }

				        if($('.view-empty').length > 0) {
				        	$('.view-empty').remove();
				        }


			      	} else {
			      		_self.clearTypeahead();
			      	}
			      });
	    	} else {
	    		_self.clearTypeahead();
	    	}
		}

		this.clearTypeahead = function() {
			clearTimeout(_self.typeahead_id);
			$('#typeahead-spinner').addClass('hidden');
			$('#search-typeahead').fadeOut(200);
			$('#suggestions-container').html('');
			$('.header-industry').removeClass('hidden');
			_self.last_query = '';
		}

		this.closeSearch = function() {
	    	if($('#search-container .view-content, #search-container .view-empty').length != 0) {
	    		$('#search-container .view-content .container, #search-container .view-empty .container p').slideUp("fast","linear",function() {
	    			$(this).parents('.view-content,.view-empty').hide();
	    			$('.navbar-collapse nav').delay(150).fadeIn();
	    			$('#search-container').slideUp();
	    			$('.header-industry, .header-simple').removeClass('faded');
	    			$('.modal-backdrop').remove();
	    		});
	    	} else {
	    		$('.navbar-collapse nav').delay(150).fadeIn();
	    		$('#search-container').slideUp();
	    		$('.header-industry, .header-simple').removeClass('faded');
	    		$('.modal-backdrop').remove();
	    	}
		}

		this.init();
		return this;
	}



	if (!Topcon) var Topcon = {};
	if(!Topcon)	Topcon = {};
	jQuery.Topcon = Topcon;

})(jQuery);