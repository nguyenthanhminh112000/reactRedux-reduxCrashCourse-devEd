import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../actions/index.js';
const Body = () => {
  //   const counter = useSelector((state) => {
  //     return state.counter;
  //   });

  const dispatch = useDispatch();
  const increaseCounter = () => {
    dispatch(increment(5));
  };
  const decrementCounter = () => {
    dispatch(decrement(5));
  };
  console.log('Body');
  return (
    <div>
      {' '}
      {/* <h1>Counter {counter}</h1> */}
      <button onClick={increaseCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Body;
