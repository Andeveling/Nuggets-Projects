
type Props = {
  type: string
  title: string
  handleClick: () => void
  customStyles?: string
}
export default function CustomButton({ type, title, handleClick, customStyles }: Props) {
  const generateStyle = (type: string) => {
    switch (type) {
      case "filled":
        return "bg-black text-white"
      default:
        return "bg-primary text-black"
    }
  }
  return (
    <button
      type='button'
      onClick={handleClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} ${generateStyle(type)}`}>
      {title}
    </button>
  )
}
