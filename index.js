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

var path = document.querySelector(".songPath")
// creates a variable named 'path' that uses DOM Manipulation to target the HTML and select the class 'songPath' using the native JS method 'querySelector' (instead of 'getElementbyID' or 'getElementByClassName'--the 'querySelector' allows you to choose either an ID or a Class using the same method, 'querySelector')

var nextSong = document.querySelector(".upNext")
	nextSong.innerHTML = "Next song up: " + songs[index+1]
// calls the 'nextSong' variable and links it to the HTML (via 'innerHTML' DOM Manipulation) then tells it to print the string text concatonated with the variable 'songs' set to the array 'index' (which defaults to initially equal 0) plus 1 so that it is printing the file path value of whatever song plays next
	nextSong.style.color = "blue"
// calls the 'nextSong' variable and links it to the HTML (via 'innerHTML" DOM Manipulation) then tells it to set the text style color to red (doesn't work via CSS...)
	nextSong.style.fontSize = "20px"
// calls the 'nextSong' variable and links it to the HTML (via 'innerHTML" DOM Manipulation) then tells it to set the text style size to 20px (doesn't work via CSS...)

audioFunctions.src = songs[index]
// defines the object 'audioFunctions' to equal the source for list of songs with an array equal to the variable named 'index' (with a value of 0)

previousButton.addEventListener("click", function(){
// calls the 'previousButton' variable and uses the native JS method 'addEventListener' to wait for a 'click' event, upon which time it executes the following function on the targeted div class:
	if (index == 0){
		index = 0;
	}
// if 'index' (starts at '0') is equal to 0 then set 'index' to 0 (this sounds counter intuitive but you're basically saying "if the index is at 0, keep it at 0"--this way the Jukebox doesn't cycle below 0 and throw JS errors in the console because the function was not designed to take numbers < 0).
	else {
		index--;
	}
// else (otherwise), if the index does not equal 0, set the index to it's current value minus 1 (which will skip to the previous track) 
	audioFunctions.src = songs[index];
// sets the object 'audioFunctions' source to equal the 'songs' variable ('songs' = an array of all the file paths to the songs) with an array equal to 'index' (which = 0)--you're basically using the native '.src' (source) method called upon the object so that it knows which array of file paths to choose from when the button is clicked to go to the previous song ('index--' or 'index minus 1')
	path.innerHTML = songs[index]
// calls the variable 'path' (which uses DOM Manipulation to target the class 'songPath') to equal the variable 'songs' with an array of 'index'--tells the JS to print the filename to the screen where the class 'songPath' is defined
	audioFunctions.play();
// uses the native JS method 'play' called upon the object 'audioFunctions' to pause the audio
	path.innerHTML = "You are listening to: " + songs[index];
// calls the variable 'path' (which uses DOM Manipulation to target the class 'songPath') to equal (print) the string text and concatonates that with the songs variable at it's current index (the songs variable with argument index = the current filepath of the song)
})

pauseButton.addEventListener("click", function(){
// calls the 'pauseButton' variable and uses the native JS method 'addEventListener' to wait for a 'click' event, upon which time it executes the following function on the targeted div class:
	audioFunctions.pause();
// uses the native JS method 'pause' called upon the object 'audioFunctions' to pause the audio
	path.innerHTML = "You are listening to: " + songs[index];
// calls the class 'pauseButton' via DOM Manipulation to do the following operations upon the targeted HTML div class 'pause' upon being clicked:
// 1) pause the audio via the native JS method '.pause' and
// 2) target the variable 'path' (which points to the Class '.songPath') to print the string text "You are listneing to" concatonated with the current song at the array [index] (the indicies varies because it starts a 0 but changes if 'next' or 'previous' is clicked)
})

stopButton.addEventListener("click", function(){
// calls the 'stopButton' variable and uses the native JS method 'addEventListener' to wait for a 'click' event, upon which time it executes the following function on the targeted div class:
	audioFunctions.pause();
// uses the native JS method 'pause' called upon the object 'audioFunctions' to pause the audio 
	audioFunctions.currentTime = 0;
// assigns the object 'audioFunctions' native JS method 'currentTime' to equal 0
})

playButton.addEventListener("click", function(){
// calls the 'playButton' variable and uses the native JS method 'addEventListener' to wait for a 'click' event, upon which time it executes the following function on the targeted div class:
	audioFunctions.play();
// uses native Audio method in JS '.play' to play the audio from the variable 'audioFunctions' (which = the object Audio)
	path.innerHTML = "You are listening to: " + songs[index];
// calls the 'path' variable and links it to the HTML (via 'innerHTML') then tells it to print the string text concatonated with the variable 'songs' set to the array 'index' (which defaults to initially equal 0)
	path.style.color = "red"
// calls the 'path' variable and links it to the HTML (via 'innerHTML') then tells it to set the style color to red (doesn't work via CSS...)
	path.style.fontSize = "20px"
// calls the 'path' variable and links it to the HTML (via 'innerHTML') then tells it to set the style font size to 20px (doesn't work via CSS...)
})

nextButton.addEventListener("click", function(){
// calls the 'nextButton' variable and uses the native JS method 'addEventListener' to wait for a 'click' event, upon which time it executes the following function on the targeted div class:
	if (index == songs.length-1){
// if the index value is equal to the variable 'songs' length minus 1, then:
		index = 0; 
// set the index to 0 (there are 6 songs in the array but because arrays are counted starting at index 0, the 6th/last song is counted as index 5.  This if statement is true when the last index (5) is set to the 'song' array length minus 1 (songs.length-1 = 5).  In other words, IF song.length=6 AND index=5 (6-5=5)... THEN 5=5 (true), THEN set index to 0). The purpose of this if statement is to stop the next button from advancing any further or returning an 'undefined' value when there aren't any other songs remaining in the array to advance to.  In doing so, the next button is effectively deactivated when the last song in the array is reached.
		nextSong.innerHTML = "Next song up: " + songs[index]
// calls the 'nextSong' variable and links it to the HTML (via 'innerHTML') then tells it to print the string text concatonated with the variable 'songs' set to the array 'index' (which = 0)
	}
	else {
		nextSong.innerHTML = "Next song up: " + songs[index+2]
// if the above condition is not true (it isn't the last song in the array) then advance the song by it's current index + 2 (the current index is always behind by 1 since it starts at 0 so +2 is actually +1)
		index++;
// if the if statement above is false (meaning there is in fact another song in the array to advance to), then (else) advance the index from it's current value + 1 (notated as ++)
	}
	audioFunctions.src = songs[index];
// sets the source of the 'audioFunctions' variable to equal the songs variable at 'index' (which equals 0).  This basically tells the Audio object where to find the source file path for the songs in the array that it is playing when each function is executed (e.g. play, stop, next, etc.)
	audioFunctions.play();
// when 'nextButton' is clicked, tells the variable 'audioFunctions' (which equals the Audio object) to use the native JS method of '.play' to play the source file 
	path.innerHTML = "You are listening to: " + songs[index];
// uses DOM Manipulation to target 'path' (which targets the div element 'songPath') to equal the string text concatonated with the variable 'songs' at it's current index (which starts at 0 by default) and print (return) that value to the div element 
	path.style.color = "red"
// calls the 'path' variable and links it to the HTML (via DOM Manipulation) then tells it to set the text style color to red (doesn't work via CSS...)
	path.style.fontSize = "20px"
// calls the 'path' variable and links it to the HTML (via DOM Manipulation) then tells it to set the text font size to 20px (doesn't work via CSS...)
	})