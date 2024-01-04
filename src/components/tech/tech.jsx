import styles from "./Tech.module.css";
import { useState } from "react";

import JavaScript from "../../assets/tech/js.svg";
import html from "../../assets/tech/html-5.svg";
import css from "../../assets/tech/css-3.svg";
import bootstrap from "../../assets/tech/bootstrap-fill-svgrepo-com.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import postgresql from "../../assets/tech/postgresql.svg";
import react from "../../assets/tech/react.svg";
import redux from "../../assets/tech/redux.svg";
import firebase from "../../assets/tech/firebase.svg";

const Tech = () => {
  const [iconTech, setIconTech] = useState([
    { icon: JavaScript, name: "JavaScript" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    {icon:bootstrap,name:'Bootstrap'},
    {icon:nodejs, name:'Node.js'},
    {icon:postgresql,name:'PostgreSQL'},
    {icon:react,name:'React'},
    {icon:redux,name:'Redux'},
    {icon:firebase,name:'Firebase'},
  ]);
  return (
    <section className={styles.containInfoTech}>
      <h2>Mis Habilidades</h2>
      <div className={styles.containIcons}>
        {iconTech.map((icon) => {
          return (
            <div className={styles.divIcon}>
              <img src={icon.icon} alt={icon.name} className={styles.icon} />
              <p className={styles.iconP}>{icon.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;
