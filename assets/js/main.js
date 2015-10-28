/************************************************************************\
	Magnus Aviation
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace
/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

	// ENABLE HOVER STATE ON TOUCHSCREENS
	/********************************************************************/
	//$('.tile').bind('touchstart touchend', function() {})
	$('.tile').bind('touchend', function(e) {
		//e.preventDefault();
		$(this).toggleClass('hover_effect')
	})

	// ARROW JUMP NAVIGATION
	/********************************************************************/
	// cache each link with a hashtag
	$('a[href*=#]').each(function() {
		$(this).click(function(e) {
			e.preventDefault()
			var targetOffset = $($(this).attr('href')).offset().top
			$('html, body').animate({ scrollTop: targetOffset }, 1000, 'swing')
			// console.log('page scrolling to ' + $(this).attr('href'))
		})
	})

	// HERO SLIDER
	/********************************************************************/

	// initialise main slider
	$('.slider').slick({

	    autoplay: true,
	    dots: true,
		// fade: true,
		cssEase: 'linear',
        //arrows: true,
        asNavFor: '.slider-title',

        // set up the custom slide navigation
		customPaging : function(slider, i) {
	        var pager = $(slider.$slides[i]).data('pager')
	        return '<a>' + pager + '</a>'
	    },

	})

	// set up title slider
	$('.slider-title').slick({
        arrows: false,
        asNavFor: '.slider',
	});

	// reflow the slider navigation to sit within the hero container
	$('.slider .slick-dots').prependTo($('.hero .container'))

	// set up portfolio slider 
	$('.portfolio-slider').slick({
        // arrows: false,
	})

	// set up chopper slider 
	$('.chopper-slider').slick({
		// infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				}
			},
		]

	})

	// set up news slider
	$('.news-slider').slick({
	    dots: true,
	})

	//$('.news-slider .slick-dots').clone().appendTo($('.page-template-news header'))


	// SHOW PLACEHOLDER FOR DATE INPUT FIELDS
	/********************************************************************/

	$('.datefield').onfocus = function (event) {
		this.type = 'date';
		this.focus();
	}
	/*----------------------------------------------------------------------*/	
}) // END doc ready