import { ContactI } from "@/interfaces/Contact.interface"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export const Contact = ({ contact: { id, name, email } }: { contact: ContactI }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li className='card border p-2 bg-primary text-xl' style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div className='gap-2 flex justify-between'>
        <p className='text-md font-bold'> {name} </p> | <span>{email}</span>
      </div>
    </li>
  )
}
