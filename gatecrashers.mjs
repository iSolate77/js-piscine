// import http from 'http'
// import { promises as fs } from 'fs'
// import path from 'path'
//
// const port = 5000
// const authorizedUsers = {
//   Caleb_Squires: 'abracadabra',
//   Tyrique_Dalton: 'abracadabra',
//   Rahima_Young: 'abracadabra',
// }
//
// function isAuthorized(authHeader) {
//   const encodedCredentials = authHeader.split(' ')[1]
//   const [username, password] = Buffer.from(encodedCredentials, 'base64')
//     .toString()
//     .split(':')
//   return authorizedUsers[username] === password
// }
//
// const server = http.createServer(async (req, res) => {
//   try {
//     res.setHeader('Content-Type', 'application/json')
//
//     if (req.method === 'POST') {
//       const authHeader = req.headers['authorization']
//       if (!authHeader || !isAuthorized(authHeader)) {
//         res.writeHead(401)
//         res.end(JSON.stringify({ error: 'Unauthorized' }))
//         return
//       }
//
//       let body = ''
//       req.on('data', (chunk) => {
//         body += chunk.toString()
//       })
//
//       req.on('end', async () => {
//         try {
//           const guestName = req.url.slice(1)
//           const filePath = path.join('./guests', `${guestName}.json`)
//
//           let requestBody
//           try {
//             requestBody = JSON.parse(body)
//           } catch (jsonError) {
//             res.writeHead(400)
//             res.end(JSON.stringify({ error: 'Invalid JSON in request' }))
//             return
//           }
//
//           await fs.writeFile(filePath, JSON.stringify(requestBody), 'utf8')
//           res.writeHead(200)
//           res.end(JSON.stringify(requestBody))
//         } catch (error) {
//           res.writeHead(500)
//           res.end(JSON.stringify({ error: 'Internal Server Error' }))
//         }
//       })
//     } else {
//       res.writeHead(405)
//       res.end(JSON.stringify({ error: 'Method Not Allowed' }))
//     }
//   } catch (error) {
//     res.writeHead(500)
//     res.end(JSON.stringify({ error: 'Internal Server Error' }))
//   }
// })
//
// server.listen(port, () => console.log(`Server running on port ${port}`))
// server.on('error', (error) => {
//   if (error.code === 'EADDRINUSE') {
//     console.log(`Port ${port} is busy`)
//   } else {
//     console.error(error)
//   }
// })
import { spawn } from 'node:child_process'
import { mkdir } from 'fs/promises'
import http from 'http'

const port = 5000

const fetch = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: JSON.parse(data),
          })
        } catch (e) {
          resolve({ status: res.statusCode, headers: res.headers, body: data })
        }
      })
    })
    req.on('error', reject)
    if (options.body) {
      req.write(options.body)
    }
    req.end()
  })
}

export const setup = async () => {
  const dir = '.'

  await mkdir(`${dir}/guests`, { recursive: true })

  const sendRequestWithAuth = async (guestName, auth, body) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    if (auth.length !== 0) {
      options.headers.Authorization =
        'Basic ' + Buffer.from(auth).toString('base64')
    }
    if (body) {
      options.body = JSON.stringify(body)
    }
    return fetch(`http://localhost:${port}${guestName}`, options)
  }

  const startServer = async (path) => {
    const server = spawn('node', [path])
    await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for server to start
    return { server }
  }

  return {
    tmpPath: dir,
    sendRequestWithAuth,
    startServer,
  }
}
