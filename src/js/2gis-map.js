var map;
DG.then(function () {
	map = DG.map('2gis-map', {
		center: [52.978891,36.075092],
		zoom: 17,
		scrollWheelZoom: false,
        fullscreenControl: false
  	});
	var myIcon = DG.icon({
		iconUrl: '/img/icon/icon-map.png',
		iconRetinaUrl: '/img/icon/icon-map.png',
		iconSize: [48, 120],
		iconAnchor: [24, 120],
		popupAnchor: [0, 0]
	});
	DG.marker([52.978904, 36.075878], {icon: myIcon}).addTo(map).bindPopup('Маникюр.<br> г. Орёл, ул. Максима Горького 44');
});