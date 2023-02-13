import React from "react";
import styles from  "../styles/sidebar.module.css";
import Link from "next/link";
import data from "@/config/constants";
import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoIosMail,
  IoMdLocate,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

function Sidebar() {
  return (
    <div className={styles.col}>
        <div className="row-2">
        <div className={styles.sidebar}>
        <img src="./assets/images/profile.jpeg" alt="Samsitha Banu" style={{width:80,height:70,borderRadius:50}} />
        <h4>{data.personal.name}</h4>
        <Link href="https://github.com/clouding-land">@Clouding-land</Link>
        <ul styles ={styles.ul}>
                {data.personal.desig.map((desigs,index) =>(
                    <li key={index.toString()} className={styles.list}>{desigs} | </li>
                ))}
        </ul>
        <div className='buttons row'>
            <div className="col-4">
                <Link href={data.personal.resume} className="btn btn-outline-dark" style={{marginLeft:50}}>Resume</Link>
            </div>
            <div className="col-4">
                <Link href="https://github.com/clouding-land" className="btn btn-outline-dark" style={{marginLeft:50}}>Follow</Link>
            </div>
            </div>
        </div>
        </div>
        <div className='buttons'>
        
     </div>

    <div className="row-3">
        <div className={styles.sidebar}>
                <ul className={styles.ul}>
                {data.personal.knowledge.map((desigs,index) =>(
                    <li key={index.toString()} className={styles.list1}>{desigs}</li>
                ))}
                </ul>
        </div>
    </div>
    <div className="row-3">
        <div className={styles.sidebar}>
                <ul>
                {data.experience.map((desigs) =>(
                    <li key={desigs.id} className={styles.list2}>
                        <h6>{desigs.name}</h6>
                        <p>{desigs.time}</p>
                    </li>
                ))}
                </ul>
        </div>
    </div>
    </div>
    
  );
}

export default Sidebar;
