import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className="navbar-link"
         
            onClick={() => router.push("/")}
          >
            About
          </button>
        </li>
        <li className="navbar-item ">
          <button
            className="navbar-link"
            
            onClick={() => router.push("/resume")}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item ">
          <button
            className="navbar-link"
            
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </li>
        <li className="navbar-item ">
          <button
            className="navbar-link"
           
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
