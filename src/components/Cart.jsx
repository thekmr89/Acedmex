import React, { useState, useEffect } from 'react';
import { useCart } from './Modelscontext';

export const Cartpop = () => {
    const { cartItems, removeFromCart, cartmodel, hide_cartmodel } = useCart();
    const [cartValue, setCartValue] = useState([]);
    const [Showdesc, setShowdesc] = useState(null);

    const handleLiClick = (index) => {
        if (Showdesc === index) {
            setShowdesc(null);
        } else {
            setShowdesc(index);
        }
    };

    useEffect(() => {
        setCartValue(cartItems);
    }, [cartItems]);

    function handleRemoveFromCart(itemId, e) {
        e.stopPropagation();
        removeFromCart(itemId);
        setCartValue((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== itemId);
            return updatedCart;
        });
    }



    return (
        <div className={`model Cartpop ${cartmodel ? 'is-open' : ''}`}>
            <button className='close-model' onClick={() => hide_cartmodel()}>
                <img src={require('../assets/icon/close.png')} alt='Close' />
            </button>
            <div className='model-body'>
                <div className="heading">
                    <h3>Cart</h3>
                </div>
                <ul className='cart-menu'>
                    {cartValue.length > 0 ? (
                        cartValue.map((item) => (
                            <li key={item.id} onClick={() => handleLiClick(item.id)} className={`${Showdesc === item.id ? 'active' : ''}`}>
                                <img src={require(`../assets/images/home/${item.pic}`)} alt='img' />
                                <div className="pro-info">
                                    <div className="pro-name">{item.name}</div>
                                    <div className="pro-dura-tim">{item.price}/{item.duration}</div>
                                </div>
                                <button className='remv' onClick={(e) => handleRemoveFromCart(item.id, e)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                                <p className="desc-cour">{item.desc}</p>
                            </li>
                        ))
                    ) : (
                        <li className="empty-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm0-80 321-321-321-321-321 321 321 321Zm-40-281h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0-160Z" /></svg>
                            <span>Nothing In Cart!</span>
                        </li>
                    )}
                </ul>

            </div>
        </div>
    );
};