import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type FiltersT = {
  category: string
  minPrice: number
}

type FilterContexT = {
  filters: FiltersT
  setFilters: Dispatch<SetStateAction<FiltersT>>
}

export const FilterContext = createContext<FilterContexT>({} as FilterContexT)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FiltersT>({ category: "all", minPrice: 0 })
  return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
}
