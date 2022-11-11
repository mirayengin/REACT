import { CLEAR, DECREMENT, INCREMENT } from "../types/CounterTypes"

export const increment = () => {
  return {type: INCREMENT}
}
export const decrement = () => {
  return {type: DECREMENT}
}
export const clear = () => {
  return {type: CLEAR}
}

