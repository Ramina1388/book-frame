import React from 'react'
import BookRecommendationFrame from '../components/BookRecommendationFrame'

export default function Page() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E8EAF6] via-[#F4F4F4] to-[#FCE4EC] p-6">
      <div className="absolute top-10 left-10 opacity-10 text-9xl font-bold rotate-12 text-[#9E2A2B] select-none pointer-events-none">
        📚
      </div>

      <BookRecommendationFrame />
    </main>
  )
}
