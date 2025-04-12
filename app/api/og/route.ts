// app/api/og/route.ts

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: '40px',
        }}
      >
        <h1 style={{ fontSize: 60, fontWeight: 'bold', color: '#000' }}>
          Book Recommendations
        </h1>
        <p style={{ fontSize: 30, color: '#666' }}>
          Find your next great read 📚
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
