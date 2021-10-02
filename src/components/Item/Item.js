import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Item.css'

const Item = (props) => {
    // console.log(props);
    const { name, img, price, seller, stock, star } = props.product;
    // const { name, img, price, seller, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product-layout">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-title">{name}</h3>
                <p>
                    <small>By: {seller}</small>
                </p>

                <h4>Price:$ {price}</h4>

                <p>only {stock} left in stock - order soon</p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">{element} Add to cart</button>
            </div>

        </div >
    );
};

export default Item;