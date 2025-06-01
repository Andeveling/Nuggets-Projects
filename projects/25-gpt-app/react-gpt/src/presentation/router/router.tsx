// src/routes/menuRoutes.js
import React from "react"
import { SpellCheck, Code2, Droplet, Language, Mic2, Image as LucideImage, MagicWand, MessageCircle, User } from "lucide-react"

// import OrthographyPage from "@/presentation/pages/orthography/OrthographyPage"
// import ProsConsPage from "@/pages/ProsConsPage"
// import ProsConsStreamPage from "@/pages/ProsConsStreamPage"
// import TranslatePage from "@/pages/TranslatePage"
// import TextToAudioPage from "@/pages/TextToAudioPage"
// import ImageGenerationPage from "@/pages/ImageGenerationPage"
// import ImageTunningPage from "@/pages/ImageTunningPage"
// import AudioToTextPage from "@/pages/AudioToTextPage"
import { AssistantPage } from "@/presentation/pages/assistant/AssistantPage"
import { createBrowserRouter } from "react-router-dom"

export const menuRoutes = [
  // {
  //   to: "/orthography",
  //   icon: <SpellCheck />,
  //   title: "Ortografía",
  //   description: "Corregir ortografía",
  //   component: <OrthographyPage />,
  // },
  // {
  //   to: "/pros-cons",
  //   icon: <Code2 />,
  //   title: "Pros & Cons",
  //   description: "Comparar pros y contras",
  //   component: <ProsConsPage />,
  // },
  // {
  //   to: "/pros-cons-stream",
  //   icon: <Droplet />,
  //   title: "Como stream",
  //   description: "Con stream de mensajes",
  //   component: <ProsConsStreamPage />,
  // },
  // {
  //   to: "/translate",
  //   icon: <Language />,
  //   title: "Traducir",
  //   description: "Textos a otros idiomas",
  //   component: <TranslatePage />,
  // },
  // {
  //   to: "/text-to-audio",
  //   icon: <Mic2 />,
  //   title: "Texto a audio",
  //   description: "Convertir texto a audio",
  //   component: <TextToAudioPage />,
  // },
  // {
  //   to: "/image-generation",
  //   icon: <LucideImage />,
  //   title: "Imágenes",
  //   description: "Generar imágenes",
  //   component: <ImageGenerationPage />,
  // },
  // {
  //   to: "/image-tunning",
  //   icon: <MagicWand />,
  //   title: "Editar imagen",
  //   description: "Generación continua",
  //   component: <ImageTunningPage />,
  // },
  // {
  //   to: "/audio-to-text",
  //   icon: <MessageCircle />,
  //   title: "Audio a texto",
  //   description: "Convertir audio a texto",
  //   component: <AudioToTextPage />,
  // },
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
