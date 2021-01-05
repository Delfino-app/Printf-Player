<div class="container">
	<div class="row" style="margin-top:50px">
		<div class="col l12" id="card-playlist">
			<form method="POST" enctype="multipart/form-data">
				<div class="col l6" style="padding:10px;margin-top:10px;">
					<div class="row">
				        <div class="input-field col s6">
				          <input id="first_name" name="titulo" type="text">
				          <label for="first_name">Título</label>
				        </div>
				        <div class="input-field col s6">
				          <input id="last_name" name="artista" type="text">
				          <label for="last_name">Artista</label>
				        </div>
				    </div>
				    <div class="row" style="margin-top:-20px">
				    	<div class="col s12" style="padding-top:20px">
				    		<span>Cover</span><br>
						    <input name="cover" type="file">
						</div>
						<div class="col s12" style="padding-top:20px">
					        <span>Ficheiro</span><br>
					        <input name="ficheiro" accept="audio/mp3" type="file">
						</div>
						<div class="input-field col s12" style="padding-top:20px">
							<input class="btn red" type="submit" name="btnAddSong" value="Adicionar">
						</div>
				    </div>
				</div>
			</form>
			<pre>
				<?php

					controller::addSong();
				?>
			</pre>
		</div>
	</div>
</div>
