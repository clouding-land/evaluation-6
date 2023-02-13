import Projects from "@/components/Projects";
import React from "react";

const projects = ({posts}) => {
  return (
    <>
    <div style={{backgroundColor:'#CCF3EE',margin:20,borderRadius:10}}>
        <h1 style={{textAlign:'center',padding:5}}>Projects</h1>
    <div className="row" style={{alignContent:'center',paddingLeft:100}}>
        <Projects posts={posts} />
        </div>
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