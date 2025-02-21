import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST() {
  try {
    // Очищаем кэш для sitemap
    revalidatePath('/sitemap.xml')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Sitemap revalidated' 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to revalidate sitemap' 
    }, { status: 500 })
  }
} 