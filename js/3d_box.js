document.getElementsByTagName("body")[0].addEventListener("touchstart", function() {
	var bgMusic = document.getElementById("bg_music");
	if(bgMusic.paused) {
		bgMusic.play();
	}
}, false);