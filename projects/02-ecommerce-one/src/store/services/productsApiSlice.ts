import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ProductT } from "../../models/Product.model"

// Define a service using a base URL and expected endpoints
export const productsApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductT[], void>({
      query: () => `/products`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsApiSlice
