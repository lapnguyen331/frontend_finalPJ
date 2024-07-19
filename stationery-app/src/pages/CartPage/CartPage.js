import React from "react";
import './cartPageStyle.scss';

function CartPage() {
    // Dummy cart items, replace this with your state management or API call
    const cartItems = [
        { id: 1, name: "Product 1", price: 100, quantity: 2 },
        { id: 2, name: "Product 2", price: 200, quantity: 1 },
    ];

    return (
        <div className="cart_main">
            <h2>Your Shopping Cart</h2>
            <div className="cart_container">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart_item">
                        <div className="item_details">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="item_controls">
                            {/* Add controls for increasing/decreasing quantity, removing item */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart_total">
                <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
            </div>
        </div>
    );
}

export default CartPage;
