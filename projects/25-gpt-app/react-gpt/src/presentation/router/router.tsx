// src/routes/menuRoutes.js
import { Code2, Droplet, Languages, Image as LucideImage, Fan, MessageCircle, Mic2, SpellCheck, User } from "lucide-react"

import { AudioToTextPage } from "@/presentation/pages/audio-to-text/AudioToTextPage"
import { ImageGenerationPage } from "@/presentation/pages/image-generation/ImageGenerationPage"
import { ImageTunningPage } from "@/presentation/pages/image-tunning/ImageTunningPage"
import { OrthographyPage } from "@/presentation/pages/orthography/OrthographyPage"
import { ProsConsStreamPage } from "@/presentation/pages/pros-cons-steam/ProsConsStreamPage"
import { ProsConsPage } from "@/presentation/pages/pros-cons/ProsConsPage"
import { TextToAudioPage } from "@/presentation/pages/text-to-audio/TextToAudioPage"
import { TranslatePage } from "@/presentation/pages/translate/TranslatePage"
import { AssistantPage } from "@/presentation/pages/assistant/AssistantPage"
import { createBrowserRouter } from "react-router-dom"

export const menuRoutes = [
  {
    to: "/orthography",
    icon: <SpellCheck />,
    title: "Ortografía",
    description: "Corregir ortografía",
    component: <OrthographyPage />,
  },
  {
    to: "/pros-cons",
    icon: <Code2 />,
    title: "Pros & Cons",
    description: "Comparar pros y contras",
    component: <ProsConsPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: <Droplet />,
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <ProsConsStreamPage />,
  },
  {
    to: "/translate",
    icon: <Languages />,
    title: "Traducir",
    description: "Textos a otros idiomas",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: <Mic2 />,
    title: "Texto a audio",
    description: "Convertir texto a audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: <LucideImage />,
    title: "Imágenes",
    description: "Generar imágenes",
    component: <ImageGenerationPage />,
  },
  {
    to: "/image-tunning",
    icon: <Fan />,
    title: "Editar imagen",
    description: "Generación continua",
    component: <ImageTunningPage />,
  },
  {
    to: "/audio-to-text",
    icon: <MessageCircle />,
    title: "Audio a texto",
    description: "Convertir audio a texto",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: <User />,
    title: "Asistente",
    description: "Información del asistente",
    component: <AssistantPage />,
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [],
  },
])
