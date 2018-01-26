var previousButton = document.querySelector(".previous")
// creates a variable called 'previousButton' that targets the HTML document div class (CSS class) named "previous"

var pauseButton = document.querySelector(".pause")
// creates a variable called 'pauseButton' that targets the HTML document div class (CSS class) named "pause"

var stopButton = document.querySelector(".stop")
// creates a variable called 'stopButton' that targets the HTML document div class (CSS class) named "stop"

var playButton = document.querySelector(".play")
// creates a variable called 'playButton' that targets the HTML document div class (CSS class) named "play"

var nextButton = document.querySelector(".next")
// creates a variable called 'nextButton' that targets the HTML document div class (CSS class) named "next"

var songs = ['audio/acid-jazz.mp3', 'audio/the-big-score.mp3', 'audio/90-seconds.mp3','audio/biggie.mp3', 'audio/feel-the-funk.mp3', 'audio/keep-it-tight.mp3']
// creates a variable called 'songs' with an array that includes the file path to the 6 songs in the Jukebox

var audioFunctions = new Audio()
// creates an object called 'Audio' based on the key value properties of the variable named 'audioFunctions'

var index = 0;
// sets the variable 'index' (for the list of songs) to start at 0--why?--the index is set to 0 so that later in the code, the index can be referenced and moved up and down as opposed to setting the index to one fixed value that can't (or easily) be changed

audioFunctions.src = songs[index]
// defines the object 'audioFunctions' to equal the source for list of songs with an array equal to the variable named 'index' (with a value of 0)

var path = document.querySelector(".songPath")
// creates a variable named 'path' that uses DOM Manipulation to target the HTML and select the class 'songPath' using the native JS method 'querySelector' (instead of 'getElementbyID' or 'getElementByClassName'--the 'querySelector' allows you to choose either an ID or a Class using the same method, 'querySelector')

previousButton.addEventListener("click", function(){
	if (index == 0){
		index = 0;
	}
	else {
		index--;
	}
// uses DOM Manipulation to target the variable 'previousButton' (which is set to equal and target the HTML class '.previous') THEN uses 'addEventListener' to wait for the element to be clicked.  Upon clicking, a function is executed with the following function: 
// if 'index' (starts at '0') is equal to 0 then set 'index' to 0 (this sounds counter intuitive but you're basically saying "if the index is at 0, keep it at 0"--this way the Jukebox doesn't cycle below 0 and throw JS errors in the console because the function was not designed to take numbers < 0).
// else (otherwise), if the index does not equal 0, set the index to it's current value minus 1 (which will skip to the previous track) 
	audioFunctions.src = songs[index];
// sets the object 'audioFunctions' source to equal the 'songs' variable ('songs' = an array of all the file paths to the songs) with an array equal to 'index' (which = 0)--you're basically using the native '.src' (source) method called upon the object so that it knows which array of file paths to choose from when the button is clicked to go to the previous song ('index--' or 'index minus 1')
	path.innerHTML = songs[index]
// calls the variable 'path' (which uses DOM Manipulation to target the class 'songPath') to equal the variable 'songs' with an array of 'index'--tells the JS to print the filename to the screen where the class 'songPath' is defined
	audioFunctions.play();
// uses the native JS method 'play' called upon the object 'audioFunctions'
	path.innerHTML = "You are listening to: " + songs[index];
// calls the variable 'path' (which uses DOM Manipulation to target the class 'songPath') to equal (print) the string text and concatonates that with the songs variable at it's current index (the songs variable with argument index = the current filepath of the song)
})

pauseButton.addEventListener("click", function(){
	audioFunctions.pause();
	path.innerHTML = "You are listening to: " + songs[index];
})

stopButton.addEventListener("click", function(){
	audioFunctions.pause();
// uses native Audio method in JS '.pause' to pause the audio on the variable 'audioFunctions'
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