import style from "./myprojects.module.css";
import Project from "./Project/Project";
import { useState } from "react";

// svg
import logoGithub from "../../assets/Github.svg";
import tool from "../../assets/work-svgrepo-com.svg";
import biblioteca from "../../assets/biblioteca_juegos.jpg";
import rickyMorty from "../../assets/rickMorty.png";
import EngPartner from "../../assets/engPartner.png";


const MyProjects = () => {
  const [myProject, setMyProject] = useState([
    {
      name: "EngPartner",
      img: EngPartner,
      description: `EngPartner es una red social que te conecta con personas de todo el mundo
        con idiomas prácticos. Elija dos idiomas de su elección y experimente conversaciones
        traducidas en tiempo real. Nuestra plataforma elimina las barreras del idioma,
        permitiéndote sumergirte en nuevas culturas. Únase a nuestra comunidad global y forje
        nuevas amistades a través del poder del lenguaje.`,
      github: "https://github.com/IgnacioBritos/EngPartnerV2",
      logo: logoGithub,
      link: 'https://engpartner-aa0ce.web.app/',
    },
    {
      name: "Rick and Morty",
      img: rickyMorty,
      description: `Explora el fascinante mundo de 'Rick y Morty' con nuestra API.
        Descubre información detallada sobre tus personajes favoritos, utiliza la 
        funcionalidad de búsqueda para encontrar nuevos, y personaliza tu experiencia
        marcando personajes como favoritos. Únete a nuestra comunidad en crecimiento,
         donde puedes explorar, compartir y contribuir a la pasión por 'Rick y Morty' `,
      github: "https://github.com/IgnacioBritos/-Rick-and-Morty",
      logo: logoGithub,
    },
    {
      name: "Biblioteca De Juegos",
      img: biblioteca,
      description: `En esta plataforma, la exploración y filtrado de juegos se vuelve accesible gracias a la integración 
      de una API.mientras que la posibilidad de agregar nuevos títulos enriquece continuamente nuestra base de datos. 
      La interfaz intuitiva crea una experiencia dinámica para descubrir y compartir juegos.`,
      github: "https://github.com/IgnacioBritos/API-Games",
      logo: logoGithub,
    },
  ]);
  return (
    <section className={style.containInfoProject}>
      <div className={style.infoProjects}>
        <h2>PROYECTOS<img src={tool} className={style.infoProjectsImg} alt="projects" /></h2>
        
      </div>
      {myProject.map((project) => (
        <Project project={project} key={project.na} />
      ))}
    </section>
  );
};
export default MyProjects;
