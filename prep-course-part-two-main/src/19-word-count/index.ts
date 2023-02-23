/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
     
  count(sentence: string) {
    
    const wordCounts: { [key: string]: number } = {};
    
    const words = sentence.trim().toLowerCase().split(/\s+/); 
   
    for (const word of words) {
      if (!wordCounts[word]) {
        wordCounts[word] = 0;
      }
      wordCounts[word]++;
    }

    return wordCounts;
  }
}

export { Words };
