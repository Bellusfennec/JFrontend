const getSumOfSequence = (number) => {
  const array = []

  for (let i = 1; i <= number; i++) {
        array.push(i)
  }

  return array.at(0) + array.at(-1)
}

getSumOfSequence(5) // 6 ([1, 2, 3, 4, 5], 1+5=6)
console.log(getSumOfSequence(5));