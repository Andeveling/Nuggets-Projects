import { useFilters } from "../hooks/useFilters"
import { useAppDispatch } from "../hooks/useStoreHooks"
import { ProductT } from "../models/Product.model"
import { addToCart } from "../store/feature/cartSlice"

export const Products = ({ products }: { products: ProductT[] }) => {
  const { isLoading } = useFilters()
  const dispatch = useAppDispatch()

  return (
    <main className='container min-h-screen mx-auto'>
      <ul className='flex flex-wrap justify-center w-full gap-4'>
        {isLoading ? (
          <>Loading..</>
        ) : (
          products.map((product) => (
            <li key={product.id} className='border shadow-xl card w-80 bg-base-200'>
              <div className='card-body'>
                <h2 className='card-title'>{product.title.slice(0, 20)}</h2>
                <p>{product.description.slice(0, 100)}...</p>
                <div className='divider' />
                <div className='justify-between card-actions'>
                  <strong className='text-2xl'>${product.price}</strong>
                  <button className='btn btn-primary' onClick={() => dispatch(addToCart(product))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  )
}
