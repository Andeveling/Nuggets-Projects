import { Modal } from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { useProtectView } from "@/hooks/useProtectView";
import { api } from "@/utils/api";
import { Todo } from "@prisma/client";

export default function ListTodoPage() {
  const { data, error, isLoading, refetch } =
    api.todoRouter.getAllTodo.useQuery();

  const { status } = useProtectView("/");
  if (error) return <div>{error.message}</div>;

  if (isLoading || !data || status === "loading")
    return (
      <div className="loading loading-spinner h-32 w-32">
        <label aria-label="Loading..." className="sr-only">
          loading...
        </label>
      </div>
    );

  return (
    <div className="container mx-auto max-w-4xl py-20">
      <h1 className="text-3xl">Todo List</h1>
      <div className="divider" />
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo, i) => {
              return <Row key={todo.id} todo={todo} i={i} refetch={refetch} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Row = ({
  todo,
  i,
  refetch,
}: {
  todo: Todo;
  i: number;
  refetch: () => void;
}) => {
  const { modalRef, onClose, onOpen } = useModal();
  const { mutate } = api.todoRouter.deleteTodo.useMutation({
    onSuccess() {
      refetch();
    },
  });

  const handleDelete = () => {
    mutate(
      { id: todo.id },
      {
        onSuccess() {
          refetch();
        },
      }
    );
  };

  return (
    <tr key={todo.id} className={i % 2 === 0 ? "bg-base-200" : ""}>
      <th>{todo.id}</th>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <button className="btn" onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-trash-2 text-error"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
        <Modal ref={modalRef}>
          <form method="dialog" className="modal-box">
            <h3 className="text-lg font-bold">Delete</h3>
            <p className="py-4">Are you ok to delete this todo {todo.title}?</p>
            <div className="modal-action justify-between">
              <button className="btn-error btn" onClick={handleDelete}>
                ok
              </button>
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </Modal>
      </td>
    </tr>
  );
};
