// First Version, Time Complexity: O(n)

// function isPrime(givenNumber: number): boolean {
//   let primeCount = 0

//   for (let i = 1; i <= givenNumber; i += 1) {
//     if (givenNumber % i === 0) {
//       primeCount += 1
//     }
//   }

//   return primeCount === 2
// }

// Improved Version, Time Complexity: O(sqrt(n))
const isPrime = (givenNumber: number): boolean => {
  if (givenNumber <= 1) return false
  if (givenNumber === 2) return true
  if (givenNumber % 2 === 0) return false

  const sqrtNumber = Math.sqrt(givenNumber)

  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (givenNumber % i === 0) return false
  }

  return true
}

export default isPrime