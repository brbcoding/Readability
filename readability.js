var CHAR_REGEX = /\w/g;
var WORD_REGEX = /\S+/g;
var SENT_REGEX = /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi;

// syllables in word
var countSyllables = function(word) {
	word = word.toLowerCase();
	if(word.length <= 3) { return 1; }
	word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
	word = word.replace(/^y/, '');
	return word.match(/[aeiouy]{1,2}/g).length;
};

// Automated Readability Index
var automatedReadability = function(input) {
    // get counts
    var charCount = input.match(CHAR_REGEX).length;
    var wordCount = input.match(WORD_REGEX).length;
    var sentCount = input.match(SENT_REGEX).length;
    // 4.71(characters/words) + 0.5(words/sentences) - 21.43
    var ariResult = 4.71 * (charCount / wordCount) + 0.5 * (wordCount / sentCount) - 21.43;
    console.log("Characters: " + charCount);
    console.log("Words: " + wordCount);
    console.log("Sentences: " + sentCount);
    console.log("Automated Readability Index: " + ariResult);
    return ariResult;
};

// Flesch-Kincaid Reading Ease
var fleschKincaidEase = function(input) {
    // 206.835 - 1.015(total words/total sentences) - 84.6(total syllables/total words)
    // split input into individual words, then get the total syllables
    var syllCount = 0;
	var words = input.replace(/[^\w\s]/ig, "").split(" ");
	var wordCount = words.length;
	var sentCount = input.match(SENT_REGEX).length;
	for(i = 0; i < words.length; i++){
		syllCount += countSyllables(words[i]);
    }
    var fkeResult = 206.835 - 1.015 * (wordCount / sentCount) - 84.6 * (syllCount / wordCount);
    console.log("Total Words: " + wordCount);
    console.log("Total Sentences: " + sentCount);
    console.log("Total Syllables: " + syllCount);
    console.log("Flesch Kincaid Reading Ease: " + fkeResult);
    return fkeResult;
};

// Flesch-Kincaid Grade Level
var fleschKincaidGradeLevel = function(input) {
    // 0.39(total words/total sentences) + 11.8(total syllables/total words) - 15.59
    var syllCount = 0;
	var words = input.replace(/[^\w\s]/ig, "").split(" ");
	var wordCount = words.length;
	var sentCount = input.match(SENT_REGEX).length;
	for(i = 0; i < words.length; i++){
		syllCount += countSyllables(words[i]);
    }
    var fkgResult = 0.39 * (wordCount / sentCount) + 11.8 * (syllCount / wordCount) - 15.59;
    console.log("Total Words: " + wordCount);
    console.log("Total Sentences: " + sentCount);
    console.log("Total Syllables: " + syllCount);
    console.log("Flesch Kincaid Grade Level: " + fkgResult);
    return fkgResult;

};

// Gunning Fog Index
var gunningFog = function(input) {
	// 0.4[(words/sentences) + 100(complex words/words)]
	var compWords = 0;
	var words = input.replace(/[^\w\s]/ig, "").split(" ");
	var wordCount = words.length;
	var sentCount = input.match(SENT_REGEX).length;
	for(i = 0; i < words.length; i++){
		if(countSyllables(words[i]) >= 3) {
			compWords += 1;
		}
    }
    var gfsResult = 0.4 * ((wordCount/sentCount) + 100 * (compWords/wordCount));
    console.log("Total Words: " + wordCount);
    console.log("Total Sentences: " + sentCount);
    console.log("Total Complex Words: " + compWords);
    console.log("Gunning Fog Score: " + gfsResult);
    return gfsResult;

};
// SMOG Index
var smogIndex = function(input) {
	// 1.0430 * sqrt(num polysyllables * (30/number of sentences) + 3.1291)
	var polyWords = 0;
	var sentCount = input.match(SENT_REGEX).length;
	var words = input.replace(/[^\w\s]/ig, "").split(" ");
	for(i = 0; i < words.length; i++){
		if(countSyllables(words[i]) >= 3) {
			polyWords += 1;
		}
    }
    var smgResult = 1.0430 * Math.sqrt(polyWords * (30/sentCount) + 3.1291);
    console.log("Total of Sentences: " + sentCount);
    console.log("Polysyllabic Words: " + polyWords);
    console.log("SMOG index: " + smgResult);
    return smgResult;
};

// Coleman-Liau Index
var colemanLiau = function(input) {
	// 5.89 x (characters/words) - 0.3 x (sentences/words) - 15.8
	var charCount = input.match(CHAR_REGEX).length;
	var wordCount = input.match(WORD_REGEX).length;
	var sentCount = input.match(SENT_REGEX).length;
	var cliResult = 5.89 * (charCount / wordCount) - 0.3 * (sentCount / wordCount) - 15.8;
	console.log("Total Characters: " + charCount);
	console.log("Total Words: " + wordCount);
	console.log("Total Sentences: " + sentCount);
	console.log("Coleman Liau Index: " + cliResult);
	return cliResult;
};

// automatedReadability("I immediately regret this decision.");
// fleschKincaidEase("I’ll have a Manhattan. And kick the vermouth to the side with a pair of steel-toed boots.");
// fleschKincaidGradeLevel("Timmy's costume unboxing event is now LIVE! Join us in chat & get the chance to win mystery prizes");
// gunningFog("I love scotch. Scotchy scotch scotch. Here it goes down, down into my belly.");
// smogIndex("Oh, I can barely lift my right arm ’cause I did so many. I don’t know if you heard me counting. I did over a thousand.");
// colemanLiau("Discovered by the Germans in 1904, they named it San Diego, which of course in German means ‘a whale’s vagina."x
