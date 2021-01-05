<?php

require_once "../../Modelo/conexao.php";
require_once "../../Modelo/modelo.php";



//Exibir Todos as Músicas

if (isset($_POST["loadSongs"])) {
	

	$value = modelo::loadSongsModelo("songs");


	$dados = array();


	if (!empty($value)) {
		
	
			
		for ($i=0; $i < count($value) ; $i++) { 
			
			$new = array(
		
				'id' => $i,
				'title' => $value[$i]["title"],
				'artist' => $value[$i]["artist"],
				'cover' => $value[$i]["cover"],
				'file' => $value[$i]["file"]
			);

			array_push($dados, $new);
		}
	
	}


	exit(json_encode($dados));
}


//Exibir Todos os Artistas

if (isset($_POST["loadArtistas"])) {
	
	$value = modelo::loadArtistasModelo("artist");
	
	$dados = array();

	$qtdMusica = "";

	if (!empty($value)) {
		
		for ($i=0; $i < count($value) ; $i++) {

			$musicas = modelo::dadosNome("songs",$value[$i]["nome"]);

			if (count($musicas) == 1) {
				
				$qtdMusica = count($musicas)." música";
			}
			elseif (count($musicas) > 1) {
				
				$qtdMusica = count($musicas)." músicas";
			}

			$new = array(
		
				'id' => $value[$i]["id"],
				'nome' => $value[$i]["nome"],
				'cover' => $value[$i]["cover"],
				'musicas' => $qtdMusica
			);

			array_push($dados, $new);
		}
	
	}


	exit(json_encode($dados));
}

//Show a List of Songs of a Artist

if (isset($_POST["artistNomeSongs"])) {
	
	$nome = $_POST["artistNomeSongs"];


	$value = modelo::dadosNome("songs",$nome);
	$dados = array();

	if (!empty($value)) {
		
		for ($i=0; $i < count($value) ; $i++) { 
			
			$new = array(
		
				'id' => $i,
				'title' => $value[$i]["title"],
				'artist' => $value[$i]["artist"],
				'cover' => $value[$i]["cover"],
				'file' => $value[$i]["file"]
			);

			array_push($dados, $new);
		}
	}

	exit(json_encode($dados));
}