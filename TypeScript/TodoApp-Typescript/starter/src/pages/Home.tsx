import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6352746da9f3f34c373e14f3.mockapi.io/todo3";
// //! Burda todos statenin type ını belirledik.
// interface TodoType {
//   id: number | string;
//   task: string;
//   isDone: boolean;
// }

// //! Burada bu fonk işlem yaptığı için void oldu type ı
// type AddFn = (text: string) => void;

const Home = () => {
  //? bu tipte elemanları kabul eden bir array olduğu için todos o yüzden todotype[] dedik.
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      //! get yanına type verdik çünkü bu type dışında veri kabul etme dedik
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };

    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone:!item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };


  const deleteTodo:DeleteFn = async(id) => {
try {
  await axios.delete(`${url}/${id}`)
  getTodos()
} catch (error) {
  console.log(error)
}
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
