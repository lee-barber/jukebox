var previousButton = document.querySelector(".previous")

var pauseButton = document.querySelector(".pause")

var stopButton = document.querySelector(".stop")

var playButton = document.querySelector(".play")

var nextButton = document.querySelector(".next")

var songs = ['audio/acid-jazz.mp3', 'audio/the-big-score.mp3', 'audio/90-seconds.mp3','audio/biggie.mp3', 'audio/feel-the-funk.mp3', 'audio/keep-it-tight.mp3']

var audioFunctions = new Audio()

var index = 0;

audioFunctions.src = songs[index]

var path = document.querySelector(".songPath")

var nextSong = document.querySelector(".upNext")

previousButton.addEventListener("click", function(){
	if (index == 0){
		index = 0;
	}
	else {
		index--;
	}
	audioFunctions.src = songs[index];
	nextSong.innerHTML = songs[index]
	if (index == songs.length+1){
		index = 0;
	}
	else {
		index++;
	}
	audioFunctions.play();
	path.innerHTML = "You are listening to: " + songs[index];
})

pauseButton.addEventListener("click", function(){
	audioFunctions.pause();
	path.innerHTML = "You are listening to: " + songs[index];
})

stopButton.addEventListener("click", function(){
	audioFunctions.pause();
	audioFunctions.currentTime = 0;
})

playButton.addEventListener("click", function(){
	audioFunctions.play();
	path.innerHTML = "You are listening to: " + songs[index];
	path.style.color = "red"
	path.style.fontSize = "20px"
})
	
nextButton.addEventListener("click", function(){
	if (index == songs.length-1){
		index = 0;
	}
	else {
		index++;
	}
	audioFunctions.src = songs[index];
	audioFunctions.play();
	path.innerHTML = songs[index];
	path.innerHTML = "You are listening to: " + songs[index];
})