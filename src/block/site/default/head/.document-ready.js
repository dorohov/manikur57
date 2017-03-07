$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('._iab__carousel-people .item').eq(0).addClass('active');
$('._iab__carousel-interior .item').eq(0).addClass('active');
$('.carousel').carousel({interval: 5000});
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 


$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 