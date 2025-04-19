import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive Design",
        description:
            "Ensuring that your website or app adapts to all screen sizes for a seamless user experience.",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Building modern, high-performance websites with best practices for both functionality and aesthetics.",
    },
    {
        id: 3,
        image: Image3,
        title: "Full Stack Development",
        description:
            "Creating both the frontend and backend of applications with a focus on smooth functionality, user experience, and scalability.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
