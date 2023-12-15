const PIXIV_BASE_URL = "https://i.pximg.net"

const headers = new Headers()
headers.append('Referer', 'https://www.pixiv.net/');

// 定义请求参数
const option = {
  method: 'GET',
  headers: headers,
}

const tip = `关于如何使用本代理，我只能说懂的都懂，不懂的我也不多解释，
懂的人已经在使用了，不懂的人永远不懂，
关键懂的人都是自己悟的，你也不知道谁是懂的人也没法请教，
大家都藏着掖着生怕别人知道自己懂事，懂了就能收割不懂的，你甚至都不知道自己不懂。
只是在有些时候，某些人对某些事情不懂装懂，还以为别人不懂。
其实自己才是不懂的，别人懂的够多了，不仅懂，还懂的超越了这个范围，
但是某些不懂的人让这个懂的人完全教不懂，所以不懂的人永远不懂，只能不懂装懂，
别人说懂的都懂，只要点点头就行了，其实你懂的我也懂,谁让我们都懂呢，
不懂的话也没必要装懂，毕竟里面牵扣扯到很多懂不了的事。
这种事懂的人也没必要访出来，不懂的人看见又来问七问八，
最后跟他说了他也不一定能懂，就算懂了以后也对他不好，
毕竟懂的太多了不是好事。
所以大家最好是不懂就不要去了解，懂太多不好。`

Deno.serve(async (req) => {
  const url = new URL(req.url)
  if (url.pathname === '/') {
    return new Response(tip)
  }
  if (url.pathname === '/favicon.ico') {
    return new Response()
  }
  const pUrl = PIXIV_BASE_URL + url.pathname
  const response = await fetch(pUrl, option);
  return response
})