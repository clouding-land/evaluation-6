import Sidebar from "@/components/Sidebar";
import items from "@/config/constants";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home({posts}) {
  return (
    <div className="container">
      <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-8" style={{borderRadius:10,padding:5,marginLeft: 20,marginTop: 20,backgroundColor:'#CCF3EE',padding:10}}>
      <h1 style={{textAlign:'center',padding:5}}>Projects</h1>
      <div className="row" style={{alignContent:'center',paddingLeft:40}}>
        <Projects posts={posts} />
        </div>
      </div>
      </div>
   </div>
  );
    
}

export const getStaticProps =async (context) => {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:clouding-land+fork:true&sort=updated&per_page=10&type=Repositories`);
  const posts = await res.json();
  return{
      props:{
          posts
      },
  };
};