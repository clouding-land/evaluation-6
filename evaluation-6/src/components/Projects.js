import Sidebar from "@/components/Sidebar";
import styles from  "../styles/projects.module.css";
import { items } from "@/config/constants";
import {AiOutlineFolder} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineFork} from 'react-icons/ai'

import Link from "next/link";

export default function Projects({posts}) {
  return (
    <ul className="row" style={{listStyleType:'none',paddingLeft:40}}>
          {posts.items.map((post)  => (
            <li className="col-3" key={post.id} style={{backgroundColor:'#BDF2D5',borderRadius:10,margin:20,width:350}}>
              <div className="service-content-box">
                <Link href={`https://github.com/clouding-land/${post.name}`}><h4 className={styles.itemName}><AiOutlineFolder/>{post.name}</h4></Link>
                <p className={styles.itemText}>{post.full_name}</p>
                <div className="row">
                <p className="col"><AiOutlineStar/> 0</p>
                <p className="col"><AiOutlineFork/> 0</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
  );
}
