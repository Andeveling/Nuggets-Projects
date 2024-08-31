import { create, StateCreator } from "zustand";
import type { Task, TaskStatus } from "../../interfaces";
import { devtools } from "zustand/middleware";

interface TasksState {
  draggingTaskId?: Task["id"];
  tasks: Record<string, Task>;
  getTaskByStatus: (status: TaskStatus) => Task[];
  addTask: (title: string, status: TaskStatus) => void;
  setDraggingTaskId: (taskId: Task["id"]) => void;
  changeStatus: (taskId: Task["id"], status: TaskStatus) => void;
  removeDraggingTaskId: () => void;
  onTaskDrop: (status: TaskStatus) => void;
}

const storeApi: StateCreator<TasksState> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    1: {
      id: "1",
      title: "Buy milk",
      status: "todo",
    },
    2: {
      id: "2",
      title: "Buy bread",
      status: "doing",
    },
    3: {
      id: "3",
      title: "Buy eggs",
      status: "done",
    },
    4: {
      id: "4",
      title: "Buy milk",
      status: "todo",
    },
    5: {
      id: "5",
      title: "Buy bread",
      status: "doing",
    },
    6: {
      id: "6",
      title: "Buy eggs",
      status: "done",
    },
  },
  getTaskByStatus: (status: TaskStatus): Task[] => {
    const tasks = get().tasks;
    return Object.values(tasks).filter((task) => task.status === status);
  },
  addTask: (title, status) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      status,
    };
    set((state) => ({
      tasks: {
        ...state.tasks,
        [newTask.id]: newTask,
      },
    }));
  },
  setDraggingTaskId: (taskId: Task["id"]) => {
    set({ draggingTaskId: taskId });
  },
  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },
  changeStatus: (taskId: Task["id"], status: TaskStatus) => {
    set((state) => {
      const task = state.tasks[taskId];
      task.status = status;
      return { tasks: { ...state.tasks } };
    });
  },
  onTaskDrop: (status: TaskStatus) => {
    const taskId = get().draggingTaskId;
    if (!taskId) return;
    if (taskId) {
      get().changeStatus(taskId, status);
      get().removeDraggingTaskId(); // remove dragging task id
    }
  },
});

export const useTasksStore = create<TasksState>()(
  devtools(storeApi, { name: "tasks" }),
);
