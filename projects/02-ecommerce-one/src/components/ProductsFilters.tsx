import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export const ProductsFilters = () => {
  const minPriceId = useId()
  const productCategoryId = useId()
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({ ...prevState, minPrice: parseInt(event.target.value) }))
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <section className='container flex items-center justify-between mx-auto my-4'>
      <div className='flex space-x-2'>
        <label htmlFor={minPriceId}>Price</label>
        <input
          id={minPriceId}
          type='range'
          min='0'
          max='500'
          className='range range-primary w-72'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span className='font-bold'>${filters.minPrice}</span>
      </div>

      <div className='flex items-center space-x-2'>
        <label htmlFor={productCategoryId}>Category</label>
        <select
          id={productCategoryId}
          className='w-full max-w-xs select select-bordered'
          onChange={handleChangeCategory}>
          <option value={"all"}>All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value='jewelery'>Jewelry</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
    </section>
  )
}
