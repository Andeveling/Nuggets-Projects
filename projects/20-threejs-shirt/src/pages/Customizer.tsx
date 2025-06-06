import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useSnapshot } from "valtio"

import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "../components"
import { DecalTypes, DecalTypesInterface, EditorTabs, FilterTabs } from "../config/constants"
import { reader } from "../config/helpers"
import { fadeAnimation, slideAnimation } from "../config/motion"
import state from "../store"

const Customizer = () => {
  const snap = useSnapshot(state)

  const [file, setFile] = useState<Blob | null>(null)

  const [prompt, setPrompt] = useState("")
  const [generatingImg, setGeneratingImg] = useState(false)

  const [activeEditorTab, setActiveEditorTab] = useState("")
  const [activeFilterTab, setActiveFilterTab] = useState<ActiveFilterTabType>({
    logoShirt: true,
    stylishShirt: false,
  })

  type ActiveFilterTabType = {
    logoShirt: boolean
    stylishShirt: boolean
    [key: string]: boolean
  }
  type DecalTypeKey = keyof DecalTypesInterface

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker file={file as Blob} setFile={setFile} readFile={readFile} />
      case "aipicker":
        return (
          <AIPicker prompt={prompt} setPrompt={setPrompt} generatingImg={generatingImg} handleSubmit={handleSubmit} />
        )
      default:
        return null
    }
  }

  const handleSubmit = async (type: string) => {
    if (!prompt) return alert("Please enter a prompt")

    try {
      setGeneratingImg(true)

      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      })

      const data = await response.json()

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false)
      setActiveEditorTab("")
    }
  }

  const handleDecals = (type: DecalTypeKey, result: string) => {
    const decalType = DecalTypes[type]
    state[decalType.stateProperty] = result
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = true
        state.isFullTexture = false
        break
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState: ActiveFilterTabType) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      }
    })
  }

  const readFile = (type: string) => {
    if (file !== null) {
      reader(file).then((result) => {
        if (typeof result === "string") {
          handleDecals(type, result)
          setActiveEditorTab("")
        }
      })
    }
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key='custom' className='absolute top-0 left-0 z-10' {...slideAnimation("left")}>
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => (state.intro = true)}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>

          <motion.div className='filtertabs-container' {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
