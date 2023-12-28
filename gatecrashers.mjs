import http from 'http'
import { promises as fs } from 'fs'
import path from 'path'

const port = 5000
const authorizedUsers = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
}

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    if (req.method === 'POST') {
      const authHeader = req.headers['authorization']
      if (!authHeader || !isAuthorized(authHeader)) {
        res.writeHead(401)
        res.end(JSON.stringify({ error: 'Unauthorized' }))
        return
      }

      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', async () => {
        try {
          const guestName = req.url.slice(1)
          const filePath = path.join('./guests', `${guestName}.json`)
          await fs.writeFile(filePath, body, 'utf8')

          let responseBody
          try {
            responseBody = JSON.parse(body)
          } catch (jsonError) {
            res.writeHead(500)
            res.end(JSON.stringify({ error: 'Invalid JSON in request' }))
            return
          }

          res.writeHead(200)
          res.end(JSON.stringify(responseBody))
        } catch (err) {
          res.writeHead(500)
          res.end(JSON.stringify({ error: 'server failed' }))
        }
      })
    } else {
      res.writeHead(500)
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  } catch (err) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: 'server failed' }))
  }
})

function isAuthorized(authHeader) {
  const token = authHeader.split(' ')[1]
  const [username, password] = Buffer.from(token, 'base64')
    .toString('utf8')
    .split(':')
  return authorizedUsers[username] === password
}

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
