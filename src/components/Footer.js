import React from 'react';
import { Link } from 'react-router-dom'
export const Footer = () =>
    <>
        <footer>
            <div className="container-fluid">
                <div className="footer-wrapper">
                    <div className="flex">
                        <div className="colA">
                            <Link to=""><img src={require('../assets/images/logo.png')} alt="hello" /></Link>
                        </div>
                        <div className="colB">
                            <p>Copyright © 2023 by KMR-AT9</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
