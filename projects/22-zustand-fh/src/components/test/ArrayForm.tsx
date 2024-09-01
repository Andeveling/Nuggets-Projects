import {
  useForm,
  useFieldArray,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import Papa from "papaparse";
import { saveAs } from "file-saver";

interface Task {
  task: string;
}

interface FormValues {
  tasks: Task[];
}

function ArrayForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      tasks: [{ task: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks", // nombre del campo array
    rules: { minLength: 1 }, // validar que haya al menos un campo
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Datos del formulario: ", data);
    // Funcion para generar un archivo csv
    generateCSV(data);
  };

  const generateCSV = (data: FormValues) => {
    const csv = Papa.unparse(data.tasks);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "tasks.csv");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Lista de Tareas</h2>

      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <Controller
            control={control}
            name={`tasks.${index}.task` as const}
            render={({ field }) => (
              <input
                {...field}
                placeholder={`Tarea ${index + 1}`}
                style={{ marginRight: "10px" }}
              />
            )}
          />
          <button type="button" onClick={() => remove(index)}>
            Eliminar
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ task: "" })}
        style={{ marginTop: "10px", marginRight: "10px" }}
      >
        Añadir Tarea
      </button>

      <button type="submit" style={{ marginTop: "10px" }}>
        Enviar
      </button>
    </form>
  );
}

export default ArrayForm;
