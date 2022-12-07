import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";


//? Bu action fonk sadece iki tane parametre return eder type ve payload dur. ama type her zaman yazılmalıdır.Payload ise boş bırakılabilir.
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload:payload,
  }
  
}

export const clearTodo = () => {
  return {
    type: CLEAR_TODO,
  }
  
}


export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO, payload:payload
  }
  
}


export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO, payload:payload
  }
  
}
