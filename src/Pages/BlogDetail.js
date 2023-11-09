import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogData } from '../data/BlogData';
import { Banner } from '../components/Banner';

export const BlogDetail = () => {
    const { blogname, blogcategory } = useParams();
    const filteredCat = BlogData.find(el => el.url === blogcategory);
    const filteredBlog = filteredCat ? filteredCat.blogs.find(blog => blog.url === blogname) : null;
    return (
        <main className='headerheight'>
            <Banner additionalClasses={`blog-detail-banner ${filteredBlog ? '' : 'pagenotfoundbanner'}`} background={filteredBlog ? require(`../assets/images/blogs/${filteredBlog.img}`) : ''}>
                <div className="content">
                    <h1>{filteredBlog ? filteredBlog.title : 'Blog Not Found'}</h1>
                </div>
            </Banner>
            {filteredBlog &&
                <div className="blog-detail-secA">
                    <div className="container">
                        <div className="flex">
                            <div className="colA">
                                {filteredBlog && (
                                    <div className="content" dangerouslySetInnerHTML={{ __html: filteredBlog.content }}></div>
                                )}
                            </div>
                            <div className="colB">
                                <div className="card">
                                    <div className="card-md more-blogs">
                                        <h4>More Blogs</h4>
                                        <ul>
                                            {filteredCat && filteredCat.blogs.map((blog, index) => (
                                                <li key={index} className={blog.url === blogname ? 'active' : ''}>
                                                    <Link to={`/blog/${filteredCat.url}/${blog.url}`}>{blog.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-md more-category">
                                        <h4>More Blog Categories</h4>
                                        <ul>
                                            {BlogData && BlogData.map((blog, index) => (
                                                <li key={index} className={blog.url === blogcategory ? 'active' : ''}>
                                                    <Link to={`/blog/${blog.url}`} onClick={() => window.scrollTo(0, 0)}>{blog.category}({blog.blogs.length})</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
};
