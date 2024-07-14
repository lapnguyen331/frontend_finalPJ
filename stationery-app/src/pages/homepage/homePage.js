import {memo} from 'react';
import "./homePageStyle.scss"
import PaymentMethod from "./payment-method/payment.js"
import CustomeCarousel from './carousel/carousel.js';
import Categogy from './categogy/categogy.js';
import ProductList from '../../component/product-show/productList.js';
function HomePage(){
    return (
        <div className='home-container'>
             <div className='flex-wrap'>
                <Categogy/>
                <CustomeCarousel/>       
             </div>
             <div className='product-wrap'>
                {/* // <ProductList /> */}
             </div>
             {/* <PaymentMethod/> */}
        </div>
    );
}
export default memo(HomePage);