export const increment = (numberOfIncrement) => ({
  type: 'INCREMENT',
  payload: numberOfIncrement,
});

export const decrement = (numberOfDecrement) => ({
  type: 'DECREMENT',
  payload: numberOfDecrement,
});
