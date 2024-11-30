import express from "express"
import http from "http"
import { Server as SocketServer } from "socket.io"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import Sockets from "./sockets.js"
import cors from "cors"

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 8080

    this.server = http.createServer(this.app)
    this.io = new SocketServer(this.server)
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(express.urlencoded({ extended: true }))

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    this.app.use(express.static(path.resolve(__dirname, "../public")))
  }

  socketsConfig() {
    new Sockets(this.io)
  }

  execute() {
    // Init middlewares
    this.middlewares()
    // Init sockets
    this.socketsConfig()
    // Start server
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}

export default Server
