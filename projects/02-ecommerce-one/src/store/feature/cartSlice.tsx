import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { CartItemT, CartStateT } from "../../models/Cart.model"
import { ProductT } from "../../models/Product.model"
import { RootState } from "../store"

const cartInitialState: CartStateT = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cartState",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductT>) => {
      const product = action.payload
      const existingCartItem = state.items.find((item) => item.product.id === product.id)
      if (existingCartItem) {
        existingCartItem.quantity++
      } else {
        const newCartItem: CartItemT = {
          product: product,
          quantity: 1,
        }
        state.items.push(newCartItem)
      }
    },
    removeToCart: (state, action: PayloadAction<ProductT["id"]>) => {
      const removeProductId = action.payload
      state.items = state.items.filter((item) => item.product.id !== removeProductId)
    },
    increaseQuantity: (state, action: PayloadAction<ProductT["id"]>) => {
      const itemIncreaseQuantity = state.items.find((item) => item.product.id === action.payload)
      if (itemIncreaseQuantity) itemIncreaseQuantity.quantity++
    },
    decreaseQuantity: (state, action: PayloadAction<ProductT["id"]>) => {
      const itemDecreaseQuantity = state.items.find((item) => item.product.id === action.payload)
      if (itemDecreaseQuantity && itemDecreaseQuantity.quantity > 1) itemDecreaseQuantity.quantity--
    },
  },
})

export const selectCartItems = (state: RootState) => state.cart.items

export const { addToCart, removeToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer
