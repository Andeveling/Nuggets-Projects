import express from "express"
import { Server } from "socket.io"
import morgan from "morgan"
import { createServer } from "node:http"

const port = process.env.PORT ?? 3000
const app = express()
const server = createServer(app)
const serverIo = new Server(server)

serverIo.on("connection", (socket) => {
  console.log("a user connected")
  socket.on("disconnect", () => {
    console.log("a user disconnected")
  })
})

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html")
})

app.use(morgan("dev"))

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} `)
})
