function pronoun(text) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
  const words = text.split(/\s+/)
  const result = {}

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase()
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 }
      }
      result[word].count++
      const nextWord = words[i + 1]
      if (nextWord) {
        result[word].word.push(nextWord)
      }
    }
  }

  return result
}
