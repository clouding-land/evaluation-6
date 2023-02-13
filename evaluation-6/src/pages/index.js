import items from "@/config/constants";

export default function Home({posts}) {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="service">
        <ul className="service-list">
          {posts.items.map((post)  => (
            <li className="service-item" key={post.id}>
              <div className="service-content-box">
              <i class="fa-regular fa-folder"></i>
                <h4 className="h4 service-item-title">{post.name}</h4>
                <p className="service-item-text">{post.full_name}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export const getStaticProps =async (context) => {
  const res = await fetch('https://api.github.com/search/repositories?q=user:clouding-land+fork:true&sort=updated&per_page=10&type=Repositories');
  const posts = await res.json();
  return{
      props:{
          posts
      },
  };
};