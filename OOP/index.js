var previousButton = document.querySelector(".previous")
// creates a variable called 'previousButton' that targets the HTML document div class (CSS class) named "play"

var pauseButton = document.querySelector(".pause")

var stopButton = document.querySelector(".stop")

var playButton = document.querySelector(".play")

var nextButton = document.querySelector(".next")

var randomButton = document.querySelector(".random")

var songs = ['audio/acid-jazz.mp3', 'audio/the-big-score.mp3', 'audio/90-seconds.mp3','audio/biggie.mp3', 'audio/feel-the-funk.mp3', 'audio/keep-it-tight.mp3']

var audioFunctions = new Audio()

var index = 0;
// sets the song index to start at 0

audioFunctions.src = songs[index]

var info = document.querySelector(".songInfo")

previousButton.addEventListener("click", function(){
	if (index == 0){
		index = 0;
	}
	else {
		index--;
	}
	audioFunctions.src = songs[index];
	audioFunctions.play();
})

pauseButton.addEventListener("click", function(){
	audioFunctions.pause()
})

stopButton.addEventListener("click", function(){
	audioFunctions.pause();
	audioFunctions.currentTime = 0;
})

playButton.addEventListener("click", function(){
	audioFunctions.play()
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
})