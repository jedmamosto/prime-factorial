
// First Version, no recursion

// const factorialOf = (givenNumber?: number): number => {
//   if (typeof givenNumber === 'undefined' || typeof givenNumber !== 'number') {
//     throw new Error('Input must be a number')
//   }

//   if (givenNumber < 0) return -1

//   let total = 1

//   for (let i = 1; i <= givenNumber; i += 1) {
//     total *= i
//   }

//   return total
// }

// Second Version, recursive approach
const factorialOf = (givenNumber: number): number => {
  if (givenNumber < 0) throw new Error('Value must be non-negative')

  return givenNumber === 0 ? 1 : givenNumber * factorialOf(givenNumber - 1) // Use recursion for factorial calculation
}

export default factorialOf