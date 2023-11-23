import type { ItemI } from "../models/Item.interface"
import { Item } from "./item"

type Props = {
  items: ItemI[]
  handleDeleteItem: (id: string) => () => void
}
export const ItemList = ({ items, handleDeleteItem }: Props) => {
  return (
    <ul className='flex flex-wrap items-center justify-center w-full gap-2 space-y-2'>
      {items.map((item) => (
        <Item key={item.id} id={item.id} text={item.text} emoji={item.emoji} handleDeleteItem={handleDeleteItem} />
      ))}
    </ul>
  )
}
