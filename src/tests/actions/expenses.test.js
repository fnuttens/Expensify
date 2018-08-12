import {
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';

const id = '123abc';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id,
  });
});

test('should setup edit expense action object', () => {
  const updates = { description: 'description' };
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates,
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent',
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {      
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});