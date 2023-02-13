import React from "react";

const projects = () => {
  return (
    <article className="portfolio active" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>
            <li className="select-item">
              <button data-select-item>HTML, CSS & JavaScript</button>
            </li>
            <li className="select-item">
              <button data-select-item>MERN Stack</button>
            </li>
          </ul>
        </div>
        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://crytoverselatest.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="open"></ion-icon>
                </div>
                <img
                  src="./assets/images/CryptoVerse.png"
                  alt="shooZY"
                  loading="lazy"
                  className="image"
                />
              </figure>
              <h3 className="project-title">CryptoVerse</h3>
              <p className="project-category pt-03">
                <strong>CryptoVerse</strong> is a web application to view the
                latest news/prices/trends and more about cryptoCurrency built
                using, React,Redux-Toolkit, Ant Design,ChartJs.
              </p>
              <p className="project-category pt-03 flex">
                <a
                  href="https://github.com/amanmulani09/cryptoverse"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open with github
                </a>
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="https://greenui-component-liabrary.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="open"></ion-icon>
                </div>
                <img
                  src="./assets/images/greenUI.png"
                  alt="Green UI"
                  loading="lazy"
                  className="image"
                />
              </figure>
              <h3 className="project-title">Green UI Component Library</h3>
              <p className="project-category pt-03">
                HTML-5, CSS-3, Responsive-Design, JavaScript,Bootstrap4
              </p>
              <p className="project-category pt-03 flex">
                <a
                  href="https://github.com/amanmulani09/greenUI-Component-Liabrary"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open with github
                </a>
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          >
            <a
              href="ttps://github.com/amanmulani09/css-box-shadow-generator-chrome-extension"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="open"></ion-icon>
                </div>
                <img
                  src="./assets/images/project1.png"
                  alt="shadow generator"
                  loading="lazy"
                  className="image"
                />
              </figure>
              <h3 className="project-title">
                {" "}
                box shadow Generator Chrome Extension
              </h3>
              <p className="project-category pt-03">
                HTML-5, CSS-3, Responsive-Design, JavaScript, JSON
              </p>
              <p className="project-category pt-03 flex">
                <a
                  href="https://github.com/amanmulani09/css-box-shadow-generator-chrome-extension"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open with github
                </a>
              </p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default projects;
