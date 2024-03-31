import Canvas from "./canvas"
import Home from "./pages/Home"
import Customizer from "./pages/Customizer"

export default function App() {
  return (
    <main className='transition-all ease-in app'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}
