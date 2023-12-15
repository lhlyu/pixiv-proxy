const PIXIV_BASE_URL = "https://i.pximg.net"

const headers = new Headers()
headers.append('Referer', 'https://www.pixiv.net/');

// 定义请求参数
const option = {
  method: 'GET',
  headers: headers,
}

Deno.serve(async (req) => {
  const url = new URL(req.url)
  if (url.pathname === '/favicon.ico') {
    return new Response()
  }
  const pUrl = PIXIV_BASE_URL + url.pathname
  const response = await fetch(pUrl, option);
  return response
})