import React, { createContext, useContext, useState } from 'react'

const Modelscontext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [Hammodel, SetHammodel] = useState(false);
    const [overlay, SetOverlay] = useState(false);
    const [cartmodel, setCartmodel] = useState(false);
    const [Inquirymodel, SetInquirymodel] = useState(false);
    const [Videomodel, SetVideomodel] = useState(false);
    const [VideoSrc, SetVideoSrc] = useState([]);
    const [resetForm, setresetForm] = useState(null);

    const show_overlay = () => {
        SetOverlay(true);
    };

    const hide_overlay = () => {
        SetHammodel(false);
        setCartmodel(false);
        SetOverlay(false);
        SetInquirymodel(false);
    };

    const show_hammodel = () => {
        SetHammodel(true);
        SetOverlay(true);
    };
    const hide_hammodel = () => {
        SetHammodel(false);
        hide_overlay();
    };
    const show_cartmodel = () => {
        setCartmodel(true);
        SetOverlay(true);
    };
    const hide_cartmodel = () => {
        setCartmodel(false);
        hide_overlay();
    };
    const show_inquirymodel = () => {
        SetInquirymodel(true);
        SetOverlay(true);
    };
    const hide_inquirymodel = () => {
        SetInquirymodel(false);
        hide_overlay();
    };

    const show_videomodel = (video) => {
        const updatedVideoSrc = `${video}?autoplay=0`;
        SetVideoSrc(updatedVideoSrc);
        SetVideomodel(true);
    }
    const hide_videomodel = () => {
        SetVideomodel(false);
        SetVideoSrc([]);
    }

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    return (
        <Modelscontext.Provider value={{ cartItems, Hammodel, overlay, cartmodel, Inquirymodel, Videomodel, VideoSrc, resetForm, addToCart, removeFromCart, show_hammodel, hide_hammodel, show_overlay, hide_overlay, show_cartmodel, hide_cartmodel, show_inquirymodel, hide_inquirymodel, show_videomodel, hide_videomodel, setresetForm }}>
            {children}
        </Modelscontext.Provider>
    );
};

export const useCart = () => {
    return useContext(Modelscontext);
};
