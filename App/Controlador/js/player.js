
//Alimentar o Player
import { path, secondsToMinute, reduceLyricPrimerio, reduceLyricSecundario } from "./utils.js";
import elements from "./playerElements.js";
import artistas from "./artistas.js";

import musicas from "./musicas.js";

export default{

	audioData: {},
	currentAudio : {},
	isPlaying : false,
	currentPlaying : 0,
	start(values){

		//Carregando os audios da base de dados
		this.audioData = values;

		//Pegando os Elementos
		elements.get.call(this);
		
		//Reproduzir o promeiro Audio
		this.update();
	
		//Capturar os id pra posibilitar play um audio ao clicar nele
		musicas.playSong();
		musicas.hideAllIcons(this.audioData);
	},
	display(musicas){

		var element0 = "";
		var displayMusicas = document.querySelector("#displayMusicas");

		//Exibir A lista de músicas

		for(var i = 0; i < musicas.length;i++){

			element0 += `

			    <div class="col s4" style="padding:2px">
				    <div class="col s12 singleMusicConteiner" id="${i}" title="${musicas[i].title}">
				        <div class="col s3" style="padding:0px">
				           <img class="imgAllMusics" src="App/Controlador/files/${musicas[i].cover}">
				        </div>
				        <div class="col s9">
				            ${reduceLyricSecundario(musicas[i].title)}
				            <div class="s12 allMusicArtistContainer">
				                ${musicas[i].artist}
				                <a class="btn-floating btn-large red allMusicplayPause" id="allMusicplayPause${i}">
				                    <p class="iconAllMusicplayPause">▶</p>
				                </a>
				           </div>
				        </div>
				    </div>
				</div>
			`;
		}

		displayMusicas.innerHTML = element0;
	},
	play(){

		this.isPlaying = true;
		this.playPauseIcon.innerHTML = '<i class="fa fa-pause"></i>';
		this.playPauseIcon.style = 'margin-left:4px';
		this.audio.play();
	},
	pause(){

		this.isPlaying = false;
		this.playPauseIcon.innerHTML = '<i class="fa fa-play"></i>';
		this.playPauseIcon.style = 'margin-left:7px';
		this.audio.pause();
	},
	tooglePlaypause(){

		if(this.isPlaying) {

			this.pause();
		}
		else{

			this.play();
		}

		//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

		musicas.hideAllIcons(this.audioData);

		$("#allMusicplayPause"+this.currentAudio.id+"").show();
	},
	toogleMutedVol(){

		this.audio.muted = !this.audio.muted;
		
		//Alterar o icon de volume de acordo o valor do muted
		if(this.audio.muted){

			this.volIcon.addClass("fa-volume-off");
		}
		else{

			if(this.audio.volume == 0){

				this.volIcon.className = "fa fa-volume-off";
			}
			else if(this.audio.volume != 0 && this.audio.volume < 0.50){

				this.volIcon.className = "fa fa-volume-down";
			}
			else if(this.audio.volume > 0.50){

				this.volIcon.className = "fa fa-volume-up";
			}
		}
	},
	setVolume(value){

		//Altear o volume do audio
		this.audio.volume = value / 100;

		//Aletarndo o icon de volume de acordo com o value do volume actual
		if(this.audio.volume == 0){

			this.volMuted.innerHTML = '<i  class="fa fa fa-volume-off" id="volIcon"></i>';
		}
		else if(this.audio.volume != 0 && this.audio.volume < 0.50){

			this.volMuted.innerHTML = '<i  class="fa fa-volume-down" id="volIcon"></i>';
		}
		else if(this.audio.volume > 0.50){

			this.volMuted.innerHTML = '<i  class="fa fa-volume-up" id="volIcon"></i>';
		}
	},
	setSeekBar(value){
		//Alterar o tempo do audio
		this.audio.currentTime = value;
	},
	timeUpdate(){
		//Quando o Audio estiver tocando
		this.currentDuration.innerText = secondsToMinute(this.audio.currentTime);
		this.seekBar.value = this.audio.currentTime;

		//Atualizar a view do seekbar
		this.seekBarValue.innerText = secondsToMinute(this.audio.currentTime);
		
	},
	previus(){

		//Parar o audio actual
		this.audio.pause();

		//Reproduzir o proximo audio
		this.currentPlaying--;

		if(this.currentPlaying < 0){

			this.restart();

			//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

			musicas.hideAllIcons(this.audioData);

			$("#allMusicplayPause"+this.currentAudio.id+"").show();
		} 
		else{

			this.update();
			this.audio.play();

			this.playPauseIcon.innerHTML = '<i class="fa fa-pause"></i>';
			this.playPauseIcon.style = 'margin-left:4px';

			//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

			musicas.hideAllIcons(this.audioData);

			$("#allMusicplayPause"+this.currentAudio.id+"").show();
		}
	},
	next(){

		//Parar o audio actual
		this.audio.pause();

		//Reproduzir o proximo audio
		this.currentPlaying++;

		if(this.currentPlaying == this.audioData.length){

			this.restart();

			//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

			musicas.hideAllIcons(this.audioData);

			$("#allMusicplayPause"+this.currentAudio.id+"").show();
		} 
		else{

			this.update();
			this.audio.play();

			this.playPauseIcon.innerHTML = '<i class="fa fa-pause"></i>';
			this.playPauseIcon.style = 'margin-left:4px';

			//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

			musicas.hideAllIcons(this.audioData);

			$("#allMusicplayPause"+this.currentAudio.id+"").show();
		}
	},
	playAudioListAll(value){

		//Reproduzir um audio da lista

		//Parar o audio actual
		this.audio.pause();

		//Reproduzir o proximo audio
		this.currentPlaying = value;

		this.update();
		this.audio.play();

		this.playPauseIcon.innerHTML = '<i class="fa fa-pause"></i>';
		this.playPauseIcon.style = 'margin-left:4px';


		//Ocultar os icons de play e mostrar apenas na música a ser preproduzida

		musicas.hideAllIcons(this.audioData);

		$("#allMusicplayPause"+this.currentAudio.id+"").show();
	},
	update(){

		//Atualizar o player de Audio
		this.currentAudio = this.audioData[this.currentPlaying];
		this.cover.src = path(this.currentAudio.cover);
		this.title.innerText = reduceLyricPrimerio(this.currentAudio.title);
		this.artist.innerText = this.currentAudio.artist;

		//Criando e setando o elemento audio
		elements.createAudioElements.call(this, path(this.currentAudio.file));

		this.audio.onloadeddata = () => {

			//Pegando as actions 
			elements.actions.call(this);

			//Setar o Volume do audio
			this.setVolume(this.volControl.value);
		}
	},
	restart(){

		//Reiniciar o audio -> voltar a reproduzir o primeiro Audio
		this.currentPlaying = 0;
		this.update();
		this.audio.play();
	}
}