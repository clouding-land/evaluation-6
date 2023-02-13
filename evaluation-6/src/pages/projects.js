import Projects from "@/components/Projects";
import React from "react";

const projects = ({posts}) => {
  return (
    <>
    <div className="projects">
        <Projects posts={posts}/>
    </div>
    </>
  );
};

export default projects;

export const getStaticProps =async (context) => {
    const res = await fetch(`https://api.github.com/search/repositories?q=user:clouding-land+fork:true&sort=updated&per_page=10&type=Repositories`);
    const posts = await res.json();
    return{
        props:{
            posts
        },
    };
  };