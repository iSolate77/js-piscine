function retry(count, callback) {
  return async function(...args) {
    let i = 0;
    while (i < count) {
      try {
        return await callback(...args);
      } catch (err) {
        i++;
      }
    }
    throw new Error();
  };
}
