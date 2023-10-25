import { useState } from "react"
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"
import { Contact } from "@/components/Contact"
import { ContactI } from "./interfaces/Contact.interface"

interface Task {
  id: string
  title: string
  completed: boolean
}

export default function App() {
  const [contacts, setContacts] = useState<ContactI[]>([
    {
      id: "1",
      name: "John Doe",
      email: "9m7Fb@example.com",
      phone: "123-456-7890",
      isFavorite: true,
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "9m7Fb@example.com",
      phone: "123-456-7890",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Amy Doe",
      email: "9m7Fb@example.com",
      phone: "123-456-7890",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Bob Doe",
      email: "9m7Fb@example.com",
      phone: "123-456-7890",
      isFavorite: false,
    },
  ])

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const activeIndex = contacts.findIndex((contact) => contact.id === active.id)
    const overIndex = contacts.findIndex((contact) => contact.id === over!.id)

    const newOrderContacts = arrayMove(contacts, activeIndex, overIndex)

    setContacts(newOrderContacts)
    /* 
      Send back to server
    */
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-1/6 space-y-4'>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <h1 className='text-5xl font-bold'>Contact List</h1>
          <SortableContext items={contacts} strategy={verticalListSortingStrategy}>
            {/* Component */}
            <ul className='flex flex-col gap-2'>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
