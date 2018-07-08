import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route
        path="/"
        exact={true}
        component={ExpenseDashboardPage} />
      <Route
        path="/create"
        exact={true}
        component={AddExpensePage} />
      <Route
        path="/edit"
        exact={true}
        component={EditExpensePage} />
      <Route
        path="/help"
        exact={true}
        component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
