'use client'

import { useState } from 'react'
import { Button, Typography } from '@worldcoin/mini-apps-ui-kit-react'
import BookDisplay from './BookDisplay'
import { type BookRecommendation } from '../types/books'

const bookOfTheDay: BookRecommendation = {
  title: 'The Daily Stoic',
  author: 'Ryan Holiday',
  description: '366 meditations on wisdom, perseverance, and the art of living.',
}

const BookRecommendationFrame = () => {
  const [topic, setTopic] = useState('')
  const [recommendations, setRecommendations] = useState<BookRecommendation[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!topic.trim()) return
    setLoading(true)
    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      })

      const data = await response.json()
      const shuffled = data.recommendations.sort(() => 0.5 - Math.random())
      setRecommendations(shuffled)
    } catch (error) {
      console.error('Error fetching recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleMoreBooks = () => handleSearch()
  const handleNewTopic = () => {
    setTopic('')
    setRecommendations([])
  }

  return (
    <div className="w-full max-w-xl p-8 rounded-2xl shadow-lg bg-gradient-to-br from-white via-[#f7f7f7] to-[#f0f0f0] border border-gray-200">
      <Typography
        variant="heading"
        level={2}
        className="mb-6 text-center text-3xl font-bold text-[#000000]"
      >
        Book Recommendations
      </Typography>

      {/* Book of the Day in separate framed block */}
      <div className="mb-8 border border-[#9E2A2B] bg-[#FFF7F8] rounded-xl p-4 shadow-sm">
        <Typography className="text-lg font-semibold text-[#9E2A2B] mb-4 text-center">
          📘 Book of the Day
        </Typography>
        <BookDisplay recommendations={[bookOfTheDay]} />
      </div>

      {!recommendations.length ? (
        <div className="space-y-4">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded-md text-[#1a1a1a] bg-[#F4F4F4]"
          >
            <option value="">Select a topic...</option>
            <option value="creativity">Creativity</option>
            <option value="healing">Healing</option>
            <option value="burnout">Burnout</option>
            <option value="growth">Growth</option>
          </select>

          <Button
            onClick={handleSearch}
            disabled={loading || !topic.trim()}
            className={`w-full text-lg font-semibold py-2 rounded-md transition-all duration-200 ${
              loading || !topic.trim()
                ? 'bg-[#9E2A2B] text-white opacity-40 cursor-not-allowed'
                : 'bg-[#9E2A2B] text-white hover:bg-[#7C1D1E]'
            }`}
          >
            {loading ? 'Finding books...' : 'Get Recommendations'}
          </Button>
        </div>
      ) : (
        <>
          <BookDisplay recommendations={recommendations} />
          <div className="flex gap-2 mt-6">
            <Button
              onClick={handleMoreBooks}
              className="flex-1 bg-[#9E2A2B] text-white text-lg font-semibold py-2 rounded-md hover:bg-[#7C1D1E] transition-all duration-200"
            >
              More Books
            </Button>
            <Button
              onClick={handleNewTopic}
              className="flex-1 bg-[#9E2A2B] text-white text-lg font-semibold py-2 rounded-md hover:bg-[#7C1D1E] transition-all duration-200"
            >
              New Topic
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default BookRecommendationFrame
