export async function submitToIndexNow(urls: string[]) {
  const key = process.env.INDEXNOW_KEY
  const host = 'neurogenlab.de'

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host,
        key,
        urlList: urls,
        keyLocation: `https://${host}/${key}.txt`
      }),
    })

    if (!response.ok) {
      throw new Error(`IndexNow submission failed: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting to IndexNow:', error)
    throw error
  }
} 