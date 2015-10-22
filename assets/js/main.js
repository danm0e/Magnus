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


/*----------------------------------------------------------------------*/	
}) // END doc ready