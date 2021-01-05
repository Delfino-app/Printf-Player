
import {openArtistSongsList} from "./utils.js";

export default{

	showArtitas(){

		var element0 = "";

		var displayArtistas = document.querySelector("#displayArtistas");

		$.ajax({

			url:'App/Controlador/Ajax/load.php',
			method:'POST',
			data:{loadArtistas:1},
			dataType:'json',
			beforeSend:function(){

				//containerPlayList.innerHTML = imgAjax;
			},
			success:function(data){

				//Exibir A lista de músicas

				for(var i = 0; i < data.length;i++){

					element0 += '<div class="col s4" style="padding:2px"><div class="col s12  openArtist" id="'+ data[i].id +'" artistName="'+ data[i].nome + '" title="'+data[i].nome+'"><div class="col s3" style="padding:0px"><img class="imgAllMusics" src="App/Controlador/files/'+ data[i].cover + '"></div><div class="col s9">'+ data[i].nome + '<div class="s12 allMusicArtistContainer">' + data[i].musicas + '</div></div></div></div>';
				}

				displayArtistas.innerHTML = element0;

				openArtistSongsList();
			}			
		})	
	}
}