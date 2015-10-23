/************************************************************************\
	Magnus Aviation
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace
/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

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

	// ARROW JUMP NAVIGATION
	/********************************************************************/

	$(".slider").slick({

	    autoplay: true,
	    dots: true,
		// fade: true,
		cssEase: 'linear',
        arrows: false,

		customPaging : function(slider, i) {
	        var pager = $(slider.$slides[i]).data('pager')
	        return '<a>' + pager + '</a>'
	    },

	    responsive: [{ 
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	})

$('.slick-dots').prependTo($('.hero .container'))

/*----------------------------------------------------------------------*/	
}) // END doc ready