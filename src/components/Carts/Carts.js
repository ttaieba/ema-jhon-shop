import React from 'react';
import './Carts.css';

const Carts = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .01;
    const grandTotal = (total + shipping + tax);

    return (
        <div className="cart-style">
            <h3>Order Summary</h3>
            <p>Items ordered: {totalQuantity} </p>
            <br />
            <div className="price-style">
                <p>total: {total.toFixed(2)}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <p>GrandTotal: {grandTotal.toFixed(2)}</p>
            </div>

        </div>
    );
};

export default Carts;