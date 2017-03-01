'use strict';
$(function() {
	//reviews
	$('._irb__owl').owlCarousel({
		margin: 0,
		navText: ['<svg class="icon-svg icon-arrow-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-prev"></use></svg>', '<svg class="icon-svg icon-arrow-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-next"></use></svg>'],
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
});