import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
// import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <SpeechProvider appId="f9017c8f-12de-457f-b986-7a4e1cde0dac" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  // </React.StrictMode>
);

