import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { submitToIndexNow } from '../utils/indexNow'

export async function middleware(request: NextRequest) {
  // Проверяем, что это не API роут и не статический файл
  if (!request.nextUrl.pathname.startsWith('/api') && 
      !request.nextUrl.pathname.match(/\.(jpg|png|gif|css|js|ico)$/)) {
    
    // Отправляем URL в IndexNow
    try {
      await submitToIndexNow([request.nextUrl.href])
    } catch (error) {
      // Логируем ошибку, но не блокируем запрос
      console.error('IndexNow submission error:', error)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Укажите пути, которые нужно отслеживать
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 