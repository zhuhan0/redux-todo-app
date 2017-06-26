import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions';
import todoApp from './redux/reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
