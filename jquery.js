
$(document).ready(function()			/* this ensures that code can only run after the document has been loaded */
{
	/* changing the background color of h1 element

	$('h1').click(function(){

		$(this).css('background-color', '#ff0000');
	})

	*/


	/********* Sticky Navigation *********/

	$('.js--section-features').waypoint(function(direction){		/* the waypoint function has a direction as argument and this can find whether the user is scrolling down or scrolling up the webpage */

			if(direction == "down")
			{
				$('nav').addClass('sticky');	/* if the user scrolls down this features section  we add the sticky class to the nav to make it appear */
			}
			else
			{
				$('nav').removeClass('sticky');	/* if the user scrolls up this features section we remove the sticky class to make it the same way as it was orginally designed */
			}
	}, {
	  offset: '60px;'		/* this means that the sticky navigation will appear 60px before reaching this section when scrolling down */
	});



	/********* Scroll on Buttons **********/

	/* when we select the class and click on it and then we select html and body and then animate it by using scrollTop to 
	js--section-plans and and then we need to go to the top of that section so we set offset to top and then we give the 
	time to scroll in milliseconds such as 1000 */

	$('.js--scroll-to-plans').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
	});


	$('.js--scroll-to-start').click(function(){
		$('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
	});


	/*********** Navigation Scroll **********/

	/*  $('a[href*=#]:not([href=#])') - select the link element where the href attribute starts with an # symbol and then we click it */
	/* Then below that is not so important */
	/* if (target.length) - checks if element exists and then we animate it in the usual way done in the pervious example */

	$(function() {
	   $('a[href*=#]:not([href=#])').click(function(){
	   	   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
		 	var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		    if (target.length) {
		    	 $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false; 
		       }
		     }
		  });
		});


	/********* Animations on Scroll *********/

	/* to use the features of animate.css we simply to that class(element) we include .addClass and and then type animated
	and the name of the css style from animate.css */

	/* we need to make the content of the particular element invisible otherwise if it is visible then fadeIn cannot work 
	and after this animated class is added to the js--wp-1 class we need to make the content of the element visible again */

	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
	  offset: '50%'			/* we set offset because fadein property works only when we reach the start of that particular section to make it work before we set offset to 50% */
	});

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
	  offset: '50%'			
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
	  offset: '50%'			
	});

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');
	}, {
	  offset: '50%'			
	});


	/*********** Mobile Navigation **********/

	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon ion-icon');


		nav.slideToggle(200); /* slideToggle simply opens and closes a box and we specify the time within which it should open here 200ms */ 
		
		if (icon.attr("name") == "menu-sharp")
		{
			icon.attr("name","close-sharp"); 
		}
		else
		{
			icon.attr("name","menu-sharp") ;
		}

	});

});

