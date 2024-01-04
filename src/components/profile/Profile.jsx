import axios from "axios";
import { useState, useEffect } from "react";
import styles from './Profile.module.css'

// svg
import logoGithub from '../../assets/Github.svg'
import LinkedIn from '../../assets/linkedin.svg'
import pdf from '../../assets/pdfv0.1.svg'
const Profile = () => {
  const [dataProfile, setDataProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios("https://api.github.com/users/IgnacioBritos");
      setDataProfile(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <article className={styles.Profile}>
     <div>
        <img  className={styles.imgProfile}
        title={dataProfile.name}
        src={dataProfile.avatar_url}
            alt={`Avatar de ${dataProfile.name || "Usuario"}`}
        />
     </div>
      <div className={styles.infoProfile}>
        <span>Fullstack dev_</span>
        <h2>Ignacio (Gaspar) Britos</h2>
        <p>No hay barreras si hay tiempo</p>
      </div>
      <div className={styles.contactProfile}>
    <a href="https://github.com/IgnacioBritos" target="_blank"><img src={logoGithub} alt="Github" className={styles.icon} /></a>
    <a href="https://www.linkedin.com/in/ignacio-britos-053653232/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className={styles.iconLinkedIn} /></a>
    <a href="file:///C:/Users/GASPAR/Desktop/CV-Gaspar.pdf" target="_blank"><img src={pdf} alt="CVU" className={styles.iconCV} /></a>
      </div>
    </article>
  );
};

export default Profile;
