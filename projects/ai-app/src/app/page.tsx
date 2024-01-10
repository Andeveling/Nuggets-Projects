"use client"

import { useCompletion } from "ai/react"

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit,isLoading,error } = useCompletion()

  return (
    <div className='mx-auto w-full max-w-md py-24 flex flex-col stretch'>
      <h1 className='text-3xl font-bold mb-4'>Slogan Generator</h1>
      <p className='mb-4'>Loading: {isLoading.toString()}</p>
      <p className='mb-4'>Error: {error?.message}</p>
      <form onSubmit={handleSubmit}>
        <input
          className='fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 dark:text-black'
          value={input}
          placeholder='Describe your business...'
          onChange={handleInputChange}
        />
      </form>
      {completion ? (
        <div className='whitespace-pre-wrap my-4'>{completion}</div>
      ) : (
        <div>Enter a business description and click enter to generate slogans.</div>
      )}
    </div>
  )
}
