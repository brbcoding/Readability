'use strict';

var Readability = {
  getSyllableCount: function getSyllableCount(input) {
    // lol @ this, obviously not 100%
    return input.trim().split(' ').reduce(function (a, b) {
      return a + (b.length <= 3 ? 1 : b.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '').match(/[aeiouy]{1,2}/g).length);
    }, 0);
  },
  getCharacterCount: function getCharacterCount(input) {
    return input.trim().match(/\w/g).length;
  },
  getWordCount: function getWordCount(input) {
    return input.trim().match(/\S+/g).length;
  },
  getSentenceCount: function getSentenceCount(input) {
    return input.trim().match(/[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi).length;
  },
  getComplexWords: function getComplexWords(input) {
    var _this = this;

    return input.trim().replace(/[^\w\s]/ig, '').split(' ').reduce(function (a, b) {
      return a + (_this.getSyllableCount(b) >= 3 ? 1 : 0);
    }, 0);
  },
  automatedReadability: function automatedReadability(input) {
    // 4.71(characters / words) + 0.5(words / sentences) - 21.43
    var nChar = this.getCharacterCount(input);
    var nWord = this.getWordCount(input);
    var nSent = this.getSentenceCount(input);
    var arIdx = 4.71 * (nChar / nWord) + 0.5 * (nWord / nSent) - 21.43;
    return arIdx > 0 ? arIdx : 0;
  },
  smog: function smog(input) {
    // 1.0430 * sqrt(num polysyllables * (30/number of sentences) + 3.1291)
    var nSent = this.getSentenceCount(input);
    var nComp = this.getComplexWords(input);

    return 1.0430 * Math.sqrt(nComp * (30 / nSent) + 3.1291);
  },
  gunningFog: function gunningFog(input) {
    // 0.4[(words/sentences) + 100(complex words/words)]
    var nWord = this.getWordCount(input);
    var nSent = this.getSentenceCount(input);
    var nComp = this.getComplexWords(input);

    return 0.4 * (nWord / nSent) + 100 * (nComp / nWord);
  },
  colemanLiau: function colemanLiau(input) {
    // 5.89 x (characters/words) - 0.3 x (sentences/words) - 15.8
    var nChar = this.getCharacterCount(input);
    var nWord = this.getWordCount(input);
    var nSent = this.getSentenceCount(input);

    return 5.89 * (nChar / nWord) - 0.3 * (nSent / nWord) - 15.8;
  },
  fleschKincaid: function fleschKincaid(input) {
    // ease - 206.835 - 1.015(total words/total sentences) - 84.6(total syllables/total words)
    // grade level - 0.39(total words/total sentences) + 11.8(total syllables/total words) - 15.59
    var nWord = this.getWordCount(input);
    var nSent = this.getSentenceCount(input);
    var nSyll = this.getSyllableCount(input);

    return {
      ease: 206.835 - 1.015 * (nWord / nSent) - 84.6 * (nSyll / nWord),
      gradeLevel: 0.39 * (nWord / nSent) + 11.8 * (nSyll / nWord) - 15.59
    };
  }
};