import Markdown from "react-markdown"

interface Props {
  message: string
}

export const GPTMessage = ({ message }: Props) => {
  return (
    <div className='col-start-1 col-end-19 p-3 rounded-lg'>
      <div className='flex grow items-start'>
        <div className='flex-shrink-0 h-10 w-10 rounded-full bg-green-600 grid place-items-center'>G</div>
        <div className='relative ml-3 text-sm bg-black/80 pt-3 px-4 shadow rounded-xl  max-w-full text-white'>
          <Markdown>{message}</Markdown>
        </div>
      </div>
    </div>
  )
}
