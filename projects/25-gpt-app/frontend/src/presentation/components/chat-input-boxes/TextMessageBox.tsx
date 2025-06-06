import { Send } from "lucide-react"
import { useState, type FormEvent } from "react"

interface TextMessageBoxProps {
  onSendMessage: (message: string) => void
  placeholder?: string
  disabledCorrections?: boolean
}

export const TextMessageBox: React.FC<TextMessageBoxProps> = ({ onSendMessage, placeholder = "Escribe tu mensaje", disabledCorrections = false }) => {
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = message.trim()
    if (text.length === 0) return

    onSendMessage(text)
    setMessage("")
  }

  const isEmpty = message.trim().length === 0

  return (
    <form onSubmit={handleSubmit} className='flex items-center px-4 py-3 bg-white rounded-xl shadow-md'>
      <input
        type='text'
        autoFocus
        className='flex-1 h-11 px-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-100 transition-colors duration-200'
        placeholder={placeholder}
        autoComplete={disabledCorrections ? "on" : "off"}
        autoCorrect={disabledCorrections ? "on" : "off"}
        spellCheck={disabledCorrections ? "true" : "false"}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type='submit'
        aria-label='Enviar mensaje'
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
