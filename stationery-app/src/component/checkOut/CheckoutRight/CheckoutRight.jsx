import React, {useState} from "react";
import './CheckoutRightStyles.scss'
import {Button} from "@mui/material";
import productOrders from "../../../data/Product/productInCheckout";
import {formatPrices} from "../../../utils";

function CheckoutRight() {
    const initialQuantities = productOrders.map(() => 1);
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleDecrement = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(newQuantities[index] - 1, 1);
            return newQuantities;
        });
    };

    const handleIncrement = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = newQuantities[index] + 1;
            return newQuantities;
        });
    };

    const calculateTotal = () => {
        return productOrders.reduce((total, product, index) => {
            return total + (product.prices * quantities[index]);
        }, 0) + 19000;
    };

    return (
        <div>
            <div className="order_sumary">
                <section className="checkout-details">
                    <div className="checkout-details-inner">
                        <div className="checkout-lists">
                            {productOrders.map((product, index) => (
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={product.img} alt={product.name}/>
                                    </div>
                                    <div className="card-details">
                                        <div className="card-name">{product.name}</div>
                                        <div className="card-price">
                                            {formatPrices(product.prices)}
                                        </div>
                                        <div className="p_quantity">
                                            <button className="btn_decrement" onClick={() => handleDecrement(index)}>-</button>
                                            <span className="quantity_value">{quantities[index]}</span>
                                            <button className="btn_increment" onClick={() => handleIncrement(index)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="checkout-shipping">
                            <h6>Phí vận chuyển</h6>
                            <h6>19,000₫</h6>
                        </div>
                        <div className="checkout-total">
                            <h6>Tổng cộng</h6>
                            <h6>{formatPrices(calculateTotal())}</h6>
                        </div>
                        <div className="checkout-btn">
                            <Button className="btn_payment"> <span>Thanh toán </span></Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CheckoutRight;