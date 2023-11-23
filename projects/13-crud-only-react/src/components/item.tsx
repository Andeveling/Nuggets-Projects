import { ItemI } from "../models/Item.interface"

interface Props extends ItemI {
  handleDeleteItem: (id: string) => () => void
}
export const Item = ({ id, text, emoji, handleDeleteItem }: Props) => {
  return (
    <li key={id} className='flex justify-between space-x-2 badge badge-secondary badge-lg'>
      <span className='text-md'>
        {emoji} {text}
      </span>
      <svg
        onClick={handleDeleteItem(id)}
        aria-label='delete'
        role='button'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='inline-block w-4 h-4 stroke-current'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
      </svg>
    </li>
  )
}
