import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Suraj Kumar Sikhar" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi, I'm <strong>Suraj Kumar Sikhar</strong> — a passionate Full Stack Web Developer with a strong command over modern tech stacks. I love building scalable and user-centric web applications using technologies like <strong>React, Node.js, Prisma, and PostgreSQL</strong>. <br /><br />
                            I enjoy turning ideas into real-world solutions and continuously learning new tools and frameworks to stay ahead in the dev game. Recently, I've been working on real-time apps and data-driven platforms.
                            <br /><br />
                            Here are some technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React & Next.js</li>
                            <li>Node.js & Express</li>
                            <li>MongoDB & PostgreSQL</li>
                            <li>Prisma ORM</li>
                            <li>Tailwind CSS</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
}

export default About;
