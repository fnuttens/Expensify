import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ step = 1 } = {}) => ({
  type: 'INCREMENT',
  step
});

const decrementCount = ({ step = 1 } = {}) => ({
  type: 'DECREMENT',
  step
});

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.step
      };
    case 'DECREMENT':
      return {
        count: state.count - action.step
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ step: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ step: 10 }));
store.dispatch(setCount({ count: -100 }));
