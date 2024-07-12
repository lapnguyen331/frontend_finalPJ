import {memo} from 'react';
import "./productPage.scss"
import Filter from '../../component/filter/filter';
import ProductList from '../../component/product-show/productList';
import Product from '../../component/product-show/product';
function ProductPage(){
    // const data = JSON.parse("../../")
    return (
        <div className='flex-wrap'>
            <div className='filter-wrap'>
                <Filter/>
            </div>
            <div className='product-List'>
               <div className='product-container'>
               <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
               </div>

            </div>
        </div>
    );

}
export default memo(ProductPage);