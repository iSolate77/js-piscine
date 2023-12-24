function filterShortStateName(arr) {
  return arr.filter((state) => state.length < 7)
}

function filterStartVowel(arr) {
  return arr.filter((state) => /^[aeiou]/i.test(state))
}

function filter5Vowels(arr) {
  return arr.filter((state) => state.match(/[aeiou]/gi).length >= 5)
}

function filter1DistinctVowels(arr) {
  return arr.filter((state) => state.match(/[aeiou]/gi).length === 1)
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
