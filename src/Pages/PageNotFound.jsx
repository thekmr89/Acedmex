import { React } from 'react';
import { Banner } from '../components/Banner';


export const PageNotFound = () => {
    return (
        <main className='headerheight'>
            <Banner additionalClasses="pagenotfoundbanner">
                <div className="content">
                    <h1>Page Not Found!</h1>
                </div>
            </Banner>
        </main>
    );
};
