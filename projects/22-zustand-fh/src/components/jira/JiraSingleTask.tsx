import type { Task } from "../../interfaces"
import { IoReorderTwoOutline } from "react-icons/io5"
import { useTasksStore } from "../../stores"

interface Props {
  task: Task
}

export const JiraSingleTask = ({ task }: Props) => {
  const setDraggingTaskId = useTasksStore((state) => state.setDraggingTaskId)
  const removeDraggingTaskId = useTasksStore((state) => state.removeDraggingTaskId)

  const handleDragStart = () => {
    setDraggingTaskId(task.id)
  }

  const handleDragEnd = () => {
    removeDraggingTaskId()
  }
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className='mt-5 flex place-items-center justify-between p-2'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-base font-bold text-navy-700'>{task.title}</p>
      </div>
      <span className=' h-6 w-6 text-navy-700 cursor-pointer'>
        <IoReorderTwoOutline />
      </span>
    </div>
  )
}
