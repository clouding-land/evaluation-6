import React from "react";
import data from "../config/constants";

const blog = () => {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {data.blog.map(
            (singleblog, index) =>
              singleblog?.href && (
                <li className="blog-post-item" key={index.toString()}>
                  <a
                    href={singleblog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="blog-banner-box">
                      <img
                        src={singleblog.thumbnail}
                        alt={singleblog.title}
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <p className="blog-category">{singleblog.category}</p>
                        <span className="dot"></span>
                        <time>{singleblog.date}</time>
                      </div>
                      <h3 className="h3 blog-item-title">{singleblog.title}</h3>
                      <p className="blog-text">{singleblog.description}</p>
                    </div>
                  </a>
                </li>
              )
          )}
        </ul>
      </section>
    </article>
  );
};

export default blog;
