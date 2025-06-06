import "./TypingLoader.css"

export const TypingLoader = ({ className }: { className?: string }) => {
  return (
    <div className={`typing col-start-1 col-end-12 fade-in ${className}`}>
      <span className='circle scaling'></span>
      <span className='circle scaling'></span>
      <span className='circle scaling'></span>
    </div>
  )
}
