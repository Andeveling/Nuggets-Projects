import express from "express"
import { Server } from "socket.io"
import morgan from "morgan"
import { createServer } from "node:http"

const port = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const serverIo = new Server(server, {
  cors: {
    origin: "*",
  },
  connectionStateRecovery: { maxDisconnectionDuration: 10000 },
})

serverIo.on("connection", (socket) => {
  console.log("a user connected")
  socket.on("disconnect", () => {
    console.log("a user disconnected")
  })

  socket.on("chat message", (msg) => {
    serverIo.emit("chat message", msg)
  })
})

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html")
})

app.use(morgan("dev"))

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} `)
})
