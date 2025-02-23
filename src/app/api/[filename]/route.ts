import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { filename: string } }) {
  const filename = params.filename;
  
  // Используем ваш ключ для имени файла
  if (filename === '836c09d302134195bba40a03154d6606.txt') {
    return new Response(process.env.INDEXNOW_KEY, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  return new Response('Not Found', { status: 404 })
} 