import isPrime from "@/utils/isPrime"
import * as mathjs from "mathjs"

const mathjsIsPrime = mathjs.isPrime

describe('isPrime Function', () => {

  describe('-1, 0 and 1 are not prime numbers', () => {
    test('-1 is not a prime number', () => {
      expect(isPrime(-1)).toEqual(mathjsIsPrime(-1))
    });
    test('0 is not a prime number', () => {
      expect(isPrime(0)).toEqual(mathjsIsPrime(0))
    });

    test('1 is not a prime number', () => {
      expect(isPrime(1)).toEqual(mathjsIsPrime(1))
    })
  })

  describe('Basic numbers to check for prime', () => {
    test('2 is a prime number', () => { expect(isPrime(2)).toEqual(mathjsIsPrime(2)) })
    test('3 is a prime number', () => { expect(isPrime(3)).toEqual(mathjsIsPrime(3)) })
    test('4 is NOT a prime number', () => { expect(isPrime(4)).toEqual(mathjsIsPrime(4)) })
  })

  describe('Random numbers to check for prime', () => {
    test('random case 1; not float', () => {
      const mathjsRandom = Number(mathjs.random(1000).toFixed(0))
      console.log(mathjsRandom)
      expect(isPrime(mathjsRandom)).toEqual(mathjsIsPrime(mathjsRandom))
    })
    test('random case 2, float', () => {
      const mathjsRandom = Number(mathjs.random(1000).toFixed(0))
      console.log(mathjsRandom)
      expect(isPrime(mathjsRandom)).toEqual(mathjsIsPrime(mathjsRandom))
    })
    test('random case 3, negative float', () => {
      const mathjsRandom = -Number(mathjs.random(1000).toFixed(0))
      console.log(mathjsRandom)
      expect(isPrime(mathjsRandom)).toEqual(mathjsIsPrime(mathjsRandom))
    })
  })
})
