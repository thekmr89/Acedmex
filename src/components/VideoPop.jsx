import { React } from 'react';
import { useCart } from './Modelscontext';

export const Videopop = () => {
    const { Videomodel, VideoSrc, hide_videomodel } = useCart();
    return (
        <div className={`ModelVideo ${Videomodel ? 'is-open' : ''}`}>
            <button className='close-model' onClick={() => hide_videomodel()}>
                <img src={require('../assets/icon/close.png')} alt="Close" />
            </button>
            <iframe id="iframe1" title="video" className="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen src={VideoSrc}></iframe>
        </div>
    );
};