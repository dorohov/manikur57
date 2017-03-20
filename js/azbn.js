
$(function(){
	
	//console.log($('.azbn-order-form'));
	
	$(document.body).on('submit', '.azbn-order-form', {}, function(event){
		event.preventDefault();
		
		var form = $(this);
		var form_s = form.serialize();
		
		$.post('/wp-admin/admin-ajax.php', form_s, function(data){
			
			form.trigger('reset');
			
			//data-toggle="modal" data-target="#modal-message"
			$('#modal-message').modal();
			
		});
		
	});
	
	
	$(document.body).on('click', '.azbn-portfolio-cat-switcher li a[data-toggle="tab"]', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var flt = btn.attr('href');
		
		$('.azbn-portfolio-cat-main-img').removeClass('in active');
		$('.azbn-portfolio-cat-main-img[data-azbn-portfolio-cat-main-img-filter="' + flt + '"]').addClass('in active');
		
	});
	
	
});
