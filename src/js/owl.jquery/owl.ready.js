'use strict';
$(function() {
	$(document.body).on('translated.owl.carousel', '.owl-carousel', {}, function(event){
		event.preventDefault();		
		var block = $(this);		
		var items = block.find('.owl-item:not(.cloned)');		
		var active = items.filter('.active');		
		var i = active.find('a').attr('data-owl-item');		
		$('.owl-count__item.is--count').html(i); 		
	});	
	$('.owl-carousel').trigger('translated.owl.carousel');	
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
	$('.team-card__owl').owlCarousel({
		margin: 0,
		navText: ['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-prev"></use></svg>', '<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-next"></use></svg>'],

		//navText: ['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-prev"></use></svg>', '<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/svg/sprite.svg#arrow-next"></use></svg>'],	
		dots: false,
		items:3,
		smartSpeed: 500,
		nav: true,
		loop: true,
		autoWidth: true,
		margin: 10,
		responsive : {
			0 : {
				items:1,
				autoWidth:false,
				loop: false,
			},
			/*500 : {
				//items:2,
			},*/
			768:{
				loop: true,
				autoWidth:true,
			},
			1000 : {
				items:3,
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