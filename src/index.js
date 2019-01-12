import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterContainer from './containers/CounterContainer'
import CounterReducer from './reducers/reducer';
import './index.css';




const store = createStore(CounterReducer);

const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

render(<App />, document.getElementById('root'));
