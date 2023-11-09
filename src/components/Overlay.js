import React, { useEffect } from 'react';
import { useCart } from './Modelscontext';

const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden';
};

const unlockBodyScroll = () => {
    document.body.style.overflow = 'auto';
};

export const Overlay = () => {
    const { overlay, hide_overlay } = useCart();

    useEffect(() => {
        if (overlay) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }
    }, [overlay]);

    return (
        <div className={`overlay ${overlay ? 'is-open' : ''}`} onClick={() => { hide_overlay() }}>
        </div>
    );
};
