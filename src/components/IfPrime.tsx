'use client'

import React, { FormEvent, useState } from 'react'

export default function IfPrime() {
  const [inputNumber, setInputNumber] = useState('')
  const [isPrimeResult, setIsPrimeResult] = useState('')
  const [factorialResult, setFactorialResult] = useState(0)
  const [errorCheck, setErrorCheck] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const givenNumber = Number(inputNumber)

    if (givenNumber < 0) setErrorCheck(true)

    setIsPrimeResult(betterIsPrime(givenNumber) ? 'Is Prime' : 'Not Prime')
    setFactorialResult(factorialOf(givenNumber))
  }

  // First Version, Time Complexity: O(n)
  function isPrime(givenNumber: number): boolean {
    let primeCount = 0

    for (let i = 1; i <= givenNumber; i += 1) {
      if (givenNumber % i === 0) {
        primeCount += 1
      }
    }

    // console.log(primeCount <= 2)

    return primeCount <= 2
  }

  // Improved Version, Time Complexity: O(sqrt(n))
  function betterIsPrime(givenNumber: number) {
    if (givenNumber <= 1) return false
    if (givenNumber === 2) return true
    if (givenNumber % 2 === 0) return false

    const sqrtNumber = Math.sqrt(givenNumber)

    for (let i = 3; i <= sqrtNumber; i += 1) {
      if (givenNumber % i === 0) return false
    }

    return true
  }

  function factorialOf(givenNumber: number): number {
    if (givenNumber < 0) return -1

    let total = 1

    for (let i = 1; i <= givenNumber; i += 1) {
      total *= i
    }

    // console.log(total)

    return total
  }

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-black border border-gray-50"
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
      />
      {errorCheck ? <p className="">HEY</p> : <p></p>}
      <button className="text-white" type="submit">
        Submit
      </button>
      <p>{isPrimeResult}</p>
      <p>{factorialResult}</p>
    </form>
  )
}
