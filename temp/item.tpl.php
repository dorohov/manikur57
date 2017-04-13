<?



?>

<div class="content-block news-item-content-block">
	<div class="container _nicb__container">
		<h1 class="_nicb__heading heading-site"><? the_title();?></h1>
		<div class="_nicb__date"><?=get_the_date('d.m.Y');?></div>
		<div class="text-block">
			<?
			the_content();
			?>
		</div>
		
		<?
		$images = get_field('images', $this->post['id']);
		if($images != '' && count($images)) {
		
		?>
		
		<div class="row _nicb__gallery-row">
		
			<?
			foreach($images as $img) {
				
				$img_sm = $this->Imgs->selfImg($img, '760x507');
				$img_full = $this->Imgs->selfImg($img, 'full');
				
			?>
			<div class="cols _nicb__gallery-cols wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">
				<a href="<?=$img_full;?>" class="fancybox _nicb__gallery-img" rel="gallery-news" >
					<img src="<?=$img_sm;?>" alt="">
				</a>
			</div>
			<?
			}
			?>
		
		</div>
		
		<?
		}
		?>
		
		<div class="_nicb__btn-back">
			<a class="btn-site btn-back" href="javascript:history.back()">
				<span>
					<svg class="icon-svg icon-return" role="img">
						<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#return"></use>
					</svg>						
				</span>
				Вернуться назад
			</a>
		</div>		
	</div>
</div>