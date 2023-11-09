import React from 'react';
export const Banner = (props) => {
    const { additionalClasses, children: content, id, background } = props;
    const defaultClasses = 'banner';
    const combinedClasses = `${defaultClasses} ${additionalClasses || ''}`;
    return (
        <div className={combinedClasses} id={id}>
            <div className="bg" style={background ? { background: `url(${background}) no-repeat` } : {}}></div>
            <div className="banner-wrapper">
                {content}
            </div>
        </div>
    );
}