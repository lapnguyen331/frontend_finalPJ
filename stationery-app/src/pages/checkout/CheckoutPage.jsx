import {memo} from "react";
import CheckoutInfo from "../../component/checkOut/CheckoutInfo/CheckoutInfo";
import './CheckoutPageStyles.scss'
function CheckoutPage() {
    return (

        <div className="checkOut_container">
            <div className="checkOut_left">
<CheckoutInfo/>
            </div>

            <div className="checkOut_right">

            </div>

        </div>
    );
}

export default memo(CheckoutPage);