import React from 'react';
import styles from './About.module.css'
function About() {
    return ( 
        <div className={styles.about_container}>
           <h3 className={styles.h3}>Weather App</h3>
           <p className={styles.p}>Esta es una aplicaci&oacute;n que nos permite buscar ciudades y nos muestra detalladamente el clima y otra informaci&oacute;n.</p>
            <p className={styles.p}>¡Gracias por Visitar!</p>  
        </div>
     );
}

export default About;