import { TypingLoader } from "@/presentation/components"
import { GPTMessage } from "@/presentation/components/chat-bubbles/GPTMessage"
import { MyMessage } from "@/presentation/components/chat-bubbles/MyMessage"
import { TextMessageBox } from "@/presentation/components/chat-input-boxes/TextMessageBox"
import { useState } from "react"

interface Message {
  text: string
  isGpt: boolean
}

export const OrthographyPage = () => {
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePostMessage = async (message: string) => {
    setLoading(true)
    setMessages((prev) => [...prev, { text: message, isGpt: false }])
    // TODO: Use case
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    // TODO: Add GPT message true
  }

  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>
          {messages.map((message, index) => {
            if (message.isGpt) {
              return <GPTMessage message={message.text} key={index} />
            } else {
              return <MyMessage message={message.text} key={index} />
            }
          })}

          {loading && <TypingLoader className='fade-in' />}
        </div>
      </div>
      <TextMessageBox onSendMessage={handlePostMessage} placeholder='Escribe lo que quieras.' disabledCorrections />
    </div>
  )
}
