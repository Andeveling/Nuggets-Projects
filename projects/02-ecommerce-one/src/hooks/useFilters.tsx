import { useContext } from "react"
import { FilterContext } from "../context/FiltersContext"
import { useGetAllProductsQuery } from "../store/services/productsApiSlice"

export const useFilters = () => {
  const { filters, setFilters } = useContext(FilterContext)
    const { data: products = [], error, isLoading } = useGetAllProductsQuery()
    
  const filterProducts = () => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (filters.category === "all" || product.category === filters.category)
    })
    }
    

  return { filters, filterProducts, setFilters, error, isLoading }
}
