import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPage from "./pages/ProductsDetail/DetailPage";

function App() {
  return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            {/*<Route path={'/products'} element={<ProductsFeature/>}> </Route>*/}
            <Route path={'/products/:productId'} element={<DetailPage/>}> </Route>
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
