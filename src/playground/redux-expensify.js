import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: '0000-0000-0000-0000',
    description: 'January rent',
    note: 'This was the final payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or amount
    startDate: undefined,
    endDate: undefined
  }
};
