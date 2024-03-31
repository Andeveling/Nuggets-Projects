import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion"
import state from "../store"
import { CustomButton } from "../components"
export default function Home() {
  const snap = useSnapshot(state)
  console.log(snap.intro)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <figure>
              <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
            </figure>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-400'>
                Design your <strong>dream windows</strong> just like building your own PC.
              </p>
              <CustomButton
                type='filled'
                title='Custom Window'
                handleClick={() => (state.intro = false)}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
