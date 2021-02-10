var map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 13);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',	
			}).addTo(map);

//en el clusters almaceno todos los markers
let markers 		= L.markerClusterGroup();
	//FASE 3.1
	//	1) Relleno el data_markers con una petición a la api
let apiRestaurants	= 'http://localhost/mapa/api/apiRestaurants.php';
let data_markers 	= [];
let kind_food 		= [];

//FASE 3.1
	//1) Relleno el data_markers con una petición a la api
function onMapLoad() {
	console.log("Mapa cargado");
}

$(document).ready(function(){
	$.ajax({
		url: apiRestaurants,
		type: 'get',
		dataType: "json",
		success: function(data){
		  console.log(data);//visualitzo la base de dades
		  $('[data-content]').text(data.value);
		},
		error: function (xhr, status, error) {
			console.log(xhr); 
			console.log(status); 
			console.log(error);
		}
	});
});

    