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
	$('.tile').bind('touchstart touchend', function() {})

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
	$('.slick-dots').prependTo($('.hero .container'))

	/*----------------------------------------------------------------------*/	
}) // END doc ready