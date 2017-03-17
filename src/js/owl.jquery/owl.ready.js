'use strict';
$(function() {
	//reviews
	$('._irb__owl').owlCarousel({
		margin: 0,
		navText: ['<svg class="icon-svg icon-arrow-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-prev"></use></svg>', '<svg class="icon-svg icon-arrow-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-next"></use></svg>'],
		nav: true,
		center: true,
		dots: false,
		smartSpeed: 500,
		loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				items:1
			},
			768 : {
				items:2
			},
			900 : {
				items:3
			}
		}
	});	
	$('._iacb__owl').owlCarousel({
		margin: 0,
		navText: ['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#back"></use></svg>', '<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#next"></use></svg>'],
		
		center: true,
		dots: true,
		items:1,
		smartSpeed: 700,
		animateOut: 'fadeOut',
		loop: true,
		//loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				nav: false,
			},
			768 : {
				nav: true,
			},			
		}
	});	
	/*$('._ncb__owl').owlCarousel({
		margin: 0,
		navText: ['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#back"></use></svg>', '<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#next"></use></svg>'],
		dots: true,
		smartSpeed: 700,
		animateOut: 'fadeOut',
		//loop: true,
		//loop: true,
		mouseDrag: false,
		responsive : {
			0 : {
				nav: false,
				items:1,
			},
			768 : {
				nav: true,
				items:3,
			},			
		}
	});*/	
	/*
	$('._iab__owl-people').owlCarousel({
		margin: 0,
		dots: true,
		items:1,
		smartSpeed: 700,
		animateOut: 'fadeOut',
		loop: true,
		mouseDrag: false,
		nav: false,
	});	
	$('._iab__owl-interior').owlCarousel({
		margin: 0,
		dots: true,
		items:1,
		smartSpeed: 700,
		animateOut: 'fadeOut',
		loop: true,
		mouseDrag: false,
		nav: false,
	});*/	
});