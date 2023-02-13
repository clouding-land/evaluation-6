import Sidebar from "@/components/Sidebar";
import items from "@/config/constants";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home({posts}) {
  return (
   <div className="row">
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-8">
      <h1>Projects</h1>
        <Projects posts={posts} />
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