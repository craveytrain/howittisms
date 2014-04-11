exports.get = function() {
	var voices = window.speechSynthesis.getVoices();

	// return the most Matt-ly voice
	return voices[10];
};
