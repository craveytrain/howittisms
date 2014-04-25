(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var messages = require('./messages');
var voices = require('./voices');

function play() {
	inspirationalMessage.text = messages.get();
	speechSynthesis.speak(inspirationalMessage);
	ga('send', 'event', 'message', 'play', inspirationalMessage.text);
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

},{"./messages":2,"./voices":3}],2:[function(require,module,exports){
var phrases = [
"Horsepower",
"Clock rate",
"Gigahertz",
"Kicking the ant hill",
"Seen this movie before",
"Don't fuck it up",
"Special snowflake",
"Good for you",
"Can't wait to break up with that girlfriend",
"Turn chicken shit into chicken salad",
"Yahtzee!",
"Battle plans won't survive first contact with the enemy",
"Newman!",
"We're the backup girlfriend",
"Petri dish",
"On the margin, marginal trade-off, it's all a decision on the margin, marginal utility",
"Opportunity cost",
"Business results",
"What's done is done",
"Sunk costs are sunk",
"::gun to head:: for blowing brains out",
"At my company, when I'm CEO, ...",
"You need to go to the Matt Howitt School of Management",
"Animal in the zoo",
"::hands-to-head:: mind blown",
"Turn the crank, just a few more turns of the crank",
"Open switch",
"We need to put hands on keyboard",
"Positive externality, negative externality, blowback, collateral damage",
"Send it up the mountain",
"Crazy town",
"Who's driving the bus?",
"give them a cookie",
"trust your instincts",
"don't take shit from anyone",
"glide path",
"land the plane",
"there is an element of truth in every joke",
"the game (in the game theory sense)",
"At Harvard, …",
"Cravey, you're fired"
];

exports.get = function() {
	// get a random-ish number from the length of the phrases array
	var idx = Math.floor(Math.random() * phrases.length);

	// return the message text
	return phrases[idx];
};

},{}],3:[function(require,module,exports){
exports.get = function() {
	var voices = window.speechSynthesis.getVoices();

	// return the most Matt-ly voice
	return voices[10];
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvc291cmNlL2hvd2l0dGlzbXMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zb3VyY2UvaG93aXR0aXNtcy9qcy9tYWluLmpzIiwiL3NvdXJjZS9ob3dpdHRpc21zL2pzL21lc3NhZ2VzLmpzIiwiL3NvdXJjZS9ob3dpdHRpc21zL2pzL3ZvaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbWVzc2FnZXMgPSByZXF1aXJlKCcuL21lc3NhZ2VzJyk7XG52YXIgdm9pY2VzID0gcmVxdWlyZSgnLi92b2ljZXMnKTtcblxuZnVuY3Rpb24gcGxheSgpIHtcblx0aW5zcGlyYXRpb25hbE1lc3NhZ2UudGV4dCA9IG1lc3NhZ2VzLmdldCgpO1xuXHRzcGVlY2hTeW50aGVzaXMuc3BlYWsoaW5zcGlyYXRpb25hbE1lc3NhZ2UpO1xuXHRnYSgnc2VuZCcsICdldmVudCcsICdtZXNzYWdlJywgJ3BsYXknLCBpbnNwaXJhdGlvbmFsTWVzc2FnZS50ZXh0KTtcbn1cblxuaWYgKCdzcGVlY2hTeW50aGVzaXMnIGluIHdpbmRvdykge1xuXHR2YXIgaW5zcGlyYXRpb25hbE1lc3NhZ2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCk7XG5cdHZhciBwaG90byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG90bycpO1xuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWFrJyk7XG5cblx0Ly8gd2FpdCBvbiB2b2ljZXMgbG9hZGVkIGJlZm9yZSBjaGFuZ2luZyBpdFxuXHRzcGVlY2hTeW50aGVzaXMub252b2ljZXNjaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG5cdFx0aW5zcGlyYXRpb25hbE1lc3NhZ2Uudm9pY2UgPSB2b2ljZXMuZ2V0KCk7XG5cdH07XG5cblx0aW5zcGlyYXRpb25hbE1lc3NhZ2Uub25zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHBob3RvLmNsYXNzTGlzdC5hZGQoJ3RhbGtpbmcnKTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdH07XG5cblx0aW5zcGlyYXRpb25hbE1lc3NhZ2Uub25lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRwaG90by5jbGFzc0xpc3QucmVtb3ZlKCd0YWxraW5nJyk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHR9O1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXksIGZhbHNlKTtcblxufVxuIiwidmFyIHBocmFzZXMgPSBbXG5cIkhvcnNlcG93ZXJcIixcblwiQ2xvY2sgcmF0ZVwiLFxuXCJHaWdhaGVydHpcIixcblwiS2lja2luZyB0aGUgYW50IGhpbGxcIixcblwiU2VlbiB0aGlzIG1vdmllIGJlZm9yZVwiLFxuXCJEb24ndCBmdWNrIGl0IHVwXCIsXG5cIlNwZWNpYWwgc25vd2ZsYWtlXCIsXG5cIkdvb2QgZm9yIHlvdVwiLFxuXCJDYW4ndCB3YWl0IHRvIGJyZWFrIHVwIHdpdGggdGhhdCBnaXJsZnJpZW5kXCIsXG5cIlR1cm4gY2hpY2tlbiBzaGl0IGludG8gY2hpY2tlbiBzYWxhZFwiLFxuXCJZYWh0emVlIVwiLFxuXCJCYXR0bGUgcGxhbnMgd29uJ3Qgc3Vydml2ZSBmaXJzdCBjb250YWN0IHdpdGggdGhlIGVuZW15XCIsXG5cIk5ld21hbiFcIixcblwiV2UncmUgdGhlIGJhY2t1cCBnaXJsZnJpZW5kXCIsXG5cIlBldHJpIGRpc2hcIixcblwiT24gdGhlIG1hcmdpbiwgbWFyZ2luYWwgdHJhZGUtb2ZmLCBpdCdzIGFsbCBhIGRlY2lzaW9uIG9uIHRoZSBtYXJnaW4sIG1hcmdpbmFsIHV0aWxpdHlcIixcblwiT3Bwb3J0dW5pdHkgY29zdFwiLFxuXCJCdXNpbmVzcyByZXN1bHRzXCIsXG5cIldoYXQncyBkb25lIGlzIGRvbmVcIixcblwiU3VuayBjb3N0cyBhcmUgc3Vua1wiLFxuXCI6Omd1biB0byBoZWFkOjogZm9yIGJsb3dpbmcgYnJhaW5zIG91dFwiLFxuXCJBdCBteSBjb21wYW55LCB3aGVuIEknbSBDRU8sIC4uLlwiLFxuXCJZb3UgbmVlZCB0byBnbyB0byB0aGUgTWF0dCBIb3dpdHQgU2Nob29sIG9mIE1hbmFnZW1lbnRcIixcblwiQW5pbWFsIGluIHRoZSB6b29cIixcblwiOjpoYW5kcy10by1oZWFkOjogbWluZCBibG93blwiLFxuXCJUdXJuIHRoZSBjcmFuaywganVzdCBhIGZldyBtb3JlIHR1cm5zIG9mIHRoZSBjcmFua1wiLFxuXCJPcGVuIHN3aXRjaFwiLFxuXCJXZSBuZWVkIHRvIHB1dCBoYW5kcyBvbiBrZXlib2FyZFwiLFxuXCJQb3NpdGl2ZSBleHRlcm5hbGl0eSwgbmVnYXRpdmUgZXh0ZXJuYWxpdHksIGJsb3diYWNrLCBjb2xsYXRlcmFsIGRhbWFnZVwiLFxuXCJTZW5kIGl0IHVwIHRoZSBtb3VudGFpblwiLFxuXCJDcmF6eSB0b3duXCIsXG5cIldobydzIGRyaXZpbmcgdGhlIGJ1cz9cIixcblwiZ2l2ZSB0aGVtIGEgY29va2llXCIsXG5cInRydXN0IHlvdXIgaW5zdGluY3RzXCIsXG5cImRvbid0IHRha2Ugc2hpdCBmcm9tIGFueW9uZVwiLFxuXCJnbGlkZSBwYXRoXCIsXG5cImxhbmQgdGhlIHBsYW5lXCIsXG5cInRoZXJlIGlzIGFuIGVsZW1lbnQgb2YgdHJ1dGggaW4gZXZlcnkgam9rZVwiLFxuXCJ0aGUgZ2FtZSAoaW4gdGhlIGdhbWUgdGhlb3J5IHNlbnNlKVwiLFxuXCJBdCBIYXJ2YXJkLCDigKZcIixcblwiQ3JhdmV5LCB5b3UncmUgZmlyZWRcIlxuXTtcblxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbigpIHtcblx0Ly8gZ2V0IGEgcmFuZG9tLWlzaCBudW1iZXIgZnJvbSB0aGUgbGVuZ3RoIG9mIHRoZSBwaHJhc2VzIGFycmF5XG5cdHZhciBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwaHJhc2VzLmxlbmd0aCk7XG5cblx0Ly8gcmV0dXJuIHRoZSBtZXNzYWdlIHRleHRcblx0cmV0dXJuIHBocmFzZXNbaWR4XTtcbn07XG4iLCJleHBvcnRzLmdldCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdm9pY2VzID0gd2luZG93LnNwZWVjaFN5bnRoZXNpcy5nZXRWb2ljZXMoKTtcblxuXHQvLyByZXR1cm4gdGhlIG1vc3QgTWF0dC1seSB2b2ljZVxuXHRyZXR1cm4gdm9pY2VzWzEwXTtcbn07XG4iXX0=
