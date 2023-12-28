import http from 'http'
import { promises as fs } from 'fs'
import path from 'path'

const port = 5000
const authorizedUsers = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
}

function isAuthorized(authHeader) {
  const encodedCredentials = authHeader.split(' ')[1]
  const [username, password] = Buffer.from(encodedCredentials, 'base64')
    .toString()
    .split(':')
  return authorizedUsers[username] === password
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

          let requestBody
          try {
            requestBody = JSON.parse(body)
          } catch (jsonError) {
            res.writeHead(400)
            res.end(JSON.stringify({ error: 'Invalid JSON in request' }))
            return
          }

          await fs.writeFile(filePath, JSON.stringify(requestBody), 'utf8')
          res.writeHead(200)
          res.end(JSON.stringify(requestBody))
        } catch (error) {
          res.writeHead(500)
          res.end(JSON.stringify({ error: 'Internal Server Error' }))
        }
      })
    } else {
      res.writeHead(405)
      res.end(JSON.stringify({ error: 'Method Not Allowed' }))
    }
  } catch (error) {
    res.writeHead(500)
    res.end(JSON.stringify({ error: 'Internal Server Error' }))
  }
})

server.listen(port, () => console.log(`Server running on port ${port}`))
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is busy`)
  } else {
    console.error(error)
  }
})
