import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from 'react-bootstrap/Navbar';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Aperture } from 'react-feather';
import styled from 'styled-components';

const Heading = styled.span`
  vertical-align: middle;
  text-transform: uppercase;
`;

ReactDOM.render(
  <React.StrictMode>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <Aperture />{' '}
      <Heading>React Clip Path</Heading>
      </Navbar.Brand>
    </Navbar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
