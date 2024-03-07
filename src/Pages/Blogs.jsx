import React from 'react';
import { Link } from 'react-router-dom';
import { BlogData } from '../data/BlogData';
import { Banner } from '../components/Banner';
export const Blogs = () => {
    return (

        <main className='headerheight'>
            <Banner additionalClasses="blog-listing-banner">
                <div className="content">
                    <h1>Blogs</h1>
                </div>
            </Banner>
            <div className="blog-listing-secA">
                <div className="container">
                    <div className="bottom-nav-content">
                        <div className="grid">
                            {BlogData && BlogData.map((blog, index) => (
                                <div className="col" key={index}>
                                    <Link to={blog.url} className='col-wrap' onClick={() => window.scrollTo(0, 0)}>
                                        <figure>
                                            <img src={require(`../assets/images/blogs/${blog.categoryimg}`)} alt="" />
                                        </figure>
                                        <figcaption>
                                            <div className="title">{blog.category}</div>
                                        </figcaption>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

