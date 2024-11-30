import { useState } from "react"
import { useTasksStore } from "../stores"
import type { TaskStatus } from "../interfaces"

interface Options {
  status: TaskStatus
}

export const useTaskHook = ({ status }: Options) => {
  const isDragging = useTasksStore((state) => !!state.draggingTaskId)
  const [onDragOver, setOnDragOver] = useState(false)
  const onTaskDrop = useTasksStore((state) => state.onTaskDrop)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOnDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setOnDragOver(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    onTaskDrop(status)
  }

  return {
    // Properties
    isDragging,
    onDragOver,
    // Methods
    handleDragOver,
    handleDragLeave,
    handleDrop,
  }
}
