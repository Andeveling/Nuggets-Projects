import { WhiteCard } from "../../components"
import { useBearStore } from "../../stores/index"
import { useShallow } from "zustand/react/shallow"

export const BearPage = () => {
  // No se aconseja usar destructuring de estado
  // const { blackBears, polarBears, pandaBears, incrementBlackBears, decrementBlackBears } = useBearStore()

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {/* Creamos componentes separados para renderizar solo los componentes que necesitemos */}
        <BlackBears />
        <PolarBears />
        <PandaBears />
        <ShallowBears />
      </div>
    </>
  )
}

const BlackBears = () => {
  const blackBears = useBearStore((state) => state.blackBears)
  const incrementBlackBears = useBearStore((state) => state.incrementBlackBears)
  const decrementBlackBears = useBearStore((state) => state.decrementBlackBears)
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => incrementBlackBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {blackBears} </span>
        <button onClick={() => decrementBlackBears(1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const PolarBears = () => {
  const polarBears = useBearStore((state) => state.polarBears)
  const incrementPolarBears = useBearStore((state) => state.incrementPolarBears)
  const decrementPolarBears = useBearStore((state) => state.decrementPolarBears)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => incrementPolarBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {polarBears} </span>
        <button onClick={() => decrementPolarBears(1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const PandaBears = () => {
  const pandaBears = useBearStore((state) => state.pandaBears)
  const incrementPandaBears = useBearStore((state) => state.incrementPandaBears)
  const decrementPandaBears = useBearStore((state) => state.decrementPandaBears)
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className='flex flex-col md:flex-row'>
        <button onClick={() => incrementPandaBears(1)}> +1</button>
        <span className='text-3xl mx-2 lg:mx-10'> {pandaBears} </span>
        <button onClick={() => decrementPandaBears(1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

const ShallowBears = () => {
  // Si no usamos el shallow, se renderiza aunque no haya cambios
  const bears = useBearStore(useShallow((state) => state.bears))
  // const bears = useBearStore((state) => state.bears)
  const doNoting = useBearStore((state) => state.doNoting)

  // Si usamos el shallow, solo se renderiza cuando hay cambios
  const addBear = useBearStore((state) => state.addBear)
  const clearBears = useBearStore((state) => state.clearBears)
  return (
    <WhiteCard centered>
      <h2>Nothing</h2>
      <div className="flex flex-col gap-2">
        <button onClick={() => doNoting()}> Nothing</button>
        <button onClick={() => addBear({ name: "Bear", color: "black" })}> Add Bear</button>
        <button onClick={() => clearBears()}> Clear Bears</button>
      </div>

      <code>
        <pre>{JSON.stringify(bears, null, 2)}</pre>
      </code>
    </WhiteCard>
  )
}
