
interface Props {
  message: string
}

export const MyMessage = ({ message }: Props) => {
  return (
    <div className='col-start-1 col-end-10 p-3 rounded-lg'>
      <div className='flex items-start flex-row-reverse grow'>
        <div className='flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 grid place-items-center'>G</div>
        <div className='relative mr-3 text-sm bg-black/80 py-3 px-4 shadow rounded-xl  max-w-full text-white'>
          <div>{message}</div>
        </div>
      </div>
    </div>
  )
}
