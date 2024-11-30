import { IoCheckmarkCircleOutline } from "react-icons/io5"
import type { TaskStatus } from "../../interfaces"
import { JiraSingleTask } from "./JiraSingleTask"
import classnames from "classnames"
import type { Task } from "../../interfaces"
import AddNewTaskModal from "./AddNewTaskModal"
import { useTaskHook } from "../../hooks/useTaskHook"

interface Props {
  title: string
  tasks: Task[]
  value: TaskStatus
}

export const JiraTasks = ({ title, value, tasks }: Props) => {
  const { isDragging, onDragOver, handleDragOver, handleDragLeave, handleDrop } = useTaskHook({ status: value })
  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classnames(
        "!text-black relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]",
        isDragging && "border-dashed border-2 border-blue-400",
        isDragging && onDragOver && "border-dashed border-2 border-green-400"
      )}>
      {/* Task Header */}

      <div className='relative flex flex-row justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100'>
            <span className='flex justify-center items-center h-6 w-6 text-brand-500'>
              <IoCheckmarkCircleOutline style={{ fontSize: "50px" }} />
            </span>
          </div>

          <h4 className='ml-4 text-xl font-bold text-navy-700'>{title}</h4>
        </div>

        <AddNewTaskModal value={value} />
      </div>
      {/* Task Items */}
      <div className='h-full w-full'>
        {tasks.map((task) => (
          <JiraSingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
