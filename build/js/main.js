(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var messages = require('./messages');
var voices = require('./voices');

function play() {
	inspirationalMessage.text = messages.get();
	speechSynthesis.speak(inspirationalMessage);
}

if ('speechSynthesis' in window) {
	var inspirationalMessage = new SpeechSynthesisUtterance();
	var photo = document.getElementById('photo');

	// wait on voices loaded before changing it
	speechSynthesis.onvoiceschanged = function() {
		inspirationalMessage.voice = voices.get();
	};

	inspirationalMessage.onstart = function() {
		photo.classList.add('talking');
	};

	inspirationalMessage.onend = function() {
		photo.classList.remove('talking');
	};

	document.getElementById('speak').addEventListener('click', play, false);

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
"At Harvard, …"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWNyYXZleS9Xb3JrL2hvd2l0dGlzbXMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tY3JhdmV5L1dvcmsvaG93aXR0aXNtcy9qcy9tYWluLmpzIiwiL1VzZXJzL21jcmF2ZXkvV29yay9ob3dpdHRpc21zL2pzL21lc3NhZ2VzLmpzIiwiL1VzZXJzL21jcmF2ZXkvV29yay9ob3dpdHRpc21zL2pzL3ZvaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcbnZhciB2b2ljZXMgPSByZXF1aXJlKCcuL3ZvaWNlcycpO1xuXG5mdW5jdGlvbiBwbGF5KCkge1xuXHRpbnNwaXJhdGlvbmFsTWVzc2FnZS50ZXh0ID0gbWVzc2FnZXMuZ2V0KCk7XG5cdHNwZWVjaFN5bnRoZXNpcy5zcGVhayhpbnNwaXJhdGlvbmFsTWVzc2FnZSk7XG59XG5cbmlmICgnc3BlZWNoU3ludGhlc2lzJyBpbiB3aW5kb3cpIHtcblx0dmFyIGluc3BpcmF0aW9uYWxNZXNzYWdlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xuXHR2YXIgcGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8nKTtcblxuXHQvLyB3YWl0IG9uIHZvaWNlcyBsb2FkZWQgYmVmb3JlIGNoYW5naW5nIGl0XG5cdHNwZWVjaFN5bnRoZXNpcy5vbnZvaWNlc2NoYW5nZWQgPSBmdW5jdGlvbigpIHtcblx0XHRpbnNwaXJhdGlvbmFsTWVzc2FnZS52b2ljZSA9IHZvaWNlcy5nZXQoKTtcblx0fTtcblxuXHRpbnNwaXJhdGlvbmFsTWVzc2FnZS5vbnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cGhvdG8uY2xhc3NMaXN0LmFkZCgndGFsa2luZycpO1xuXHR9O1xuXG5cdGluc3BpcmF0aW9uYWxNZXNzYWdlLm9uZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0cGhvdG8uY2xhc3NMaXN0LnJlbW92ZSgndGFsa2luZycpO1xuXHR9O1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVhaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSwgZmFsc2UpO1xuXG59XG4iLCJ2YXIgcGhyYXNlcyA9IFtcblwiSG9yc2Vwb3dlclwiLFxuXCJDbG9jayByYXRlXCIsXG5cIkdpZ2FoZXJ0elwiLFxuXCJLaWNraW5nIHRoZSBhbnQgaGlsbFwiLFxuXCJTZWVuIHRoaXMgbW92aWUgYmVmb3JlXCIsXG5cIkRvbid0IGZ1Y2sgaXQgdXBcIixcblwiU3BlY2lhbCBzbm93Zmxha2VcIixcblwiR29vZCBmb3IgeW91XCIsXG5cIkNhbid0IHdhaXQgdG8gYnJlYWsgdXAgd2l0aCB0aGF0IGdpcmxmcmllbmRcIixcblwiVHVybiBjaGlja2VuIHNoaXQgaW50byBjaGlja2VuIHNhbGFkXCIsXG5cIllhaHR6ZWUhXCIsXG5cIkJhdHRsZSBwbGFucyB3b24ndCBzdXJ2aXZlIGZpcnN0IGNvbnRhY3Qgd2l0aCB0aGUgZW5lbXlcIixcblwiTmV3bWFuIVwiLFxuXCJXZSdyZSB0aGUgYmFja3VwIGdpcmxmcmllbmRcIixcblwiUGV0cmkgZGlzaFwiLFxuXCJPbiB0aGUgbWFyZ2luLCBtYXJnaW5hbCB0cmFkZS1vZmYsIGl0J3MgYWxsIGEgZGVjaXNpb24gb24gdGhlIG1hcmdpbiwgbWFyZ2luYWwgdXRpbGl0eVwiLFxuXCJPcHBvcnR1bml0eSBjb3N0XCIsXG5cIkJ1c2luZXNzIHJlc3VsdHNcIixcblwiV2hhdCdzIGRvbmUgaXMgZG9uZVwiLFxuXCJTdW5rIGNvc3RzIGFyZSBzdW5rXCIsXG5cIjo6Z3VuIHRvIGhlYWQ6OiBmb3IgYmxvd2luZyBicmFpbnMgb3V0XCIsXG5cIkF0IG15IGNvbXBhbnksIHdoZW4gSSdtIENFTywgLi4uXCIsXG5cIllvdSBuZWVkIHRvIGdvIHRvIHRoZSBNYXR0IEhvd2l0dCBTY2hvb2wgb2YgTWFuYWdlbWVudFwiLFxuXCJBbmltYWwgaW4gdGhlIHpvb1wiLFxuXCI6OmhhbmRzLXRvLWhlYWQ6OiBtaW5kIGJsb3duXCIsXG5cIlR1cm4gdGhlIGNyYW5rLCBqdXN0IGEgZmV3IG1vcmUgdHVybnMgb2YgdGhlIGNyYW5rXCIsXG5cIk9wZW4gc3dpdGNoXCIsXG5cIldlIG5lZWQgdG8gcHV0IGhhbmRzIG9uIGtleWJvYXJkXCIsXG5cIlBvc2l0aXZlIGV4dGVybmFsaXR5LCBuZWdhdGl2ZSBleHRlcm5hbGl0eSwgYmxvd2JhY2ssIGNvbGxhdGVyYWwgZGFtYWdlXCIsXG5cIlNlbmQgaXQgdXAgdGhlIG1vdW50YWluXCIsXG5cIkNyYXp5IHRvd25cIixcblwiV2hvJ3MgZHJpdmluZyB0aGUgYnVzP1wiLFxuXCJnaXZlIHRoZW0gYSBjb29raWVcIixcblwidHJ1c3QgeW91ciBpbnN0aW5jdHNcIixcblwiZG9uJ3QgdGFrZSBzaGl0IGZyb20gYW55b25lXCIsXG5cImdsaWRlIHBhdGhcIixcblwibGFuZCB0aGUgcGxhbmVcIixcblwidGhlcmUgaXMgYW4gZWxlbWVudCBvZiB0cnV0aCBpbiBldmVyeSBqb2tlXCIsXG5cInRoZSBnYW1lIChpbiB0aGUgZ2FtZSB0aGVvcnkgc2Vuc2UpXCIsXG5cIkF0IEhhcnZhcmQsIOKAplwiXG5dO1xuXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBnZXQgYSByYW5kb20taXNoIG51bWJlciBmcm9tIHRoZSBsZW5ndGggb2YgdGhlIHBocmFzZXMgYXJyYXlcblx0dmFyIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBocmFzZXMubGVuZ3RoKTtcblxuXHQvLyByZXR1cm4gdGhlIG1lc3NhZ2UgdGV4dFxuXHRyZXR1cm4gcGhyYXNlc1tpZHhdO1xufTtcbiIsImV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB2b2ljZXMgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpO1xuXG5cdC8vIHJldHVybiB0aGUgbW9zdCBNYXR0LWx5IHZvaWNlXG5cdHJldHVybiB2b2ljZXNbMTBdO1xufTtcbiJdfQ==
