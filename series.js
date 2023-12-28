async function series(asyncFunctions) {
  const results = []
  for (const asyncFunction of asyncFunctions) {
    const result = await asyncFunction()
    results.push(result)
  }
  return results
}
