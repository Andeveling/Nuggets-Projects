import { JiraTasks } from "../../components";
import { useTasksStore } from "../../stores";

export const JiraPage = () => {
  const todoTasks = useTasksStore((state) => state.getTaskByStatus("todo"));
  const doingTasks = useTasksStore((state) => state.getTaskByStatus("doing"));
  const doneTasks = useTasksStore((state) => state.getTaskByStatus("done"));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" value="todo" tasks={todoTasks} />

        <JiraTasks title="Avanzando" value="doing" tasks={doingTasks} />

        <JiraTasks title="Terminadas" value="done" tasks={doneTasks} />
      </div>
    </>
  );
};
