import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogData } from '../data/BlogData';
import { Banner } from '../components/Banner';

export const BlogCategory = () => {
    const { blogcategory } = useParams();
    const filteredCat = BlogData.find(el => el.url === blogcategory);

    return (
        <main className='headerheight'>
            <Banner additionalClasses={`blog-category-banner ${filteredCat ? '' : 'pagenotfoundbanner'}`}>
                <div className="content">
                    <h1>{filteredCat ? filteredCat.category : 'Blog Category Not Found'}</h1>
                </div>
            </Banner>
            {filteredCat &&
                <div className="blog-listing-secA blog-Category-secA">
                    <div className="container">
                        <div className="bottom-nav-content">
                            <div className="grid">
                                {filteredCat.blogs.map((blog, index) => (
                                    <div className="col" key={index}>
                                        <Link to={blog.url} className='col-wrap' onClick={() => window.scrollTo(0, 0)}>
                                            <figure>
                                                <img src={require(`../assets/images/blogs/${blog.img}`)} alt="" />
                                            </figure>
                                            <figcaption>
                                                <div className="title">{blog.title}</div>
                                            </figcaption>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
};
