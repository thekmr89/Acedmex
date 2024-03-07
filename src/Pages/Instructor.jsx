import React, { useState, useRef, useEffect } from 'react';
import { Banner } from '../components/Banner';
import { InstructorData } from '../data/InstructorsData';

export const Instructor = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef(Array(InstructorData.length));
    const headerHeight = 74;
    const handleTabClick = (index) => {
        setActiveTab(index);
        if (sectionRefs.current[index]) {
            const section = sectionRefs.current[index];
            const offset = section.offsetTop - headerHeight;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };
    const isSectionInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    };

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((section, index) => {
                if (isSectionInViewport(section)) {
                    setActiveTab(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className='headerheight'>
            <div class="instructorSecA">
                <div className="go-to-tab">
                    <ul>
                        <li
                            key={0}
                            className={`go-to-btn ${0 === activeTab ? 'active on' : 0 < activeTab ? 'on' : ''}`}
                            onClick={() => handleTabClick(0)}
                        >
                            <div className="dot"></div>
                            <div className="tooltip-title">Meet Our Instructors</div>
                        </li>
                        {InstructorData.map((teacher, index) => (
                            <li
                                key={index}
                                className={`go-to-btn ${index + 1 === activeTab ? 'active on' : index + 1 < activeTab ? 'on' : ''}`}
                                onClick={() => handleTabClick(index + 1)}
                            >
                                <div className="dot"></div>
                                <div className="tooltip-title">{teacher.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="go-to-section">
                    <section className='banner-section' ref={(el) => (sectionRefs.current[0] = el)}>
                        <Banner additionalClasses="instructor-banner">
                            <div className="content">
                                <h1>Meet Our Instructors</h1>
                                <p>At AcedMax, we take pride in our dedicated team of instructors who are committed to helping you achieve your academic goals. Our instructors are experts in their respective fields and bring a wealth of knowledge and experience to the virtual classroom. Get to know them below:</p>
                            </div>
                        </Banner>
                    </section>
                    {InstructorData &&
                        InstructorData.map((teacher, i) => {
                            const { name, subject, img, content } = teacher;
                            return (
                                <section ref={(el) => (sectionRefs.current[i + 1] = el)} key={i}>
                                    <div className="container">
                                        <div className="flex">
                                            <div className="colA">
                                                <figure><img src={require(`../assets/images/teachers/${img}`)} alt="" /></figure>
                                            </div>
                                            <div className="colB">
                                                <div className="instru-wrap">
                                                    <h4 className='inst-name'>{name}</h4>
                                                    <p className='inst-Subj'>Subject: {subject}</p>
                                                    <div className="content-nstru">
                                                        {Array.isArray(content) ? (
                                                            content.map((paragraph) => (
                                                                <p>{paragraph}</p>
                                                            ))
                                                        ) : (
                                                            <p>{content}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                </div>
            </div>
        </main>
    );

};

