import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import RouterCustom from './router';
import './style/style.scss'
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    root: {

    }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <RouterCustom/>
      {/* check */}
    </BrowserRouter>
  </React.StrictMode>
    // <React.StrictMode>
    //     <ThemeProvider theme={theme}>
    //         <App />
    //     </ThemeProvider>
    // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
