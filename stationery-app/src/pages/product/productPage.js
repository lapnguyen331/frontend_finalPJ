import {memo} from 'react';
import "./productPage.scss"
import Filter from '../../component/filter/filter';
import ProductList from '../../component/product-show/productList';
import data from '../../data/producttest.json'
function ProductPage(){
    const products = JSON.parse(data);
    return (
        <div className='flex-wrap'>
            <div className='filter-wrap'>
                <Filter/>
            </div>
            <div className='product-List'>
               <div className='product-container'>
                    <ProductList productList = {data}/>
               </div>

            </div>
        </div>
    );

}
export default memo(ProductPage);