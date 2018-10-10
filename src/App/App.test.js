import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

'movies state begins as an empty array, and is set upon calling componentDidMount'

'movies state is updated to contain an array of objects with cleaned data'
