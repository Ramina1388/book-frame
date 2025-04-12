'use client'

import React from 'react'
import { Typography } from '@worldcoin/mini-apps-ui-kit-react'
import { type BookRecommendation } from '../types/books'

interface BookDisplayProps {
  recommendations: BookRecommendation[]
}

const BookDisplay = ({ recommendations }: BookDisplayProps) => {
  return (
    <div className="space-y-4">
      {recommendations.map((book, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <Typography
            variant="subtitle"
            className="font-bold text-[#000000] text-lg"
          >
            {book.title}
          </Typography>

          <Typography
            variant="body"
            className="text-[#4B4B4B] mt-1"
          >
            {`by ${book.author}`}
          </Typography>

          <Typography
            variant="body"
            className="text-[#333333] mt-2"
          >
            {book.description}
          </Typography>
        </div>
      ))}
    </div>
  )
}

export default BookDisplay
