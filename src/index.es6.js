const Readability = {
  getSyllableCount(input) {
    // lol @ this, obviously not 100%
    return input.split(' ').reduce((a, b) => {
      return a + (b.length <= 3 ? 1 : b.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
        .replace(/^y/, '').match(/[aeiouy]{1,2}/g).length);
    }, 0);
  },
  getCharacterCount(input) {
    return input.trim().match(/\w/g).length;
  },
  getWordCount(input) {
    return input.trim().match(/\S+/g).length;
  },
  getSentenceCount(input) {
    return input.trim().match(/[^\r\n.!?]+(:?(:?\r\n|[\r\n]|[.!?])+|$)/gi).length;
  },
  getComplexWords(input) {
    return input.trim().replace(/[^\w\s]/ig, '').split(' ').reduce((a, b) => {
      return a + (this.getSyllableCount(b) >= 3 ? 1 : 0);
    }, 0);
  },
  automatedReadabilityIndex(input) {
    // 4.71(characters / words) + 0.5(words / sentences) - 21.43
    const nChar = this.getCharacterCount(input);
    const nWord = this.getWordCount(input);
    const nSent = this.getSentenceCount(input);

    return ((4.71 * (nChar / nWord)) + (0.5 * (nWord / nSent))) - 21.43;
  },
  SMOGIndex(input) {
    // 1.0430 * sqrt(num polysyllables * (30/number of sentences) + 3.1291)
    const nSent = this.getSentenceCount(input);
    const nComp = this.getComplexWords(input);

    return 1.0430 * Math.sqrt(nComp * (30 / nSent) + 3.1291);
  },
  gunningFog(input) {
    // 0.4[(words/sentences) + 100(complex words/words)]
    const nWord = this.getWordCount(input);
    const nSent = this.getSentenceCount(input);
    const nComp = this.getComplexWords(input);

    return 0.4 * ((nWord / nSent) + 100 * (nComp / nWord));
  },
  colemanLiau(input) {
    // 5.89 x (characters/words) - 0.3 x (sentences/words) - 15.8
    const nChar = this.getCharacterCount(input);
    const nWord = this.getWordCount(input);
    const nSent = this.getSentenceCount(input);

    return 5.89 * (nChar / nWord) - 0.3 * (nSent / nWord) - 15.8;
  },
  fleschKincaid(input) {
    // ease - 206.835 - 1.015(total words/total sentences) - 84.6(total syllables/total words)
    // grade level - 0.39(total words/total sentences) + 11.8(total syllables/total words) - 15.59
    const nWord = this.getWordCount(input);
    const nSent = this.getSentenceCount(input);
    const nSyll = this.getSyllableCount(input);

    return {
      ease: 206.835 - 1.015 * (nWord / nSent) - 84.6 * (nSyll / nWord),
      gradeLevel: 0.39 * (nWord / nSent) + 11.8 * (nSyll / nWord) - 15.59
    }
  },
};

export default Readability;
