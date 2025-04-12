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
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          backgroundColor: '#FCE4EC',
          color: '#333',
        }}
      >
        📚 Book Recommendations
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
