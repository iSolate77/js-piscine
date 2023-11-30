function pyramid(character, height) {
  let result = ''
  const charLength = character.length
  const baseWidth = (2 * height - 1) * charLength

  for (let i = 1; i <= height; i++) {
    const charWidth = (2 * i - 1) * charLength
    const spaces = (baseWidth - charWidth) / 2
    result += ' '.repeat(spaces / charLength) + character.repeat(2 * i - 1)
    if (i < height) {
      result += '\n'
    }
  }
  return result
}
