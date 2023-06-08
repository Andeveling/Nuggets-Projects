import { ProductT } from "./Product.model"

export type QuantityT = number

export type CartItemT = {
  product: ProductT
  quantity: QuantityT
}

export type CartStateT = {
  items: CartItemT[]
}
