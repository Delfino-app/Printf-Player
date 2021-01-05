
import audios from "./data.js";
import player from "./player.js";
import artistas from "./artistas.js";

export default{

	showMusicas(){

		/*var containerPlay = document.querySelector("#card-playing-container");

		var containerPlayList = document.querySelector("#displayMusicas");

		var imgAjax = '<img src="App/Vista/img/ajax-loader.gif">';*/

		/*$.ajax({

			url:'App/Controlador/Ajax/load.php',
			method:'POST',
			data:{loadSongs:1},
			dataType:'json',
			beforeSend:function(){

				//containerPlayList.innerHTML = imgAjax;
			},
			success:function(data){*/

				//audios.push(data);

				player.display(audios);
				
				player.start(audios);

				artistas.showArtitas();
			/*}			
		})*/		
	},
	hideAllIcons(value){

		for(var i = 0; i < value.length;i++){

		   $("#allMusicplayPause"+i).hide();
		}
	},
	playSong(){

		$(".singleMusicConteiner").click(function(){

			player.playAudioListAll($(this).attr("id"));
		});
	}
}