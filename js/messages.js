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
