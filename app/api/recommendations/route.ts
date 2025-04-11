import { NextRequest, NextResponse } from 'next/server'
import { type BookRecommendation } from '../../../types/books'

const bookDatabase: Record<string, BookRecommendation[]> = {
  creativity: [
    {
      title: 'Big Magic',
      author: 'Elizabeth Gilbert',
      description: 'A guide to living creatively beyond fear and embracing curiosity.',
    },
    {
      title: 'The Artist\'s Way',
      author: 'Julia Cameron',
      description: 'A spiritual path to higher creativity through morning pages and artist dates.',
    },
  ],
  healing: [
    {
      title: 'The Body Keeps the Score',
      author: 'Bessel van der Kolk',
      description: 'Understanding trauma and discovering paths to recovery and healing.',
    },
    {
      title: 'When Things Fall Apart',
      author: 'Pema Chödrön',
      description: 'Heart advice for difficult times and embracing life\'s challenges.',
    },
  ],
  burnout: [
    {
      title: 'Burnout',
      author: 'Emily Nagoski and Amelia Nagoski',
      description: 'Understanding and addressing burnout through science-based solutions.',
    },
    {
      title: 'Set Boundaries, Find Peace',
      author: 'Nedra Glover Tawwab',
      description: 'A guide to setting healthy boundaries in work and life.',
    },
  ],
}

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json()
    const normalizedTopic = topic.toLowerCase().trim()
    let recommendations = bookDatabase[normalizedTopic] || [
      {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        description: 'A guide to spiritual enlightenment and living in the present moment.',
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        description: 'Small changes that lead to remarkable results in personal growth.',
      },
    ]

    if (recommendations.length > 2) {
      recommendations = recommendations.sort(() => Math.random() - 0.5).slice(0, 2)
    }

    return NextResponse.json({ recommendations })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
