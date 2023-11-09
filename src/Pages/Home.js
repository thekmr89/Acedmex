import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CoursesData } from "../data/CourseData";
import { useCart } from '../components/Modelscontext';

export const Home = () => {
    const { show_videomodel } = useCart();
    return (
        <main className="headerheight">
            <Banner additionalClasses="home-banner">
                <div className="content">
                    <h1>Empowering Minds, Shaping Futures</h1>
                    <p>
                        Fostering knowledge, skills, and creativity to empower individuals
                        and shape a brighter tomorrow.
                    </p>
                    <Link to="" className="explr-btn">
                        Explore Now
                    </Link>
                </div>
            </Banner>
            <div className="home-secA">
                <div className="container">
                    <div className="heading text-center">
                        <h3>Our Courses</h3>
                    </div>
                    <div className="course-demo">
                        <Splide
                            className="courses-slider"
                            options={{
                                type: "loop",
                                rewind: true,
                                gap: "20px",
                                snap: true,
                                pauseOnHover: true,
                                perPage: 3,
                                autoplay: false,
                                pagination: false,
                                arrows: true,
                                breakpoints: {
                                    767: {
                                        perPage: 1,
                                        pauseOnHover: false,
                                        arrows: true,
                                    }
                                },
                            }}
                            aria-label="Courses Slider"
                        >
                            {CoursesData &&
                                CoursesData.map((course) => {
                                    const { id, name, pic, price, desc, duration, tutorial } = course;
                                    return (
                                        <SplideSlide key={id}>
                                            <div className="item">
                                                <figure>
                                                    <img src={require(`../assets/images/home/${pic}`)} alt="img"></img>
                                                </figure>
                                                <figcaption>
                                                    <div className="sub-name">{name}</div>
                                                    <div className="desc">{desc}</div>
                                                    <div className="price-duration">
                                                        <p>{price}</p>/<p>{duration}</p>
                                                    </div>
                                                    <div className="explr-btn" onClick={() => show_videomodel(tutorial)}>
                                                        Get Demo
                                                    </div>
                                                </figcaption>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                        </Splide>
                    </div>
                </div>
            </div>
        </main>
    );
};
