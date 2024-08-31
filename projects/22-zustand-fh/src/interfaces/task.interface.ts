export interface Task {
  id: string;
  title: string;
  status: string;
}

export type TaskStatus = "todo" | "doing" | "done";
