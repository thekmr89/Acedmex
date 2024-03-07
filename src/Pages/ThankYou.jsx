import { React } from 'react';
import { Banner } from '../components/Banner';


export const ThankYou = () => {
    return (
        <main className='headerheight'>
            <Banner additionalClasses="pagenotfoundbanner">
                <div className="content">
                    <h1>Thanks For Your Query</h1>
                    <p>Your Query is Submitted. We Shall revert back soon.</p>
                </div>
            </Banner>
        </main>
    );
};
