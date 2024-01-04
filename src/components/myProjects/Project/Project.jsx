// Project.js

import linkicon from "../../../assets/link.svg";
import styles from "./Project.module.css";

const Project = (props) => {
  const { name, description, github, logo, img,link} = props.project;

  return (
    <article className={styles.articleProjects}>
      <div>
        <img className={styles.img} src={img} alt="" />
      </div>
      <div className={styles.articleInfo}>
        <h3>{name}</h3>
        <p>
          {description}
        </p>
        <div className={styles.icons}>
        {link ? <a href={link} className={styles.icon}target="_blank"><img src={linkicon} alt="Github" /></a>:'' }
        <a href={github} className={styles.icon}target="_blank"><img src={logo} alt="Github" /></a>

        </div>
      </div>
    </article>
  );
};

export default Project;
