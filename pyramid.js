function pyramid(character, height) {
  let result = ''
  for (let i = 1; i <= height; i++) {
    const chars = 2 * i - 1
    const spaces = height - i

    result += ' '.repeat(spaces) + character.repeat(chars)

    if (i < height) {
      result += '\n'
    }
  }
  return result
}
