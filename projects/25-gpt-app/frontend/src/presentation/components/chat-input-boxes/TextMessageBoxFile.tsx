import { Paperclip, Send } from "lucide-react"
import { useState, type ChangeEvent, type FormEvent } from "react"

interface TextMessageBoxFileProps {
  onSendMessage: (message: string) => void
  onSendFile: (file: File) => void
  placeholder?: string
  disabledCorrections?: boolean
  accept?: string // Tipos de archivo aceptados: Ej. "image/png, image/jpeg"
}

export const TextMessageBoxFile: React.FC<TextMessageBoxFileProps> = ({
  onSendMessage,
  onSendFile,
  placeholder = "Escribe tu mensaje",
  disabledCorrections = false,
  accept = "image/*",
}) => {
  const [message, setMessage] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)

  // Manejador de input de archivo
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Reset file in ever
    setFile(null)
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  // Manejador del envío del form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const texto = message.trim()
    const hasText = texto.length > 0
    const hasFile = file !== null

    if (!hasText && !hasFile) return

    // Si hay archivo, enviarlo primero
    if (hasFile && file) {
      onSendFile(file)
      setFile(null)
    }

    // Si hay texto, enviarlo también
    if (hasText) {
      onSendMessage(texto)
      setMessage("")
    }
  }

  // Determina si el botón debe deshabilitarse
  const isEmpty = message.trim().length === 0 && file === null

  return (
    <form onSubmit={handleSubmit} className='flex items-center px-4 py-3 bg-white rounded-xl shadow-md'>
      {/* BOTÓN PARA SELECCIONAR ARCHIVO */}
      <label htmlFor='file-input' className='mr-3 flex-shrink-0 cursor-pointer text-gray-500 hover:text-gray-700' aria-label='Adjuntar archivo'>
        <Paperclip className='h-6 w-6' />
        <input id='file-input' type='file' className='hidden' onChange={handleFileChange} />
      </label>
      {/* SI HAY UN ARCHIVO SELECCIONADO, MOSTRAR NOMBRE (TRUNCADO) */}
      {file && <span className='mr-2 max-w-[120px] truncate text-xs text-green-600'>{file.name}</span>}
      {/* INPUT DE TEXTO */}
      <input
        type='text'
        autoFocus
        className='flex-1 h-11 px-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-100 transition-colors duration-200'
        placeholder={file ? file.name : placeholder}
        autoComplete={disabledCorrections ? "on" : "off"}
        autoCorrect={disabledCorrections ? "on" : "off"}
        spellCheck={disabledCorrections ? "true" : "false"}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        accept={accept}
      />

      {/* BOTÓN DE ENVIAR */}
      <button
        type='submit'
        aria-label='Enviar'
        disabled={isEmpty}
        className={`
          flex items-center justify-center h-11 px-4 ml-3 rounded-lg font-medium transition-colors duration-200
          ${isEmpty ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}
        `}>
        <span>Enviar</span>
        <Send className='ml-2 h-5 w-5' />
      </button>
    </form>
  )
}
