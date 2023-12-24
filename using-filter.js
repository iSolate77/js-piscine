function filterShortStateName(arr) {
  return arr.filter((state) => state.length < 7)
}

function filterstartVowel(arr) {
  return arr.filter((state) => /^[aeiou]/i.test(state))
}

function filter5Vowels(arr) {
  return arr.filter((state) => state.match(/[aeiou]/gi).length >= 5)
}

function filterDistinctVowels(arr) {
  return arr.filter((state) => {
    const vowels = state.match(/[aeiou]/gi)
    return new Set(vowels).size === vowels.length
  })
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
