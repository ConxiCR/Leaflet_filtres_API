En aquesta pràctica crearem una api en PHP amb una base de dades MYSQL per mostrar restaurants en un mapa amb la llibreria Leaflet. 

##nivell 1## 
//fase1 -	Crear un base de dades anomenada my_app juntament amb la taula restaurants. 
			Afegir com a mínim 10 restaurants tenint en compte que un restaurant pot tenir més d’un tipus de menjar diferent.
			Pista: kind_food es de tipus SET
		
//fase2 - 	1) Instal·lar un servidor Apache (Programa Xampp). Copiar el contingut de la següent carpeta a:
			Ubuntu: /opt/lamp/htdocs
			Windows: C/:xampp/htdocs
			Mac: Caldrà muntar una unitat
			2) Obrim un navegador i escrivim:

				http://localhost/mapa/api/apiRestaurants.php (per carregar la API amb el json dels restaurants)
				http://localhost/mapa/index.html (per carregar el mapa)


//fase3 - L’objectiu d’aquesta fase serà programar la part 3.1 i la 3.2 amb javascript (+ jquery).

##nivell 2## 
		Crea un nou camp a la base de dades anomenat photo, que sigui un varchar de 30 caràcters. 
		Necessitem que al clicar a un marcador aparegui la foto juntament amb la resta d'informació.
		

##nivell 3## (fitxer ex3.html)
		El centre del mapa ha de ser la nostra posició GPS real actual.


##fase 1

//Creació base de dades
CREATE TABLE `my_app`.`restaurants` ( `id_restaurant` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `address` VARCHAR(50) NOT NULL , `latitud` DECIMAL(8.5) NOT NULL , `longitud` DECIMAL(8.5) NOT NULL , `king_food` SET('Italiana','Mediterrània ','Catalana','Sense Gluten','De Mercat','Portuguesa','tapes','Japonesa') NOT NULL , PRIMARY KEY (`id_restaurant`)) ENGINE = InnoDB; 

//Introducció dades a la BBDD
SELECT * FROM `restaurants`
id_restaurant	name	address	latitud	longitud	king_food
1 	La Piazzenza 	Avinguda de Gaudí  27 	41.40728 	2.17405 	Italiana
2 	Restaurant Art i Tapes 	Carrer de Mallorca 450 	41.40551 	2.17761 	Mediterrània
3 	Can Josep 	Carrer de Roger de Flor  237 	41.40287 	2.16769 	Catalana
4 	Restaurant Gut 	Carrer del Perill 13 	41.39976 	2.16128 	Sense Gluten
5 	Restaurant Zed 	Carrer de València 399 	41.40163 	2.17462 	De Mercat
6 	Oporto Restaurante 	Carrer de Sardenya 296 Local 1 	41.40247 	2.17522 	Portuguesa
7 	The Sopa Boba 	Carrer del Bruc 115 	41.39657 	2.16658 	tapes
8 	PUR Restaurant 	Passatge de la Concepció 11 	41.39485 	2.16007 	De Mercat
9 	Con Gracia 	Carrer de Martínez de la Rosa 8 	41.39941 	2.16010 	Catalana
10 	Shunka 	Carrer dels Sagristans 5 	41.38536 	2.17515 	Japonesa
