import factorialOf from "@/utils/factorialOf";
import * as mathjs from "mathjs"

const mathjsFactorial = mathjs.factorial

describe('Testing factorialOf function', () => {

  describe('Edge cases', () => {
    test('0! equals 1', () => {
      expect(factorialOf(0)).toEqual(mathjsFactorial(0))
      console.log(factorialOf(0), mathjsFactorial(0))
    })
    test('1! equals 1', () => {
      expect(factorialOf(1)).toEqual(mathjsFactorial(1))
      console.log(factorialOf(1), mathjsFactorial(1))
    })
  })

  describe('Basic cases', () => {
    test('2! equals 2', () => {
      expect(factorialOf(2)).toEqual(2)
    })
    test('3! equals 6', () => {
      expect(factorialOf(3)).toEqual(6)
    })
    test('4! equals 24', () => {
      expect(factorialOf(4)).toEqual(24)
    })
  })

  describe('Random cases', () => {
    test('random case 1', () => {
      const mathjsRandom = Number(mathjs.random(10).toFixed(0))
      expect(factorialOf(mathjsRandom)).toEqual(mathjsFactorial(mathjsRandom))
      console.log(mathjsRandom, factorialOf(mathjsRandom), mathjsFactorial(mathjsRandom))
    })

    test('random case 2', () => {
      const mathjsRandom = Number(mathjs.random(100).toFixed(0))
      expect(factorialOf(mathjsRandom)).toEqual(mathjsFactorial(mathjsRandom))
      console.log(mathjsRandom, factorialOf(mathjsRandom), mathjsFactorial(mathjsRandom))
    })

    test('random case 3', () => {
      const mathjsRandom = Number(mathjs.random(1000).toFixed(0))
      expect(factorialOf(mathjsRandom)).toEqual(mathjsFactorial(mathjsRandom))
      console.log(mathjsRandom, factorialOf(mathjsRandom), mathjsFactorial(mathjsRandom))
    })
  })
})