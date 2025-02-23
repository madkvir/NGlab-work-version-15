import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const filename = request.nextUrl.pathname.split('/').pop();
    
    if (filename === '836c09d302134195bba40a03154d6606.txt') {
      return new Response(process.env.INDEXNOW_KEY, {
        status: 200,
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
  } catch (error) {
    console.error('Error in IndexNow route:', error)
    return new Response('Internal Server Error', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
} 