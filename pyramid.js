function pyramid(character, height) {
  let result = ''
  const charLength = character.length

  for (let i = 1; i <= height; i++) {
    const chars = 2 * i - 1
    const totalCharWidth = chars * charLength
    const baseWidth = (2 * height - 1) * charLength
    const spaces = (baseWidth - totalCharWidth) / 2

    result += ' '.repeat(spaces / charLength) + character.repeat(chars)

    if (i < height) {
      result += '\n'
    }
  }
  return result
}
