function pronoun(str) {
  let pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
  let words = str.split(' ')
  let result = {}
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (pronouns.includes(word.toLowerCase())) {
      let pronoun = word.toLowerCase()
      let nextWord = words[i + 1]
      if (!result[pronoun]) {
        result[pronoun] = {
          word: [],
          count: 0,
        }
      }
      if (nextWord) {
        result[pronoun].word.push(nextWord)
      }
      result[pronoun].count++
    }
  }
  return result
}
