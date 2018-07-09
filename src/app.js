import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route exact path="/create" component={AddExpensePage} />
      <Route exact path="/edit" component={EditExpensePage} />
      <Route exact path="/help"component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
