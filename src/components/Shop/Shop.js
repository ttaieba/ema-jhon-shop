import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Item from '../Item/Item';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {

                setProducts(data);
                setDisplay(data);
            });
    }, [])


    useEffect(() => {
        if (products.length) {

            const saveCart = getStoredCart()
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart)

        }
    }, [products])
    const handleAddToCart = (product) => {
        // console.log(product.name)
        const newCart = [...cart, product]
        setCart(newCart);
        // save to local storage
        addToDb(product.key);



    }
    const handleSearceh = event => {
        const serchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(serchText.toLowerCase()))
        setDisplay(matchedProduct);
        // console.log(matchedProduct.length);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearceh}
                    placeholder="  Search Product"
                />
            </div>
            <div className="shop">

                <div className="product-container">
                    <h3>Products: {products.length}</h3>
                    {
                        display.map(pd => <Item
                            key={pd.key}
                            product={pd}
                            handleAddToCart={handleAddToCart}
                        >
                        </Item>

                        )
                    }
                </div>
                <div className="cart-container">
                    <Carts cart={cart}></Carts>
                </div>
            </div >
        </>
    );

};

export default Shop;