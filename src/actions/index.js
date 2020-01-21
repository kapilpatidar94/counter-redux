export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increaseCount = () => {
  return { type: INCREMENT, payload: 1 };
};

export const decreaseCount = () => {
  return {
    type: DECREMENT,
    payload: -1
  };
};

export const resetCount = () => {
  return {
    type: RESET,
    payload: 0
  };
};
