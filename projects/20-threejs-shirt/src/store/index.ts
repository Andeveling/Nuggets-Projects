import { proxy } from "valtio"

export interface StateType {
  intro: boolean
  color: string
  isLogoTexture: boolean
  isFullTexture: boolean
  logoDecal: string
  fullDecal: string
  pointer: {
    x: number
    y: number
  }

  [key: string]: unknown
}

const state = proxy<StateType>({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  pointer: { x: 0, y: 0 },
})

export default state
