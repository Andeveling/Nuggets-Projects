import { useId } from "react"
import { useAppSelector } from "../hooks/useStoreHooks"
import { selectCartItems } from "../store/feature/cartSlice"
import { ProductsFilters } from "./ProductsFilters"
import { ShoppingCart } from "lucide-react"

export const Header = () => {
  const items = useAppSelector(selectCartItems)
  const modalId = useId()
  return (
    <>
      <header className='flex justify-between px-10 navbar bg-base-300'>
        <div>
          <a className='text-xl normal-case btn btn-ghost '>E | commerce</a>
        </div>
        <div>
          <label htmlFor={modalId} className='btn'>
            <div className='indicator'>
              <span className='indicator-item badge badge-secondary'>{items.length}</span>
              <ShoppingCart size={30} className='grid place-items-center' />
            </div>
          </label>
          <input type='checkbox' id={modalId} className='modal-toggle' />
          <div className='modal'>
            <div className='modal-box'>
              <h3 className='flex justify-center space-y-3 text-lg font-bold'>
                Summary
                <span>
                  <ShoppingCart className="ml-2"/>
                </span>
              </h3>
              {items.map((item) => (
                <p className='py-4' key={item.product.id}>
                  {item.product.title} | {item.quantity}
                </p>
              ))}

              <div className='modal-action'>
                <label htmlFor={modalId} className='btn'>
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ProductsFilters />
    </>
  )
}
