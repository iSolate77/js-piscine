function get(src, path) {
  return path.split('.').reduce((acc, key) => acc[key], src)
}
