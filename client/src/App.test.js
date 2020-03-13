import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("World cup Women is showing", () => {
  const { getByText } = render(<App />);
  getByText(/World Cup Women/i);
});


// test("World cup Wormen is showing", () => {
//   // arrange
//   const { getByText } = render(<App />); // render returns an object with a bunch of query functions
//   // act
//   const header = getByText(/World Cup Women/i);
//   // assert that the header element is being rendered
//   expect(header).toBeInTheDocument(); // toBeInTheDocument is called an assertion function
// });
