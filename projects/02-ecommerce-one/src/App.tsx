import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { useFilters } from "./hooks/useFilters"

function App() {
  const { filterProducts, error, isLoading } = useFilters()
  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los productos</div>
  const filteredProducts = filterProducts()
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
