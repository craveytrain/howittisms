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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWNyYXZleS9Xb3JrL2hvd2l0dGlzbXMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9tY3JhdmV5L1dvcmsvaG93aXR0aXNtcy9qcy9tYWluLmpzIiwiL1VzZXJzL21jcmF2ZXkvV29yay9ob3dpdHRpc21zL2pzL21lc3NhZ2VzLmpzIiwiL1VzZXJzL21jcmF2ZXkvV29yay9ob3dpdHRpc21zL2pzL3ZvaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpO1xudmFyIHZvaWNlcyA9IHJlcXVpcmUoJy4vdm9pY2VzJyk7XG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG5cdGluc3BpcmF0aW9uYWxNZXNzYWdlLnRleHQgPSBtZXNzYWdlcy5nZXQoKTtcblx0c3BlZWNoU3ludGhlc2lzLnNwZWFrKGluc3BpcmF0aW9uYWxNZXNzYWdlKTtcblx0Z2EoJ3NlbmQnLCAnZXZlbnQnLCAnbWVzc2FnZScsICdwbGF5JywgaW5zcGlyYXRpb25hbE1lc3NhZ2UudGV4dCk7XG59XG5cbmlmICgnc3BlZWNoU3ludGhlc2lzJyBpbiB3aW5kb3cpIHtcblx0dmFyIGluc3BpcmF0aW9uYWxNZXNzYWdlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xuXHR2YXIgcGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8nKTtcblx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVhaycpO1xuXG5cdC8vIHdhaXQgb24gdm9pY2VzIGxvYWRlZCBiZWZvcmUgY2hhbmdpbmcgaXRcblx0c3BlZWNoU3ludGhlc2lzLm9udm9pY2VzY2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuXHRcdGluc3BpcmF0aW9uYWxNZXNzYWdlLnZvaWNlID0gdm9pY2VzLmdldCgpO1xuXHR9O1xuXG5cdGluc3BpcmF0aW9uYWxNZXNzYWdlLm9uc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0XHRwaG90by5jbGFzc0xpc3QuYWRkKCd0YWxraW5nJyk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHR9O1xuXG5cdGluc3BpcmF0aW9uYWxNZXNzYWdlLm9uZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0cGhvdG8uY2xhc3NMaXN0LnJlbW92ZSgndGFsa2luZycpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5LCBmYWxzZSk7XG5cbn1cbiIsInZhciBwaHJhc2VzID0gW1xuXCJIb3JzZXBvd2VyXCIsXG5cIkNsb2NrIHJhdGVcIixcblwiR2lnYWhlcnR6XCIsXG5cIktpY2tpbmcgdGhlIGFudCBoaWxsXCIsXG5cIlNlZW4gdGhpcyBtb3ZpZSBiZWZvcmVcIixcblwiRG9uJ3QgZnVjayBpdCB1cFwiLFxuXCJTcGVjaWFsIHNub3dmbGFrZVwiLFxuXCJHb29kIGZvciB5b3VcIixcblwiQ2FuJ3Qgd2FpdCB0byBicmVhayB1cCB3aXRoIHRoYXQgZ2lybGZyaWVuZFwiLFxuXCJUdXJuIGNoaWNrZW4gc2hpdCBpbnRvIGNoaWNrZW4gc2FsYWRcIixcblwiWWFodHplZSFcIixcblwiQmF0dGxlIHBsYW5zIHdvbid0IHN1cnZpdmUgZmlyc3QgY29udGFjdCB3aXRoIHRoZSBlbmVteVwiLFxuXCJOZXdtYW4hXCIsXG5cIldlJ3JlIHRoZSBiYWNrdXAgZ2lybGZyaWVuZFwiLFxuXCJQZXRyaSBkaXNoXCIsXG5cIk9uIHRoZSBtYXJnaW4sIG1hcmdpbmFsIHRyYWRlLW9mZiwgaXQncyBhbGwgYSBkZWNpc2lvbiBvbiB0aGUgbWFyZ2luLCBtYXJnaW5hbCB1dGlsaXR5XCIsXG5cIk9wcG9ydHVuaXR5IGNvc3RcIixcblwiQnVzaW5lc3MgcmVzdWx0c1wiLFxuXCJXaGF0J3MgZG9uZSBpcyBkb25lXCIsXG5cIlN1bmsgY29zdHMgYXJlIHN1bmtcIixcblwiOjpndW4gdG8gaGVhZDo6IGZvciBibG93aW5nIGJyYWlucyBvdXRcIixcblwiQXQgbXkgY29tcGFueSwgd2hlbiBJJ20gQ0VPLCAuLi5cIixcblwiWW91IG5lZWQgdG8gZ28gdG8gdGhlIE1hdHQgSG93aXR0IFNjaG9vbCBvZiBNYW5hZ2VtZW50XCIsXG5cIkFuaW1hbCBpbiB0aGUgem9vXCIsXG5cIjo6aGFuZHMtdG8taGVhZDo6IG1pbmQgYmxvd25cIixcblwiVHVybiB0aGUgY3JhbmssIGp1c3QgYSBmZXcgbW9yZSB0dXJucyBvZiB0aGUgY3JhbmtcIixcblwiT3BlbiBzd2l0Y2hcIixcblwiV2UgbmVlZCB0byBwdXQgaGFuZHMgb24ga2V5Ym9hcmRcIixcblwiUG9zaXRpdmUgZXh0ZXJuYWxpdHksIG5lZ2F0aXZlIGV4dGVybmFsaXR5LCBibG93YmFjaywgY29sbGF0ZXJhbCBkYW1hZ2VcIixcblwiU2VuZCBpdCB1cCB0aGUgbW91bnRhaW5cIixcblwiQ3JhenkgdG93blwiLFxuXCJXaG8ncyBkcml2aW5nIHRoZSBidXM/XCIsXG5cImdpdmUgdGhlbSBhIGNvb2tpZVwiLFxuXCJ0cnVzdCB5b3VyIGluc3RpbmN0c1wiLFxuXCJkb24ndCB0YWtlIHNoaXQgZnJvbSBhbnlvbmVcIixcblwiZ2xpZGUgcGF0aFwiLFxuXCJsYW5kIHRoZSBwbGFuZVwiLFxuXCJ0aGVyZSBpcyBhbiBlbGVtZW50IG9mIHRydXRoIGluIGV2ZXJ5IGpva2VcIixcblwidGhlIGdhbWUgKGluIHRoZSBnYW1lIHRoZW9yeSBzZW5zZSlcIixcblwiQXQgSGFydmFyZCwg4oCmXCJcbl07XG5cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24oKSB7XG5cdC8vIGdldCBhIHJhbmRvbS1pc2ggbnVtYmVyIGZyb20gdGhlIGxlbmd0aCBvZiB0aGUgcGhyYXNlcyBhcnJheVxuXHR2YXIgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGhyYXNlcy5sZW5ndGgpO1xuXG5cdC8vIHJldHVybiB0aGUgbWVzc2FnZSB0ZXh0XG5cdHJldHVybiBwaHJhc2VzW2lkeF07XG59O1xuIiwiZXhwb3J0cy5nZXQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZvaWNlcyA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCk7XG5cblx0Ly8gcmV0dXJuIHRoZSBtb3N0IE1hdHQtbHkgdm9pY2Vcblx0cmV0dXJuIHZvaWNlc1sxMF07XG59O1xuIl19
