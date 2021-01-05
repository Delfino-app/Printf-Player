<?php


class modelo{


	public static function addSongModelo($tabela,$dados){

		$stmt = conexao::conectar()->Prepare("INSERT INTO $tabela(title, artist, cover, file) VALUES(:title, :artist, :cover, :file)");

		$stmt->BindParam(":title",$dados["title"], PDO::PARAM_STR);
		$stmt->BindParam(":artist",$dados["artist"], PDO::PARAM_STR);
		$stmt->BindParam(":cover",$dados["cover"], PDO::PARAM_STR);
		$stmt->BindParam(":file",$dados["file"], PDO::PARAM_STR);


		if($stmt->execute()){

			return "Feito";
		}
		else{

			return "Error";
		}
	}
	public static function dadosNome($tabela,$nome){

		$stmt = conexao::conectar()->Prepare("SELECT * FROM $tabela WHERE artist =:nome");

		$stmt->BindParam(":nome",$nome, PDO::PARAM_STR);

		$stmt->execute();

		return $stmt->fetchAll();
	}
	public static function addArtistModelo($tabela,$nome){

		$stmt = conexao::conectar()->Prepare("INSERT INTO $tabela(nome) VALUES(:nome)");

		$stmt->BindParam(":nome",$nome, PDO::PARAM_STR);

		if($stmt->execute()){

			return "Feito";
		}
		else{

			return "Error";
		}
	}
	public static function verificarAddArtistModelo($tabela,$nome){

		$stmt = conexao::conectar()->Prepare("SELECT * FROM $tabela WHERE nome =:nome");

		$stmt->BindParam(":nome",$nome, PDO::PARAM_STR);

		$stmt->execute();

		return $stmt->fetch();
		
	}

	public static function loadSongsModelo($tabela){

		$stmt = conexao::conectar()->Prepare("SELECT * FROM $tabela ORDER BY id DESC");

		$stmt->execute();

		return $stmt->fetchAll();
	}

	public static function loadArtistasModelo($tabela){

		$stmt = conexao::conectar()->Prepare("SELECT * FROM $tabela ORDER BY nome ASC");

		$stmt->execute();

		return $stmt->fetchAll();
	}
}