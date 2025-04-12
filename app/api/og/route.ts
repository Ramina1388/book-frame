// app/api/og/route.ts

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import React from 'react'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
        },
      },
      React.createElement(
        'h1',
        {
          style: {
            fontSize: 60,
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 20,
          },
        },
        'Book Recommendations'
      ),
      React.createElement(
        'p',
        {
          style: {
            fontSize: 30,
            color: '#666666',
          },
        },
        'Find your next great read 📚'
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
