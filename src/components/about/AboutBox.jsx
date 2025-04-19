import React from 'react';
import { RiCodeLine, RiFolderLine, RiGitBranchLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">

            <div className="about__box">
                <RiCodeLine className='about__icon' />
                <div>
                    <h3 className="about__title">3+</h3>
                    <span className="about__subtitle">Years Coding</span>
                </div>
            </div>

            <div className="about__box">
                <RiGitBranchLine className='about__icon' />
                <div>
                    <h3 className="about__title">10+</h3>
                    <span className="about__subtitle">GitHub Repositories</span>
                </div>
            </div>

            <div className="about__box">
                <RiFolderLine className='about__icon' />
                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Major Projects</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />
                <div>
                    <h3 className="about__title">100%</h3>
                    <span className="about__subtitle">Code Quality</span>
                </div>
            </div>

        </div>
    );
};

export default AboutBox;
