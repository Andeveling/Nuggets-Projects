import { useEffect, useRef, useState } from "react"

export const useSearch = () => {
  const [search, setSearch] = useState<string>("")
  const [error, setError] = useState<string>("")
  // Para saber si es el primer render
  const isFirstInput = useRef(true)
  useEffect(() => {
      if (isFirstInput.current) {
          isFirstInput.current = search === ""
          return
    }
    if (search === "") setError("No void")
    if(search !== '') setError('')
  }, [search])
  return { search, error, setSearch }
}
