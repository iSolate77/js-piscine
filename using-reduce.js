function adder(numbers, initialValue = 0) {
  return numbers.reduce((acc, num) => acc + num, initialValue)
}

function sumOrMul(numbers, initialValue = 1) {
  return numbers.reduce(
    (acc, num) => (num % 2 === 0 ? acc * num : acc + num),
    initialValue,
  )
}

function funcExec(functions, initialValue) {
  return functions.reduce((acc, func) => func(acc), initialValue)
}
