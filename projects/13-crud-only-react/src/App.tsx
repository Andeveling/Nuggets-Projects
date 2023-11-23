import "./App.css"
import { ItemList } from "./components/item-list"
import { useSEO } from "./hooks/useSEO"
import { useItems } from "./hooks/useItems"

function App() {
  const { items, handleAddItem, handleDeleteItem } = useItems()
  useSEO({
    title: `List Items App - ${items.length} items`,
    description: "List Items App",
  })

  return (
    <main className='grid grid-cols-2'>
      <aside className='max-w-xs'>
        <h1 className='text-3xl'>List Items App</h1>
        <h2 className='text-xl'>Add an item</h2>
        <form onSubmit={handleAddItem} className='w-full max-w-xs form-control' aria-label='Add an item' role='form'>
          <label htmlFor='item' className='label'>
            <span className='label-text'>Add an item:</span>
          </label>
          <input required type='text' name='item' id='item' className='input input-bordered' />
          <button type='submit' className='mt-4 btn btn-primary'>
            Add
          </button>
        </form>
      </aside>
      <section className='box-border flex flex-wrap max-w-sm p-4 border rounded-lg'>
        <h2 className='w-full mb-3 text-xl text-center'>Item list:</h2>

        {items.length === 0 ? (
          <strong>
            <p>No items</p>
          </strong>
        ) : (
          <ItemList items={items} handleDeleteItem={handleDeleteItem} />
        )}
      </section>
    </main>
  )
}

export default App
