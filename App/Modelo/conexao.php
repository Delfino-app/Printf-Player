<?php


class conexao{


	public static function conectar(){

		$link = new PDO("mysql:host=localhost;dbname=playsong","root","");

		return $link;
	}
}