import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import projects from "@/pages/projects";
import experience from "@/pages/experience";
import {CgProfile} from 'react-icons/cg'

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark
    py-3 shadow-sm">
      <div className="container-fluid">
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item">
          <Link  style={{color:'white'}} className="nav-link" href="/"><CgProfile/>  Samsitha Banu</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white'}} className="nav-link" href="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:'white'}} className="nav-link" href="/experience">Experience</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Nav;
