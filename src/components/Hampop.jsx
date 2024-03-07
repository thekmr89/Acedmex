import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './Modelscontext';
import { NavData } from '../data/NavData';

export const Hampop = () => {
    const { Hammodel, hide_hammodel } = useCart();
    return (
        <div className={`model Hammodelpop ${Hammodel ? 'is-open' : ''}`}>
            <button className='close-model' onClick={() => hide_hammodel()}>
                <img src={require('../assets/icon/close.png')} alt="Close" />
            </button>
            <div className="model-body">
                <ul>
                    {NavData &&
                        NavData.map((nav, index) => {
                            const { name, url } = nav;
                            return (
                                <li key={index}><NavLink onClick={() => hide_hammodel()} to={url} activeclassname="active">{name}</NavLink></li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};