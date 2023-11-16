import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css'

function Footer() {
    return ( 
        <footer className={styles.Footer}>
            <Link to='/about'><span>About</span></Link>
        </footer>
     );
}

export default Footer;