import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '40px',
        }}>
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', color: 'black' }}>
            Book Recommendations
          </h1>
          <p style={{ fontSize: '30px', color: '#666' }}>
            Find your next great read
          </p>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 })
  }
}
