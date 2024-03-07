import { React, useState } from 'react';
import { Banner } from '../components/Banner';
import { CoursesData } from '../data/CourseData';
import { useCart } from '../components/Modelscontext';

export const Pricing = () => {
    const { cartItems, addToCart, show_cartmodel, show_videomodel } = useCart();
    const [message, setMessage] = useState('');

    function handleAddToCart(course) {
        if (!cartItems.some((item) => item.id === course.id)) {
            addToCart(course);
            show_cartmodel();
            setMessage('');
        } else {
            console.log('Course is already in the cart.');
            setMessage('Course is already in the cart.');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }
    }



    return (
        <main className='headerheight'>
            {message && <div className="message-ad-cr">{message}</div>}
            <Banner additionalClasses='pricing-banner'>
                <div className='content'>
                    <h1>Pricing</h1>
                    <p>Cultivating wisdom, expertise, and imagination to empower individuals and mold a brighter future.</p>
                </div>
            </Banner>
            <div className='pricing-secA'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h3>Courses Detail</h3>
                    </div>
                    <div className='courses-wrap'>
                        <div className='grid'>
                            {CoursesData &&
                                CoursesData.map((course) => {
                                    const { id, name, pic, price, desc, duration, tutorial } = course;
                                    return (
                                        <div className='item' data-key={id} key={id}>
                                            <figure onClick={() => show_videomodel(tutorial)}>
                                                <img src={require(`../assets/images/home/${pic}`)} alt='img' />
                                                <div className="video-btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
                                                </div>
                                            </figure>
                                            <figcaption>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Course</th>
                                                            <th>Price</th>
                                                            <th>Duration</th>
                                                        </tr>
                                                        <tr>
                                                            <td>{name}</td>
                                                            <td>{price}</td>
                                                            <td>{duration}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className='desc'>
                                                    <p>{desc}</p>
                                                </div>
                                                <button
                                                    name='Add to cart'
                                                    className='explr-btn'
                                                    onClick={() => handleAddToCart(course)}>
                                                    Add to Cart
                                                </button>
                                            </figcaption>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
