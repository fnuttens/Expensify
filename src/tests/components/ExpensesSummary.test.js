import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render 1 expense correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={1}
      expensesTotal={expenses[1].amount}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render several expenses correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={2}
      expensesTotal={114000}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
