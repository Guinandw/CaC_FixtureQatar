
	
	
	
	let key = "c94baaa2d916d6b290cd29822678abf17832efd7c6cf7b7dc5976ee777ed7760";
	const modal = document.querySelector(".modal-cubierta");
	
	//esta funcion abre el modal y pide la info a la API.
	function showTeam(teamID){
		//console.log(teamID)
		modal.classList.add('modal-on')
	fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamID}=&APIkey=${key}`)
      .then(response =>response.json())
      .then((equipo) => {
          	console.log(equipo);
		 	console.log(equipo.result[0].players.length);
			detalleEquipo(equipo);
      }); 
	}

	//oculta la tarjeta y vacia el contenido que se habia cargado anteriormente
	function hideTeam(){
		modal.classList.remove('modal-on') 
		document.querySelector('.modal-cubierta').innerHTML = ''
	}
	// es el encargado de hacer cada una de las tarjetas y rellena el modal
	function detalleEquipo(equipo){
		
		var tarjetas= `
		
            <h3>PAIS: ${equipo.result[0].team_name}</h3>
            <h4>ENTRENADOR: ${equipo.result[0].coaches[0].coach_name}  </h4>
			<div class="contenedor-jugadores">`;
			for (let i = 0; i < equipo.result[0].players.length; i++) {
				tarjetas +=
				`<div class="tarjeta-jugador">
                <div class="img-container">
				<img src="${equipo.result[0].players[i].player_image}" 
				alt="Foto de ${equipo.result[0].players[i].player_name}" class="img-jugador">
				</div>
                <p class="nombreJugador .arabicBolt">${equipo.result[0].players[i].player_name}</p>
                <p class="posicion .arabicBolt">${traductor(equipo.result[0].players[i].player_type)}</p>
            </div>`
				
			}
			tarjetas += '</div> <button class="cerrar-modal" onclick="hideTeam()">CERRAR</button>';
			document.querySelector('.modal-cubierta').innerHTML = tarjetas
		   
	}

	//como la info de la API viene en ingles, se traducen al español.
	function traductor(posicion){
		var posEsp;
		if(posicion === 'Defenders'){
			posEsp = 'Defensor'
		}else if(posicion === 'Midfielders'){
			posEsp = 'Mediocampista'
		}else if(posicion === 'Goalkeepers'){
			posEsp = 'Arquero'
		}else if(posicion === 'Forwards'){
				posEsp = 'Delantero'
		}
		return posEsp;
	}
 
/* 


team_key: 538, team_name: 'Qatar'
team_key: 541, team_name: 'Ecuador',
team_key: 720, team_name: 'Senegal'
team_key: 10, team_name: 'Netherlands',

team_key: 16, team_name: 'England',
team_key: 644, team_name: 'Iran',
team_key: 523, team_name: 'United States'
team_key: 4, team_name: 'Wales',

team_key: 536, team_name: 'Argentina',
team_key: 647, team_name: 'Saudi Arabia',
team_key: 511, team_name: 'Mexico',
team_key: 18, team_name: 'Poland',

team_key: 22, team_name: 'France',
team_key: 529, team_name: 'Australia',
team_key: 7, team_name: 'Denmark',
team_key: 719, team_name: 'Tunisia',

team_key: 19, team_name: 'Spain',
team_key: 516, team_name: 'Costa Rica',
team_key: 21, team_name: 'Germany',
team_key: 540, team_name: 'Japan',

team_key: 6, team_name: 'Belgium',
team_key: 512, team_name: 'Canada',
team_key: 717, team_name: 'Morocco',
team_key: 14, team_name: 'Croatia',

team_key: 531, team_name: 'Brazil',
team_key: 675, team_name: 'Serbia',
team_key: 2, team_name: 'Switzerland',
team_key: 530, team_name: 'Cameroon',

team_key: 23, team_name: 'Portugal',
team_key: 725, team_name: 'Ghana',
team_key: 539, team_name: 'Uruguay',



*/

/*
{success: 1, result: Array(1)}
result
: 
Array(1)
0
: 
coaches
: 
Array(1)
0
: 
coach_age
: 
null
coach_country
: 
null
coach_name
: 
"L. van Gaal"
[[Prototype]]
: 
Object
length
: 
1
[[Prototype]]
: 
Array(0)
players
: 
Array(26)
0
: 
{player_key: 3263882609, player_name: 'J. Cillessen', player_number: '', player_country: null, player_type: 'Goalkeepers', …}
1
: 
{player_key: 2076522167, player_name: 'M. Flekken', player_number: '', player_country: null, player_type: 'Goalkeepers', …}
2
: 
{player_key: 3067561041, player_name: 'K. Scherpen', player_number: '', player_country: null, player_type: 'Goalkeepers', …}
3
: 
{player_key: 1285504325, player_name: 'N. Aké', player_number: '', player_country: null, player_type: 'Defenders', …}
4
: 
{player_key: 797046591, player_name: 'D. Blind', player_number: '', player_country: null, player_type: 'Defenders', …}
5
: 
{player_key: 2449761154, player_name: 'M. de Ligt', player_number: '', player_country: null, player_type: 'Defenders', …}
6
: 
{player_key: 2665071992, player_name: 'S. de Vrij', player_number: '', player_country: null, player_type: 'Defenders', …}
7
: 
{player_key: 3215091168, player_name: 'D. Dumfries', player_number: '', player_country: null, player_type: 'Defenders', …}
8
: 
{player_key: 196906865, player_name: 'H. Hateboer', player_number: '', player_country: null, player_type: 'Defenders', …}
9
: 
{player_key: 862847919, player_name: 'T. Malacia', player_number: '', player_country: null, player_type: 'Defenders', …}
10
: 
{player_key: 2416069962, player_name: 'B. Martins Indi', player_number: '', player_country: null, player_type: 'Defenders', …}
11
: 
{player_key: 2858897941, player_name: 'J. Teze', player_number: '', player_country: null, player_type: 'Defenders', …}
12
: 
{player_key: 3130336844, player_name: 'J. Timber', player_number: '', player_country: null, player_type: 'Defenders', …}
13
: 
{player_key: 906522436, player_name: 'V. van Dijk', player_number: '', player_country: null, player_type: 'Defenders', …}
14
: 
player_age
: 
"25"
player_country
: 
null
player_goals
: 
"0"
player_image
: 
"https://apiv2.allsportsapi.com/logo/players/57744_f-de-jong.jpg"
player_key
: 
2377882003
player_match_played
: 
"4"
player_name
: 
"F. de Jong"
player_number
: 
""
player_red_cards
: 
"0"
player_type
: 
"Midfielders"
player_yellow_cards
: 
"1"
[[Prototype]]
: 
Object
15
: 
{player_key: 1180371369, player_name: 'D. Klaassen', player_number: '', player_country: null, player_type: 'Midfielders', …}
16
: 
{player_key: 3842200340, player_name: 'T. Koopmeiners', player_number: '', player_country: null, player_type: 'Midfielders', …}
17
: 
{player_key: 1355371500, player_name: 'J. Schouten', player_number: '', player_country: null, player_type: 'Midfielders', …}
18
: 
{player_key: 1652829940, player_name: 'G. Til', player_number: '', player_country: null, player_type: 'Midfielders', …}
19
: 
{player_key: 4060197324, player_name: 'S. Berghuis', player_number: '', player_country: null, player_type: 'Forwards', …}
20
: 
{player_key: 2375441316, player_name: 'S. Bergwijn', player_number: '', player_country: null, player_type: 'Forwards', …}
21
: 
{player_key: 2003280452, player_name: 'M. Depay', player_number: '', player_country: null, player_type: 'Forwards', …}
22
: 
{player_key: 157543942, player_name: 'C. Gakpo', player_number: '', player_country: null, player_type: 'Forwards', …}
23
: 
{player_key: 2404983797, player_name: 'V. Janssen', player_number: '', player_country: null, player_type: 'Forwards', …}
24
: 
{player_key: 685941965, player_name: 'N. Lang', player_number: '', player_country: null, player_type: 'Forwards', …}
25
: 
{player_key: 4166974286, player_name: 'W. Weghorst', player_number: '', player_country: null, player_type: 'Forwards', …}
length
: 
26
[[Prototype]]
: 
Array(0)
team_key
: 
10
team_logo
: 
"https://apiv2.allsportsapi.com/logo/10_netherlands.jpg"
team_name
: 
"Netherlands"
[[Prototype]]
: 
Object
length
: 
1
[[Prototype]]
: 
Array(0)
success
: 
1
[[Prototype]]
: 
Object
*/