import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import toBeInTheDocument from "@testing-library/jest-dom";

const MockAdapter = require("axios-mock-adapter");

import BookDetailContainer from './BookDetailContainer';
import store from '../../store';

const renderWithProvider = (component) => {
  return {...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    )}
};


describe('BookDetailContainer', () => {
    const mock = new MockAdapter(axios);
    
    it('renders', async () => {
      const props = {
        match: {
          params: {id: 2}
        }
      };
      mock.onGet('http://localhost:8080/books/2').reply(200, {
        "name": "Acceptance test driven development with React", "id": 2
      });
  
      const {findByText} = renderWithProvider(<BookDetailContainer {...props} />);
  
      const book = await findByText('Acceptance test driven development with React');
      expect(book).toBeInTheDocument();
    })
  });