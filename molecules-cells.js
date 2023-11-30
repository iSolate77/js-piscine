function RNA(dna) {
  return dna
    .replace(/G/g, 'c')
    .replace(/C/g, 'g')
    .replace(/T/g, 'a')
    .replace(/A/g, 'u')
    .toUpperCase()
}

function DNA(rna) {
  return rna
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .replace(/A/g, 't')
    .replace(/U/g, 'a')
    .toUpperCase()
}
