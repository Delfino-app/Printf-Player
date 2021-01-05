<?php

class controller{


	public static function startProject(){


		include "App/Vista/home.php";
	}

	public static function displayPage(){

		if(isset($_GET["pg"])){

			$page = $_GET["pg"];


			if (file_exists('App/Vista/Admin/'.$page.'.php')) {
				
				include  'App/Vista/Admin/'.$page.'.php';
			}
			elseif (file_exists('App/Vista/Site/'.$page.'.php')) {
				
				include  'App/Vista/Site/'.$page.'.php';
			}
			else{

				include  'App/Vista/Site/inicio.php';
			}
		}
		else{

			include  'App/Vista/Site/inicio.php';
		}
	}

	public static function addSong(){


		if (isset($_POST["btnAddSong"])) {
			
			$titulo = $_POST["titulo"];
			$artista = $_POST["artista"];
			$cover = delfinoapp::singleImgs($_FILES["cover"]);
			$file =delfinoapp::multipleImgs($_FILES["ficheiro"]);

			$dados = array(

				"title" => $titulo,
				"artist" => $artista,
				"cover" => $cover,
				"file" => $file
			);

			$add = modelo::addSongModelo("songs",$dados);

			$verificarArtista = modelo::verificarAddArtistModelo("artist",$dados["artist"]);

			if(empty($verificarArtista)){

				$addArtist = modelo::addArtistModelo("artist",$dados["artist"]);
			}

			header("location:index.php?pg=admin&info=".$add);
		}
	}
}