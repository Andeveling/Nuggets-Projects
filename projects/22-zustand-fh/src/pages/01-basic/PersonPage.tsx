import { WhiteCard } from "../../components"
import { usePersonStore } from "../../stores/person"

export const PersonPage = () => {
  const firstName = usePersonStore((state) => state.firstName)
  const lastName = usePersonStore((state) => state.lastName)
  //actions
  const setFirstName = usePersonStore((state) => state.setFirstName)
  const setLastName = usePersonStore((state) => state.setLastName)

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   const firstName = formData.get("firstName")
  //   setFirstName(firstName as string)
  //   const lastName = formData.get("lastName")
  //   setLastName(lastName as string)
  // }
  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form>
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Primer Nombre</label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Primer Nombre'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Apellido</label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Apellido'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>
              {/* <div>
                <input
                  type='submit'
                  value='Guardar'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                />
              </div> */}
            </div>

            <pre className='bg-gray-200 p-5 rounded-[20px]'>
              {JSON.stringify(
                {
                  firstName,
                  lastName,
                },
                null,
                2
              )}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  )
}
