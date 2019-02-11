import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const formatSummary = (count, total) => {
  const pluralExpense = count > 1 ? 'expenses' : 'expense';
  const totalAmount = numeral(total / 100).format('$0,0.00');
  return `Viewing ${count} ${pluralExpense} totalling ${totalAmount}`;
};

export const ExpensesSummary = (props) => (
  <div>
    <p>{formatSummary(props.expenseCount, props.expensesTotal)}</p>
  </div>
);

const mapStateToProps = (state) => ({
  expenseCount: state.expenses.length,
  expensesTotal: selectExpensesTotal(selectVisibleExpenses(state.expenses, state.filters)),
});

export default connect(mapStateToProps)(ExpensesSummary);
