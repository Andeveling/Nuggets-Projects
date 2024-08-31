import { useRef, RefObject, useId } from "react";
import { IoAddOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTasksStore } from "../../stores";
import { Task, TaskStatus } from "../../interfaces";

type TaskForm = {
  title: Task["id"];
};

export default function AddNewTaskModal({ value }: { value: TaskStatus }) {
  const modalRef: RefObject<HTMLDialogElement> = useRef(null);
  const modalId = useId();
  const addTask = useTasksStore((state) => state.addTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskForm>({
    mode: "onChange",
  });
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const onSubmit: SubmitHandler<TaskForm> = (data) => {
    addTask(data.title, value);
    reset();
    closeModal();
  };

  return (
    <>
      <button className="btn btn-primary rounded-full" onClick={openModal}>
        <span className="sr-only">Anadir una tarea neeva</span>
        <IoAddOutline />
      </button>
      <dialog id={modalId} className="modal" ref={modalRef}>
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box ">
          <div className="bg-white">
            <h3 className="font-bold text-lg">Crear nueva tarea</h3>
            <label className="form-control w-full mt-2">
              <div className="label">
                <span className="label-text">Titulo de la tarea</span>
                <span className="label-text-alt badge badge-error">
                  Requerido
                </span>
              </div>
              <input
                type="text"
                placeholder="Escribe aca"
                className="input input-bordered w-full"
                {...register("title", { required: "El titulo es requrido" })}
              />
              {errors.title && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.title?.message}
                  </span>
                </div>
              )}
            </label>
            <div className="modal-action flex justify-between">
              <button className="btn " onClick={closeModal}>
                Cerrar
              </button>
              <button className="btn btn-primary">Crear</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
