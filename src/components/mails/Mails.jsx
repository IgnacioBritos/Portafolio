import React from "react";
import styles from "./Mails.module.css"; // Asegúrate de importar tus estilos
import { useState } from "react";
const Mails = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Aquí puedes realizar cualquier lógica adicional antes de enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <article className={styles.containForm}>
      <div className={styles.containTitle}></div>
      <h2>CONTACTARME</h2>
      <p className={styles.p}>No dudes en hablarme</p>
      <div className={styles.centerForm}>
        <div className={styles.form}>
          <form
          target="_blank"
            action="https://formsubmit.co/6baedeeaa4c3512deb2b547b39a60fc8 "
            method="POST"
          >
            <div className={styles.formRow}>
              <label>Gmail</label>
              <input
              type="email" name="email"
                autoComplete="off"
              />
              <label>Title</label>
              <input
                type="title"
                name="title"
                autoComplete="off"
              />
              <br />
              <button
              onClick={handleSubmit}
                type="submit"
              >
                Enviar
              </button>
            </div>

            <div className={styles.formRow}>
              <label>Message</label>
              <textarea
                name="message"
                autoComplete="off"
                rows="4"
              ></textarea>
            </div>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="hidden" name="_template" value="table"></input>
      <input type="hidden" name="_next" value=""></input>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Mails;
