
<!DOCTYPE html>
<html>
	<head>
		<title>PlaySong</title>
		<link rel="stylesheet" type="text/css" href="1_load/css/materialize.css">
		<link rel="stylesheet" type="text/css" href="1_load/css/custom.css">
		<link rel="stylesheet" type="text/css" href="1_load/font-awesome/4.3.0/css/font-awesome.min.css">
	</head>
	<body>
		<?php
			include "App/Vista/includes/menu.php";

			controller::displayPage();
		?>
		<script type="text/javascript" src="1_load/code.jquery.com/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="1_load/dist/js/materialize.js"></script>
		<script type="text/javascript" src="1_load/js/init.js"></script>
		<script  src="App/Controlador/js/index.js" type="module"></script>
	</body>
</html>