import PropTypes from "prop-types"
import SocketContext from "./SocketContext"
import { useSocket } from "../hooks/useSocket"

const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080")

  const value = {
    socket,
    online,
  }
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
}

SocketProvider.propTypes = {
  children: PropTypes.node,
}

export default SocketProvider
