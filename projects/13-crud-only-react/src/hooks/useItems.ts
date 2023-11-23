import { useState } from "react"
import { ItemI } from "../models/Item.interface"

export const useItems = () => {
  const [items, setItems] = useState<ItemI[]>([])
  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      item: { value: string }
    }

    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        text: target.item.value,
        emoji: "🎉",
      },
    ])
    target.item.value = ""
  }

  const handleDeleteItem = (id: string) => () => {
    setItems(items.filter((item) => item.id !== id))
  }
  return {
    items,
    handleAddItem,
    handleDeleteItem,
  }
}
