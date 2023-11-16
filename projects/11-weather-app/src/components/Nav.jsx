import SearchBar from './SearchBar';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom'

function Nav({onSearch}) {
    return ( 
        <div className={styles.Nav_container}>
            <NavLink 
            to={'/'}
            className={styles.Nav_container_logo}
            >
            <h1 className={styles.logo}>Weather
            </h1>
            </NavLink> 
            <div 
            className={styles.Nav_container_search}>
            <SearchBar
            onSearch={onSearch}/>
            </div>

        </div>
    );
}

export default Nav;