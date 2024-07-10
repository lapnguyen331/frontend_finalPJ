import {memo} from 'react';
import PaymentMethod from "../../component/payment-method/payment.js"
function HomePage(){
    return (
        <div className='home-container'>
             <div>trang home</div>
             <PaymentMethod/>
        </div>
    );
}
export default memo(HomePage);