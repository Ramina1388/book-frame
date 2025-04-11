'use client'

import { Typography } from '@worldcoin/mini-apps-ui-kit-react'
import { type BookRecommendation } from '../types/books'

interface BookDisplayProps {
  recommendations: BookRecommendation[]
}

const BookDisplay = ({ recommendations }: BookDisplayProps) => {
  const handleSave = (book: BookRecommendation) => {
    console.log('Saved book:', book)
    // Future: Save to localStorage or database
  }

  return (
    <div className="space-y-4">
      {recommendations.map((book, index) => (
        <div
          key={`${book.title}-${index}`}
          className="p-4 rounded-xl border border-[#5A5C88] bg-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Typography
            component="h3"
            variant="subtitle"
            className="font-bold text-[#000000] text-lg"
          >
            {book.title}
          </Typography>
          <Typography
            component="p"
            variant="body"
            className="text-[#5A5C88] mt-1 text-base"
          >
            by {book.author}
          </Typography>
          <Typography
            component="p"
            variant="body"
            className="mt-2 text-[#A6A6A6] text-sm leading-relaxed"
          >
            {book.description}
          </Typography>

          <button
            onClick={() => handleSave(book)}
            className="mt-4 text-sm font-semibold text-white bg-[#9E2A2B] hover:bg-[#7C1D1E] px-4 py-2 rounded-md transition-all duration-200"
          >
            💾 Save to list
          </button>
        </div>
      ))}
    </div>
  )
}

export default BookDisplay
