import React from 'react';
import { Link } from 'react-router-dom';

export const CourseItem = ({ course }) => {
    const { id, name, pic, price, desc, duration } = course;
    return (
        <div className="item" key={id}>
            <figure>
                <img src={require(`../assets/images/home/${pic}`)} alt="img" />
            </figure>
            <figcaption>
                <div className="sub-name">{name}</div>
                <div className="desc">{desc}</div>
                <div className="price-duration">
                    <p>{price}</p>/<p>{duration}</p>
                </div>
                <Link to="" className="explr-btn">
                    Explore Now
                </Link>
            </figcaption>
        </div>
    );
};
