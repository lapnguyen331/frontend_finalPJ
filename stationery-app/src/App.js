import React from "react";
import DetailPage from "./pages/ProductsDetail/DetailPage";
import ListPage from "./pages/ListProducts/ListPage";
import CartPage from "./pages/CartPage/CartPage"; // Import the CartPage
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterLayout from "./layout/masterLayout";
import RouterCustom from "./router";

function App() {
  
   
  return (
        // <BrowserRouter>
        //   <Routes>
        //     {/*<Route path={'/products'} element={<ProductsFeature/>}> </Route>*/}
        //     <Route path={'/products/:productId'} element={<DetailPage/>}> </Route>
        //     <Route path={'/products'} element={<ListPage/>}> </Route>
        //     <Route path={'/cart'} element={<CartPage/>}> </Route> {/* Add the CartPage route */}

        //   </Routes>
        // </BrowserRouter>
      <BrowserRouter>
        <RouterCustom/>
      </BrowserRouter>
  );
}

export default App;
