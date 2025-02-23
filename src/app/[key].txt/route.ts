import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const key = '836c09d302134195bba40a03154d6606'
  const path = request.nextUrl.pathname
  const requestedKey = path.split('/').pop()?.replace('.txt', '')
  
  if (requestedKey === key) {
    return new Response(key, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store',
      },
    })
  }

  return new Response('Not Found', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 