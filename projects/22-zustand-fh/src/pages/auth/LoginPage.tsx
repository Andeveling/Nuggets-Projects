import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "../../stores";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  username: string;
  password: string;
  remember: boolean;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.loginUser);
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      await loginUser(data.username, data.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            autoComplete="off"
            {...register("username", { required: "Username is required" })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            autoComplete="off"
            {...register("password", { required: "Password is required" })}
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="text-blue-500"
            {...register("remember")}
          />
          <label className="text-gray-600 ml-2">Remember Me</label>
        </div>

        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="bg-indigo-600">
          Login
        </button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <a href="#" className="hover:underline">
          Sign up Here
        </a>
      </div>
    </>
  );
};
