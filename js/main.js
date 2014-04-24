var messages = require('./messages');
var voices = require('./voices');

function play() {
	inspirationalMessage.text = messages.get();
	speechSynthesis.speak(inspirationalMessage);
}

if ('speechSynthesis' in window) {
	var inspirationalMessage = new SpeechSynthesisUtterance();
	var photo = document.getElementById('photo');
	var button = document.getElementById('speak');

	// wait on voices loaded before changing it
	speechSynthesis.onvoiceschanged = function() {
		inspirationalMessage.voice = voices.get();
	};

	inspirationalMessage.onstart = function() {
		photo.classList.add('talking');
		button.classList.add('active');
	};

	inspirationalMessage.onend = function() {
		photo.classList.remove('talking');
		button.classList.remove('active');
	};

	button.addEventListener('click', play, false);

}
