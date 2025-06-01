import { TypingLoader } from "@/presentation/components"
import { GPTMessage } from "@/presentation/components/chat-bubbles/GPTMessage"
import { MyMessage } from "@/presentation/components/chat-bubbles/MyMessage"
export const OrthographyPage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>
          <GPTMessage message='Hola, puedes escribirme algo?' />
          <MyMessage message='Hola, puedes escribirme algo?' />
          <TypingLoader className="fade-in" />
        </div>
      </div>
    </div>
  )
}
