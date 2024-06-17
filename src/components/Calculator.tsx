'use client'

import React, { FormEvent, useState } from 'react'
import isPrime from '@/utils/isPrime'
import factorialOf from '@/utils/factorialOf'

export default function Calculator() {
  // useStates for rendering
  const [inputNumber, setInputNumber] = useState<string>('')
  const [isPrimeResult, setIsPrimeResult] = useState<string>('')
  const [factorialResult, setFactorialResult] = useState<number | undefined>()
  const [errorCheck, setErrorCheck] = useState<boolean>(false)

  // Function that triggers calculation
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const givenNumber = Number(inputNumber)

    if (!inputNumber || givenNumber < 0) {
      setErrorCheck(true)
      setFactorialResult(undefined)
      setIsPrimeResult('')
      return
    }

    setIsPrimeResult(isPrime(givenNumber) ? 'Is Prime' : 'Not Prime')
    setFactorialResult(factorialOf(givenNumber))
    setErrorCheck(false)
  }

  // Function that clears input, reset values, and reset error prompt
  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
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
      {isPrimeResult && (
        <div
          className={`flex justify-center items-center mt-8 rounded-lg ${
            isPrimeResult === 'Is Prime'
              ? 'bg-green-600 h-1/3'
              : 'bg-red-600 h-1/3'
          }`}
        >
          {isPrimeResult}
        </div>
      )}
      {/* <div
        className={`flex justify-center items-center mt-8 rounded-lg ${
          isPrimeResult.includes('Is') ? 'bg-green-600 h-1/3' : null
        } ${isPrimeResult.includes('Not') ? 'bg-red-600 h-1/3' : null}`}
      >
        {isPrimeResult}
      </div> */}
      {factorialResult !== undefined && (
        <div className="flex flex-col justify-center items-center mt-8 rounded-lg bg-gray-200 text-black h-1/3">
          {`Factorial of ${inputNumber}: `}
          <p className="font-bold">{factorialResult.toString()}</p>
        </div>
      )}
    </main>
  )
}
