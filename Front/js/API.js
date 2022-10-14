/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb25dbdc9dmshc79890770d8590ep1aca28jsndeef4ef06af0',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/teams?id=33', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
 */
	let key = "2c6e53892b4fd81a84173e6497aecc629135c4a2003d6dd8ba8edf90a02f0d3a";
	
	/* 	
		fetch(`https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${key}`)
      .then(response =>response.json())
      .then((equipos) => {
          console.log(equipos)
      });
			 */
		
		
 
	

	 
	
	fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=Daehan Minguk&APIkey=${key}`)
      .then(response =>response.json())
      .then((equipos) => {
          console.log(equipos)
		  console.log(equipos.result[0].team_name)
       //  fucionEquipo(
      //  equipos.result[0].team_logo,
      //  equipos.result[0].team_name) 
      }); 

 
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