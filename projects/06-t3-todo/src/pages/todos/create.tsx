import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "@/utils/api";

type Inputs = {
  title: string;
  description: string;
};

export default function CreateTodoPage() {
  const { register, handleSubmit, reset } = useForm<Inputs>({});
  const createTodoMutation = api.todoRouter.createTodo.useMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    createTodoMutation.mutate(data, {
      onError: () => {
        console.log("error");
      },
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <div className="container mx-auto flex min-h-screen  flex-col items-center px-10 shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control max-w-md space-y-2"
      >
        <label htmlFor="title" className="label">Title</label>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input w-full max-w-xs"
          {...register("title")}
        />

        <label htmlFor="description" className="label">Description</label>
        <textarea
          className="textarea-bordered textarea textarea-lg w-full max-w-xs"
          {...register("description")}
        />
        <button type="submit" className="btn-primary btn mt-2">
          Create
        </button>
      </form>
    </div>
  );
}
