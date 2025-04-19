import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  
  // Remove the category filter logic
  const filterItems = () => {
    setItems(Menu); // Just return all items
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Recent Projects</h2>

      {/* Removed category filters */}
      <div className="portfolio__filters">
        <span
          className="portfolio__item portfolio__item-active"
          onClick={filterItems}
        >
          All
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.map((elem) => {
          const { id, image, title, url, repositoryUrl } = elem;

          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="portfolio__card"
              key={id}
            >
              <div className="portfolio__thumbnail">
                <img src={image} alt="" className="portfolio__img" height="267" />
                <div className="portfolio__mask"></div>
              </div>

              <h3 className="portfolio__title">{title}</h3>
              <a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
                <RiLink className="portfolio__button-icon" />
              </a>
              <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
                <RiGithubLine className="portfolio__button-icon" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
