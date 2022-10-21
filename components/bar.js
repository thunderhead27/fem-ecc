import React from 'react'
import tw from 'twin.macro'
import { Data } from '../data'

export default function Bar() {
  return (
    <div tw="flex flex-row items-center justify-center justify-between h-24 sm:h-32 bg-sRed rounded-lg mb-4 sm:mb-6 pl-5 pr-6">
      {/* Balance */}
      <div tw="flex flex-col justify-center">
        <p tw="text-white">My balance</p>
        <p tw="text-white font-bold text-2xl sm:text-3xl">$921.48</p>
      </div>
      {/* Circles */}
      <div tw="flex flex-row">
        <div tw="border-2 rounded-full bg-white w-10 h-10 sm:w-12 sm:h-12 bg-transparent translate-x-5"></div>
        <div tw="bg-dBrown w-10 h-10 sm:w-12 sm:h-12 rounded-full"></div>
      </div>
    </div>
  )
}
