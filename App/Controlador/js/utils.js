 
 function secondsToMinute(time){

 	const minute = Math.floor(time / 60);
 	const second = Math.floor(time % 60);

 	
 	return `${("0" + minute).slice(-2)}:${("0" + second).slice(-2)}`

 }
 function path(file){

 	return `App/Controlador/files/${file}`;
 }

 function reduceLyricPrimerio(titulo){

 	//Reduzir as letras do titulo Secundario
 	if (titulo.length > 17 && titulo.length < 20) {

 		return titulo.substr(0,15) +'...';
 	}
 	else if(titulo.length >= 20){

 		return titulo.substr(0,17) + '...';
 	}
 	else{

 		return titulo;
 	}
 }

 function reduceLyricSecundario(titulo){

 	//Reduzir as letras do titulo Secundario
 	if (titulo.length > 18 && titulo.length < 20) {

 		return titulo.substr(0,17);
 	}
 	else if(titulo.length >= 20){

 		return titulo.substr(0,17) + '...';
 	}
 	else{

 		return titulo;
 	}
 }

function  openArtistSongsList(){

	//Open a List of Song  of a Artist
	$(".openArtist").click(function(){

		var artistNomeSongs = $(this).attr("artistName");

		var element0 = "";

		var displayArtistas = document.querySelector("#displayArtistas");

		$.ajax({

			url:'App/Controlador/Ajax/load.php',
			method:'POST',
			data:{artistNomeSongs:artistNomeSongs},
			dataType:'json',
			beforeSend:function(){

				//containerPlayList.innerHTML = imgAjax;
			},
			success:function(data){

				//Exibir A lista de músicas
				/*element0 +='<div class="col l12"><a class="btn-floating btn-large red allMusicplayPause"><p class="iconAllMusicplayPause">⬅</p></a></div>';*/

				for(var i = 0; i < data.length;i++){

					element0 += '<div class="col s4" style="padding:2px"><div class="col s12  openArtist" id="'+ data[i].id +'" artistName="'+ data[i].artist + '" title="'+data[i].title+'"><div class="col s3" style="padding:0px"><img class="imgAllMusics" src="App/Controlador/files/'+ data[i].cover + '"></div><div class="col s9">'+  reduceLyricSecundario(data[i].title) + '<div class="s12 allMusicArtistContainer">' + data[i].artist + '</div></div></div></div>';
				}

				displayArtistas.innerHTML = element0;
			}			
		});
	});
}

 
export{ path, secondsToMinute, reduceLyricPrimerio, reduceLyricSecundario, openArtistSongsList};