function hashCode(data) {
  let hash = 0,
    i,
    chr
  if (data.length === 0) return hash.toString()
  for (i = 0; i < data.length; i++) {
    chr = data.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash.toString(16)
}

function blockChain(data, prev = { index: 0, hash: '0' }) {
  const block = {
    index: prev.index + 1,
    hash: '',
    data: data,
    prev: prev,
    chain: function (newData) {
      return blockChain(newData, block)
    },
  }

  block.hash = hashCode(block.index + prev.hash + JSON.stringify(data))
  return block
}
