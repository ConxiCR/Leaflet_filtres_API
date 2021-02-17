//punto incial en el mapa
let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 13);
//map.locate({setView: true, maxZoom: 17});
//declaro mapa	
let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',	
			}).addTo(map);
//declaro icono marcador
let iconoSVG = L.icon({
				iconUrl: 'https://geopois.com/images/Icono_geopois.svg',
				iconSize: [40, 45],
				});

//en el clusters almaceno todos los markers
let markers 		= L.markerClusterGroup();

	//FASE 3.1
		//1) Relleno el data_markers con una petición a la api
let apiRestaurants	= 'http://localhost/mapa/api/apiRestaurants.php';
let restaurants 	= [];
let data_markers 	= [];
let kind_food 		= [];
let fotos			= [];

	//estructura principal. Llamo a la API para que enseñe los markers de todos los restaurantes
	function onMapLoad() {
		console.log("Mapa cargado");
		//1) Relleno el data_markers con una petición a la api
		$(document).ready(function(){
			$.ajax({
				url: apiRestaurants,
				type: 'get',
				dataType: "JSON",
				success: function(data){
					data_markers = data;
					//imprimir per pantalla
					render_to_map(data_markers, "all");
					console.log("all on map");	
					console.log(data);//visualitzo la base de dades
				//2) Añado de forma dinámica en el select los posibles tipos de restaurantes	
					data.forEach(function(value){
						//split coloca las diferentes tipos de cocinas de los restaurantes en una lista
						let kindFoodList = value.kind_food.split(",");
						for(i=0;i<kindFoodList.length; i++){
							//nos indexa toda la lista de tipos de cocina dentro de la array. Nos muestra la lista
							if(kind_food.indexOf(kindFoodList[i])==-1){
								kind_food.push(kindFoodList[i]);
							}
						}
						//llamo al html. El select detalla la lista de eventos
						$("#kind_food_selector").html(new Option('Todos','all'));
						for(i=0;i<kind_food.length; i++){
							$("#kind_food_selector").append(new Option(kind_food[i], kind_food[i]));
						}
					});
				},
				error: function (xhr, status, error) {
					console.log(xhr); 
					console.log(status); 
					console.log(error);
				}
			});
		
				//render_to_map(data_markers, "all");	
				//console.log(kind_food);
				//console.log(data_markers);
		
		});
	}
	$('#kind_food_selector').on('change', function() {
		console.log(this.value);
		render_to_map(data_markers, this.value);

	});
		//3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	function render_to_map(data_markers,filter){
	//FASE 3.2
		//1) Limpio todos los marcadores
			//limpio el cluster. Es una función de Leaflet
			markers.clearLayers();
		//2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
			$.each(data_markers,function(i){
				var marker = L.marker([data_markers[i].latitud, data_markers[i].longitud], {icon:iconoSVG}).bindPopup("<b>" + data_markers[i].name + "</b>" + 
				"<br>" + data_markers[i].address + "<br><br>" + "Cocina " + data_markers[i].kind_food);
				//se agregan los marcadores
					markers.addLayer(marker);					
				
					if(filter === "todos"){
						return true;
					}
					
					if(data_markers[i].kind_food.includes(filter)){
						return false;
					}
			});
			//agrega el MarkerClusterGroup al mapa
			map.addLayer(markers);
	}
	

	//##nivell 3##
	navigator.geolocation.getCurrentPosition(
		//obtiene posición
		(pos)=> {
			const {coords} = pos
			console.log(coords)
			L.marker([coords.latitude, coords.longitude],{icon:iconoSVG}).addTo(map);
		},
		(error) => {
			console.log(error);
		},
		{
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0

		}
	)
