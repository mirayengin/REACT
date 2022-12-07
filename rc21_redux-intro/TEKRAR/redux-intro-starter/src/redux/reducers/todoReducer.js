// import todoList from "../../components/todo/TodoList";
import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  todoList: [{id:new Date().getTime(), text:"Work", completed:true}],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  console.log('payload :>> ', payload);
  switch (type) {
    case ADD_TODO:
      // return { ...state, id:new Date().getTime(), text:payload, completed:false };
      return { 
        // ! yazdığımız todo olan listeye eklenecek
        todoList:[...state.todoList, {id:new Date().getTime(), text:payload, completed:false }]
       };
    case DELETE_TODO:
      return {
        todoList:payload
      }
    case CLEAR_TODO:
      return initialState
    case TOGGLE_TODO:
      return { ...state, id:new Date().getTime(),completed:true };

    default:
      return state;
  }
};
