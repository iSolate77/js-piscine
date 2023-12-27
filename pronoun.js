function pronoun(text) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
  const words = text.split(/\s+/)
  const result = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().replace(/[^\w\s]|_/g, '')
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 }
      }
      result[word].count++
      const nextWord = words[i + 1]
      if (
        nextWord &&
        !pronouns.includes(nextWord.toLowerCase().replace(/[^\w\s]|_/g, ''))
      ) {
        result[word].word.push(nextWord.replace(/[^\w\s]|_/g, ''))
      }
    }
  }

  return result
}
