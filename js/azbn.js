
$(function(){
	
	
	console.log($('.azbn-order-form'));
	
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
	
});
