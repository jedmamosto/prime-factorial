'use client'

import React, { ButtonHTMLAttributes, FormEvent, useState } from 'react'

export default function IfPrime() {
  const [inputNumber, setInputNumber] = useState('')
  const [isPrimeResult, setIsPrimeResult] = useState('')
  const [factorialResult, setFactorialResult] = useState<Number>()
  const [errorCheck, setErrorCheck] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (inputNumber === '') {
      setErrorCheck(true)
      return
    }

    const givenNumber = Number(inputNumber)

    if (givenNumber < 0) {
      setErrorCheck(true)
      return
    }

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

    return primeCount === 2
  }

  // Improved Version, Time Complexity: O(sqrt(n))
  function betterIsPrime(givenNumber: number): boolean {
    if (givenNumber <= 1) return false
    if (givenNumber === 2) return true
    if (givenNumber % 2 === 0) return false

    const sqrtNumber = Math.sqrt(givenNumber)

    for (let i = 3; i <= sqrtNumber; i += 1) {
      if (givenNumber % i === 0) return false
    }

    return true
  }

  function factorialOf(givenNumber?: number): number {
    if (typeof givenNumber === 'undefined' || typeof givenNumber !== 'number') {
      throw new Error('Input must be a number')
    }

    if (givenNumber < 0) return -1

    let total = 1

    for (let i = 1; i <= givenNumber; i += 1) {
      total *= i
    }

    return total
  }

  function handleClear(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault()

    setInputNumber('')
    setFactorialResult(undefined)
    setIsPrimeResult('')
    setErrorCheck(false)
  }

  return (
    <main className="self-center w-full">
      <form
        className="flex flex-col items-center gap-2 h-auto bg-white rounded-xl text-black p-4"
        onSubmit={handleSubmit}
      >
        <h1>Check prime, get factorial</h1>
        <input
          className="bg-black border border-gray-50 rounded-md outline-none p-2 text-white"
          type="number"
          value={inputNumber}
          placeholder="Give a number"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        {errorCheck && (
          <p className="text-red-600">Please input positive integers</p>
        )}
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-black active:bg-slate-950 hover:bg-gray-600 rounded-md text-white"
            type="submit"
          >
            Calculate
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-600 rounded-md text-white hover:bg-slate-950"
          >
            Clear
          </button>
        </div>
      </form>
      {/* Should only trigger if "Calculate" is clicked */}
      <div
        className={`flex justify-center items-center mt-8 rounded-lg ${
          isPrimeResult.includes('Is') ? 'bg-green-600 h-1/3' : null
        } ${isPrimeResult.includes('Not') ? 'bg-red-600 h-1/3' : null}`}
      >
        {isPrimeResult}
      </div>
      {factorialResult && (
        <div className="flex justify-center items-center mt-8 rounded-lg bg-gray-200 text-black h-1/3">
          {factorialResult.toString()}
        </div>
      )}
    </main>
  )
}
