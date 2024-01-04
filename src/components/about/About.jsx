import styles from "./About.module.css";

const About = () => {
  return (
    <article className={styles.About}>
      <h2>SOBRE MI</h2>
      <div className={styles.infoAbout}>
        <p>
          Desarrollador web apasionado con habilidades en HTML, CSS y React. Me
          encanta el diseño y resolver problemas creativos. Busco desafíos
          inspiradores para crecer y contribuir al mundo tech. <b>¡Construyamos algo genial juntos!.. </b> 
          🚀✨🎨
        </p>
      </div>
    </article>
  );
};
export default About;
