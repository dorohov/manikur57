$(document.body).on('click', '.tabs-block__nav a', {}, function(event){
	event.preventDefault();

	var btn = $(this);
	var id = btn.attr('href');

	$(id).find('.tab-content .tab-pane').removeClass("active in").eq(0).addClass('active in');
	$(id).find('.tabs-price__nav li.active').removeClass("active");
})