"use strict";$(function(){$(document.body).on("translated.owl.carousel",".owl-carousel",{},function(e){e.preventDefault();var s=$(this),t=s.find(".owl-item:not(.cloned)"),n=t.filter(".active"),o=n.find("a").attr("data-owl-item");$(".owl-count__item.is--count").html(o)}),$(".owl-carousel").trigger("translated.owl.carousel"),$("._irb__owl").owlCarousel({margin:0,navText:['<svg class="icon-svg icon-arrow-prev" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-prev"></use></svg>','<svg class="icon-svg icon-arrow-next" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-next"></use></svg>'],nav:!0,center:!0,dots:!1,smartSpeed:500,loop:!0,mouseDrag:!1,responsive:{0:{items:1},768:{items:2},900:{items:3}}}),$("._iacb__owl").owlCarousel({margin:0,navText:['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#back"></use></svg>','<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#next"></use></svg>'],center:!0,dots:!0,items:1,smartSpeed:700,animateOut:"fadeOut",loop:!0,mouseDrag:!1,responsive:{0:{nav:!1},768:{nav:!0}}}),$(".team-card__owl").owlCarousel({margin:0,navText:['<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-prev"></use></svg>','<svg class="icon-svg" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbnbasetheme/img/svg/sprite.svg#arrow-next"></use></svg>'],dots:!1,items:3,smartSpeed:500,nav:!0,loop:!0,autoWidth:!0,margin:10,responsive:{0:{items:1,autoWidth:!1,loop:!1},768:{loop:!0,autoWidth:!0},1e3:{items:3}}})});