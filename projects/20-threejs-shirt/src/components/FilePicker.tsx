import { ChangeEvent } from "react"
import CustomButton from "./CustomButton"

type Props = {
  file: Blob
  setFile: (file: Blob) => void
  readFile: (type: string) => void
}

const FilePicker = ({ file, setFile, readFile }: Props) => {
  return (
    <div className='filepicker-container'>
      <div className='flex flex-col flex-1'>
        <input
          id='file-upload'
          type='file'
          accept='image/*'
          onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files && setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>

        <p className='mt-2 text-xs text-gray-500 truncate'>{file === null ? "No file selected" : file.toString()}</p>
      </div>

      <div className='flex flex-wrap gap-3 mt-4'>
        <CustomButton type='outline' title='Logo' handleClick={() => readFile("logo")} customStyles='text-xs' />
        <CustomButton type='filled' title='Full' handleClick={() => readFile("full")} customStyles='text-xs' />
      </div>
    </div>
  )
}

export default FilePicker
