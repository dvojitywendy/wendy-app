import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders wrapper without crashing', () => {
  const div = document.createElement('div');
  const wrapper = ReactDOM.render(<App />, div);
   const welcome = <h2>Welcome to React</h2>;
   ReactDOM.render(wrapper, welcome);
     expect(wrapper.contains(welcome)).toBe(true);
  // expect(wrapper.contains(welcome)).toEqual(true);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});

it('renders Wendy message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Wendy')).toBeInTheDocument();
});