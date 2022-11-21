import { CLEAR, DECREMENT, INCREMENT } from "../types/CounterTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {

  switch (type) {

    case INCREMENT:
      return {counter: state.counter + 1}
    case DECREMENT:
      return {counter: state.counter - 1};
    case CLEAR:
      return initialState;

    default:
      return state;

  }
};


export default counterReducer;