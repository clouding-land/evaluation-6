import Sidebar from "@/components/Sidebar";
import { items } from "@/config/constants";
import {AiOutlineFolder} from 'react-icons/ai'
import Link from "next/link";

export default function Projects({posts}) {
  return (
   <div>
    <ul className="service-list">
          {posts.items.map((post)  => (
            <li className="service-item" key={post.id}>
              <div className="service-content-box">
                <AiOutlineFolder/>
                <Link href={`https://github.com/clouding-land/${post.name}`}>
                <h4 className="h4 service-item-title">{post.name}</h4>
                  </Link>
                <p className="service-item-text">{post.full_name}</p>
              </div>
            </li>
          ))}
        </ul>
   </div>
  );
}
