<?
if(is_user_logged_in()) {
	$wpq = new WP_Query;
	$teams = $wpq->query(array(
		'post_type' => 'team',
		'orderby' => 'menu_order title',
		'order' => 'ASC',
		'posts_per_page' => -1,
	));

	if(count($teams)) { 
?>

<div class="index-team-block" id="team-index">
	<div class="container _itb__container wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">	
		<h2 class="_itb__heading">Наши сотрудники</h2>
		<div class="_itb__inner">
			<div class="row _itb__row line1">
				
				<?
				$i = 0;
				foreach($teams as $p) {		
					$i++;
					$link = l($p->ID);
					
					if($i < 5) {
						$work_position = get_post_meta($p->ID, 'work_position', true);
						$img_sm = $this->Imgs->postImg($p->ID, '335x502');
						$img_full = $this->Imgs->postImg($p->ID, 'full');			
						
						
					?>
					
					<div class="cols _itb__cols">
						<div class="_itb__team-item">
							<a href="<?=$link;?>"><img src="<?=$img_sm;?>" alt=""></a>
							<div class="_itb__team-name"><?=$p->post_title;?></div>
							<div class="_itb__team-post"><?=$work_position;?></div>
						</div>
					</div>
					
					<?
					}
				}
				?>
				
			</div>
			<div class="_itb__team-list collapse" id="team-collapse">
				<div class="row _itb__row line2">
					
					<?
					$i = 0;
					foreach($teams as $p) {
						$link = l($p->ID);
						
						$i++;
						
						if($i > 4) {
							
							$work_position = get_post_meta($p->ID, 'work_position', true);
							$img_sm = $this->Imgs->postImg($p->ID, '335x502');
							$img_full = $this->Imgs->postImg($p->ID, 'full');
							
						?>
						
						<div class="cols _itb__cols">
							<div class="_itb__team-item">
								<a href="<?=$link;?>"><img src="<?=$img_sm;?>" alt=""></a>
								<div class="_itb__team-name"><?=$p->post_title;?></div>
								<div class="_itb__team-post"><?=$work_position;?></div>
							</div>
						</div>
						
						<?
						}
					}
					?>
					
				</div>
			</div>
			
			<?
			if(count($teams) > 4) {
			?>
			
			<div class="_itb__btn-block">
				<button 
					type="button" 
					class="btn-site btn-team" 
					data-toggle="collapse" 
					data-target="#team-collapse" 
					aria-expanded="false" 
					data-exp-false="Все сотрудники" 
					data-exp-true="Скрыть"
				>
					<span><svg class="icon-svg icon-arrow-price" role="img">
						<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#arrow-price"></use>
					</svg></span>
				</button> 
			</div>
			
			<?
			}
			?>
			
		</div>
	</div>
</div>
<?}
} else{
$wpq = new WP_Query;

$posts = $wpq->query(array(
	'post_type' => 'photo',
	//'post_parent' => 0,
	'orderby' => 'menu_order title',
	'order' => 'ASC',
	'posts_per_page' => -1,
	'tax_query' => array(array(
		'taxonomy' => 'photo_taxonomies',
		'field' => 'slug',
		'terms' => array('team'),
	)),
));

if(count($posts)) {

?>

<div class="index-team-block" id="team-index">
	<div class="container _itb__container wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">	
		<h2 class="_itb__heading">Наши сотрудники</h2>
		<div class="_itb__inner">
			<div class="row _itb__row line1">
				
				<?
				$i = 0;
				foreach($posts as $p) {
					
					$i++;
					
					if($i < 5) {
						
						$work_position = get_post_meta($p->ID, 'work_position', true);
						$img_sm = $this->Imgs->postImg($p->ID, '335x502');
						$img_full = $this->Imgs->postImg($p->ID, 'full');
						
					?>
					
					<div class="cols _itb__cols">
						<div class="_itb__team-item">
							<a href="<?=$img_full;?>" data-title="<?=$p->post_title;?> - <?=$work_position;?>" rel="team-gallery" class="_itb__team-preview fancybox"><img src="<?=$img_sm;?>" alt=""></a>
							<div class="_itb__team-name"><?=$p->post_title;?></div>
							<div class="_itb__team-post"><?=$work_position;?></div>
						</div>
					</div>
					
					<?
					}
				}
				?>
				
			</div>
			<div class="_itb__team-list collapse" id="team-collapse">
				<div class="row _itb__row line2">
					
					<?
					$i = 0;
					foreach($posts as $p) {
						
						$i++;
						
						if($i > 4) {
							
							$work_position = get_post_meta($p->ID, 'work_position', true);
							$img_sm = $this->Imgs->postImg($p->ID, '335x502');
							$img_full = $this->Imgs->postImg($p->ID, 'full');
							
						?>
						
						<div class="cols _itb__cols">
							<div class="_itb__team-item">
								<a href="<?=$img_full;?>" data-title="<?=$p->post_title;?> - <?=$work_position;?>" rel="team-gallery" class="_itb__team-preview fancybox"><img src="<?=$img_sm;?>" alt=""></a>
								<div class="_itb__team-name"><?=$p->post_title;?></div>
								<div class="_itb__team-post"><?=$work_position;?></div>
							</div>
						</div>
						
						<?
						}
					}
					?>
					
				</div>
			</div>
			
			<?
			if(count($posts) > 4) {
			?>
			
			<div class="_itb__btn-block">
				<button 
					type="button" 
					class="btn-site btn-team" 
					data-toggle="collapse" 
					data-target="#team-collapse" 
					aria-expanded="false" 
					data-exp-false="Все сотрудники" 
					data-exp-true="Скрыть"
				>
					<span><svg class="icon-svg icon-arrow-price" role="img">
						<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#arrow-price"></use>
					</svg></span>
				</button> 
			</div>
			
			<?
			}
			?>
			
		</div>
	</div>
</div>

<?

}
}

?>



<div class="index-advantages-block">
	<div class="container _iab__container">
		<div class="_iab__img-adv">
			<div class="_img wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s"><img src="<?=$this->path('img');?>//bg/bg-adv.png" alt=""></div>
			<div class="_logo"><svg class="icon-svg icon-logo-text" role="img">
				<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#logo-text"></use>
			</svg></div>
			<div class="_text-left _text wow fadeYInRight" data-wow-duration="0.8s" data-wow-delay="0.3s">
				<p>Мы&nbsp;против маникюра в&nbsp;неподготовленных помещениях, где не&nbsp;соблюдаются технологии и&nbsp;не&nbsp;обрабатываются инструменты.</p>
				<p>Маникюр на&nbsp;дому&nbsp;— это прошлый век!</p>
			</div>
			<div class="_text-right _text wow fadeYInLeft" data-wow-duration="0.8s" data-wow-delay="0.3s">
				
				<p> Наш маникюрный салон&nbsp;— это место, где сбываются мечты и&nbsp;фантазии воплощаются в&nbsp;реальность. У&nbsp;нас современное оборудование, уютная атмосфера и&nbsp;демократичные цены.</p>
				<!-- <p>Думаете, красивый маникюр&nbsp;— это всего лишь правильная техника и&nbsp;качественные материалы? Вовсе нет! Это ещё и&nbsp;творчество без границ! Мастера нашей элитной студии маникюра и&nbsp;педикюра знают это как никто другой. Они всегда работают со&nbsp;вдохновением, поэтому и&nbsp;результаты их&nbsp;работы всегда превосходят даже самые смелые ожидания.</p> -->
			</div>
		</div>
	</div>
</div>