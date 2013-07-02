require('rhyme');
var CHAR_REGEX = /\w/g;
var WORD_REGEX = /\S+/g;
var SENT_REGEX = /[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi;
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
};
// Flesch-Kincaid Grade Level
var fleschKincaidGradeLevel = function(input) {
	// 0.39(total words/total sentences) + 11.8(total syllables/total words) - 15.59
};

// Gunning Fog Index
var gunningFog = function(input) {

};
// SMOG Index
var smogIndex = function(input) {

};
// Fry Readability Formula
var fryFormula = function(input) {

};
// Coleman-Liau Index
var colemanLiau = function(input) {

};

automatedReadability("Hello, World! How re you doing? I'm fine, thanks.................... What's up. lolol.");