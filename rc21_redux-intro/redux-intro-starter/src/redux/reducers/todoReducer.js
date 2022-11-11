import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes"

const initialState = {
  todoLİst: [{id:new Date().getTime(),text:"", completed:false }],
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
      return { 
        // Value olan todoList e direk erişemiyoruz çünkü bize state içinde geldi
      todoLİst: [...state.todoLİst, {id: new Date().getTime(),text:payload, completed:false}] 
     }
  case DELETE_TODO:
    return { ...state, ...payload }
    case CLEAR_TODO:
      return initialState;
  case TOGGLE_TODO:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default todoReducer;