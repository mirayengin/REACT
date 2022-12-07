// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../../redux/actions/todoAction";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const disptach = useDispatch()
  const { todoList } = useSelector((state) => state.todo);

  const handleClearList = () => {
    disptach(clearTodo())
  };


  return (
    <div>
      <div>
        {todoList && todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
