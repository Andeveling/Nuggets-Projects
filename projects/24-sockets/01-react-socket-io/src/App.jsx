import "./App.css"
import { useSocketContext } from "./hooks/useSocketContext"
import BandAdd from "./components/BandAdd"
import BandList from "./components/BandList"

export default function App() {
  const { online: status } = useSocketContext()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center mb-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Bands</h1>
        <p>
          Services Status:{" "}
          <span className={`badge ${status ? "badge-success" : "badge-error"}`}>{status ? "online" : "offline"}</span>
        </p>
      </div>

      <BandAdd />
      <BandList />
    </main>
  )
}
