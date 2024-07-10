import React from "react";
import  propTypes from 'prop-types';

import {Route, Router, Routes, useMatch} from "react-router-dom";
import DetailPage from "../../pages/ProductsDetail/DetailPage";

ProductsFeature.propTypes = {};
function ProductsFeature(props) {


    return (
        <div>
            products
            <Routes>
                <Route path={'/products/:productid'} element={<DetailPage/>}> </Route>
            </Routes>

        </div>
    );
}

export default ProductsFeature;