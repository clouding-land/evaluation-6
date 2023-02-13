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
    <div className="col">
        <div className="row">
        <img src="./assets/images/profile.jpeg" alt="Samsitha Banu" style={{width:80,height:70,borderRadius:50}} />
        <h3>{data.personal.name}</h3>
        <Link href="https://github.com/clouding-land">@Clouding-land</Link>
        <ul>
                {data.personal.desig.map((desigs) =>(
                    <li>{desigs} |</li>
                ))}
        </ul>
        <div className="row">
            <div className="col-2">
                <Link href={data.personal.resume}>Resume</Link>
            </div>
            <div className="col-2">
                <Link href="https://github.com/clouding-land">Follow</Link>
            </div>
        </div>
        </div>

    <div className="row-2">
        <div className={styles.sidebar}>
                <ul>
                {data.personal.knowledge.map((desigs) =>(
                    <li>{desigs}</li>
                ))}
                </ul>
        </div>
    </div>
    <div className="row-2">
        <div className={styles.sidebar}>
                <ul>
                {data.experience.map((desigs) =>(
                    <li>
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
