
import { secondsToMinute } from "./utils.js";

export default{

	get(){

		this.cover  = document.querySelector(".img-cover");
		this.title  = document.querySelector(".title");
		this.artist = document.querySelector(".artist");
		this.palyPause = document.querySelector("#playPause");
		this.playPauseIcon = document.querySelector("#iconPayPauseContainer");
		this.volMuted = document.querySelector("#vol-muted");
		this.volControl = document.querySelector("#vol-control");
		this.seekBar = document.querySelector("#seekbar");
		this.currentDuration = document.querySelector("#current_duration");
		this.totalDuration = document.querySelector("#total_duaration");

		//Bônus
		this.seekBarValue = document.querySelector("span.value");
		this.btnPrevius = document.querySelector("#playPrevius");
		this.btnNext = document.querySelector("#playNext");
		this.volIcon = document.querySelector("#valIcon");
	},
	createAudioElements(audio){
		this.audio  = new Audio(audio);
	},
	actions(){

		//Play Pause Audio
		this.palyPause.onclick = () => this.tooglePlaypause();

		//Muted Audio
		this.volMuted.onclick = () => this.toogleMutedVol();

		//Change audio volume
		this.volControl.oninput = () => this.setVolume(this.volControl.value);
		this.volControl.onchange = () => this.setVolume(this.volControl.value);

		//Mudar o tempo do audio
		this.seekBar.oninput = () => this.setSeekBar(this.seekBar.value);
		this.seekBar.onchange = () => this.setSeekBar(this.seekBar.value);

		this.seekBar.max = this.audio.duration;
		this.totalDuration.innerText = secondsToMinute(this.audio.duration);

		//Quando o audio estiver tocando
		this.audio.ontimeupdate = () => this.timeUpdate();


		//Quando o audio termina
		this.audio.onended = () => this.next();

		//Anterior e Proximo
		this.btnPrevius.onclick = () => this.previus();
		this.btnNext.onclick = () => this.next();
	}
};