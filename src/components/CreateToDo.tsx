import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IFoam {
  toDo: String;
}

const localData = localStorage.getItem("local");

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const todos = useRecoilValue(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IFoam>({
    // defaultValues: {
    //   localData: localData,
    // },
  });
  const handleValid = ({ toDo }: IFoam) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
    setValue("toDo", "");
    localStorage.setItem("local", JSON.stringify(todos));
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write now",
        })}
        placeholder="할일을 적으세요"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
