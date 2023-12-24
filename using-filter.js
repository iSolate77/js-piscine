function filterShortStateName(state) {
  return state.length <= 6
}

function filterstartVowel(state) {
  return /^[aeiou]/i.test(state)
}

function filter5Vowels(state) {
  return state.match(/[aeiou]/gi).length >= 5
}

function filterDistinctVowels(state) {
  const vowels = state.match(/[aeiou]/gi)
  const distinctVowels = new Set(vowels)
  return distinctVowels.size === 5
}

function multiFilter(states) {
  return states.filter(
    (state) =>
      state.capital.length >= 8 &&
      !/^[aeiou]/i.test(state.name) &&
      /[aeiou]/i.test(state.tag) &&
      state.region !== 'South',
  )
}
