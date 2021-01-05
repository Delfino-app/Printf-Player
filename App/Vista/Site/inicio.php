		<div class="container">
			<div class="row">
				<div class="col s8 l12">
					<div class="card card-container">
						<div class="col l3 white" id="card-playing-container">
							<div class="card-image" style="margin-top:5px">
				              <img class="img-cover" src="App/Vista/img/img1.jfif">
				             <div class="valign-wrapper align" id="align">
				             	<a class="btn-floating btn-large red" id="playPrevius">
				             		<p id="iconplayPreviusContainer"><i class="fa fa-angle-left"></i></p>
				             	</a>
				             	<a class="btn-floating btn-large red" id="playPause">
				             		<p id="iconPayPauseContainer"><i class="fa fa-play"></i></p>
				             	</a>
				             	<a class="btn-floating btn-large red" id="playNext">
				             		<p id="iconplayNextContainer"><i class="fa fa-angle-right"></i></p>
				             	</a>
				             </div>
				            </div>
				            <div class="card-content" id="car-content-edit">
				              <h5 class="title">Title</h5>
				              <p class="artist">Artist</p>
				            </div>
				            <div class="card-action" id="card-action-edit">
				              <div class="row valign-wrapper" style="padding:0px;">
				              	<div class="col s2" id="current_duration">00:00</div>
				              	<div class="col s6 range-field valign-wrapper">
				              		<input type="range" min=0 max=0 id="seekbar" step="1">
				              	</div>
				              	<div class="col s2" id="total_duaration">00:00</div>
				              	<span id="espace"></span>
				              	<div id="volbtnContainer">
				              		<a href="#" id="vol-muted">
				              			<i  class="fa fa-volume-up" id="volIcon"></i>
				              		</a>
				              	</div>
				              	<div class="col s3 range-field valign-wrapper" id="vol-control-container">
				              		<input type="range" min=0 max=100 id="vol-control" step="1" value="100">
				              	</div>
				              </div>
				            </div>
						</div>
						<div class="col l9 card-playlist" style="padding-right:2px">
							<?php include "App/Vista/includes/playListContainer.php"; ?>
						</div>
			        </div>
				</div>
			</div>
		</div>