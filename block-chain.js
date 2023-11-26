function blockChain(data, prev = { index: 0, hash: '0' }) {
  const block = {
    index: prev.index + 1,
    hash: '',
    data: data,
    prev: prev,
    chain: function(newData) {
      return blockChain(newData, block)
    },
  }

  block.hash = hashCode(block.index + prev.hash + JSON.stringify(data))
  return block
}
