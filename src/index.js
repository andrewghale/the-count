import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';


export default CounterApp;

ReactDOM.render(
    <CounterApp />,
    document.querySelector('#root')
);