<?php


spl_autoload_register(function($classe_name){


	if(file_exists("App/Controlador/".$classe_name.".php")){

		require_once "App/Controlador/".$classe_name.".php";
	}

	if(file_exists("App/Modelo/".$classe_name.".php")){

		require_once "App/Modelo/".$classe_name.".php";
	}

});