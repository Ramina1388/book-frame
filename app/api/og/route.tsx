/** @jsxImportSource react */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          backgroundColor: '#ffffff',
          color: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Book Frame 📚
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
