<?



?>

<div class="index-form-block" id="free" >
	<div class="_ifb__round item1 wow fadeInBottom" data-wow-duration="0.8s" data-wow-delay="0.2s"></div>
	<div class="_ifb__round item2 wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.4s"></div>
	<div class="_ifb__round item3 wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.4s"></div>
	<div class="_ifb__bg wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s"></div>
	<div class="container _ifb__container wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">
		<div class="_ifb__flex">
			<div class="_ifb__inner">
				<h2 class="_ifb__heading">Получи маникюр бесплатно при первом посещении!</h2>
				<form action="#" class="form-site _ifb__form azbn-order-form"> 
					<input type="hidden" name="action" value="azbnajax_call" />
					<input type="hidden" name="method" value="formsave" />
					<input type="hidden" name="type" value="json" />
					
					<input type="hidden" name="f[Источник]" value="Скидка на первое посещение" />
					
					<div class="row _ifb__row">
						<div class="cols _ifb__col-6">
							<div class="form-inline__input">
								<label for="f[name]" class="form-inline__label _name">Имя</label>
								<input type="text" class="form-inline__form-control _name form-control validate[required]" id="f[name]" name="f[Имя]" >
							</div>	
						</div>
						<div class="cols _ifb__col-6">
							<div class="form-inline__input">
								<label for="f[tel]" class="form-inline__label _phone">Телефон</label>
								<input type="tel" class="form-inline__form-control _phone form-control validate[required,custom[phone]]" id="f[tel]" name="f[Телефон]" > 
							</div>	
						</div>
						<div class="cols _ifb__col-12">
							<div class="form-inline__input agreement">
				                <input class="form-inline__agreement-checkbox validate[required]" id="f[processing]" name="f[processing]" checked type="checkbox">
				                <label for="f[processing]" class="form-inline__agreement-label"></label>
								<label for="f[processing]" class="form-inline__agreement-text">
									Я согласен на обработку <a href="/agreement/">персональных данных</a>
								</label>
				           
							</div>
						</div>
						<div class="cols _ifb__col-12">
							<div class="_ifb__btn-block">
								<button type="submit" class="btn-site btn-pink btn-submit _ifb__btn">Отправить заявку</button>
							</div>	 
						</div>
					</div>
				</form> 
			</div>
		</div>
	</div>
</div>