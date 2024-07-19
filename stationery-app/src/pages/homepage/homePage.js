import {memo} from 'react';
import "./homePageStyle.scss"
import PaymentMethod from "./payment-method/payment.js"
import CustomeCarousel from './carousel/carousel.js';
import Categogy from './categogy/categogy.js';
import SliderPage from "../sliderBrands/SliderPage";
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
            <SliderPage/>
             <PaymentMethod/>
        </div>
    );
}
export default memo(HomePage);