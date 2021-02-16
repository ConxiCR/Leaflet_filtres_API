let map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 10);
//map.locate({setView: true, maxZoom: 17});
	
let tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',	
			}).addTo(map);
let iconoSVG = L.icon({
				iconUrl: 'https://geopois.com/images/Icono_geopois.svg',
				iconSize: [40, 45],
				});

//en el clusters almaceno todos los markers
let markers 		= L.markerClusterGroup();

	//FASE 3.1
	//	1) Relleno el data_markers con una petición a la api
let apiRestaurants	= 'http://localhost/mapa/api/apiRestaurants.php';
let data_markers 	= [];
let kind_food 		= [];
let fotos			= [];

//FASE 3.1

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
				
				},
				error: function (xhr, status, error) {
					console.log(xhr); 
					console.log(status); 
					console.log(error);
				}
			});
		
		//2) Añado de forma dinámica en el select los posibles tipos de restaurantes
			$.getJSON(apiRestaurants, function(data,jqXHR){
				console.log(jqXHR);
				data.forEach(function(listRestaurant){
					//split ens col·loca els diferents tipus de restaurant en una llista
					let kindFoodList = listRestaurant.kind_food.split(",");
						for(i=0;i<kindFoodList.length; i++){
							//ens indexa tota la lista de cuines dintre de la array
							if(kind_food.indexOf(kindFoodList[i])==-1){
								kind_food.push(kindFoodList[i]);
							}
							//li diem al select que faci la llista
							$("#kind_food_selector").html(new Option('Todos','all'));
								for(i=0;i<kind_food.length; i++){
									$("#kind_food_selector").append(new Option(kind_food[i], kind_food[i]));
								}
						}
				});	
					//console.log(kind_food);
					//console.log(data_markers);
			});
		});
	}
	
	$('#kind_food_selector').on('change', function() {
		console.log(this.value);
		render_to_map(data_markers, this.value);

	});
  
	//3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
//FASE 3.2
   //1) Limpio todos los marcadores
   
	function render_to_map(data_markers, filter) {

		//limpio el cluster
		markers.clearLayers();

		//2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
		//bucle de marcadores
		if(filter == "all"){
				$.each(data_markers, function (index_o) {
					//creo un marcador
					var marker = L.marker([data_markers[index_o].latitud, data_markers[index_o].longitud],{icon:iconoSVG}).bindPopup("<b>" + data_markers[index_o].name + "</b>" + 
					"<br>" + data_markers[index_o].address + "<br><br>" + "Cocina " + data_markers[index_o].kind_food).openPopup();
					//se agregan los marcadores
					markers.addLayer(marker);
				});		
		
		}else {
			for(let key of data_markers){
				kind_food_selector.append(`<option value="${key}">${data_markers[key]}</option>`);
			
			}
			console.log(data_markers);
			
		}	
		
		//agrega el MarkerClusterGroup al mapa
		map.addLayer(markers);
		
	}


	

		/*L.marker(e.latlng).addTo(map)
						.bindPopup("Estas a " + radius + " meters from this point").openPopup();

		//Create circle to graphically represent location accuracy
					L.circle(e.latlng, radius).addTo(map);
				}

		//Code for handling any errors that come up
				function onLocationError(e) {
					alert(e.message);
				}

				map.on('locationfound', onLocationFound);
				map.on('locationerror', onLocationError);

		//Locate point and zoom to that location with a zoom level of 16
				map.locate({setView: true, maxZoom: 16});*/