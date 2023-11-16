import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Card.module.css" // Import css modules stylesheet as styles

function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.img}>
        <NavLink to={`/city/${id}`}>
          {" "}
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width='80' height='80' alt='' />
        </NavLink>
      </div>

      <div className={styles.p1}>
        <NavLink to={`/city/${id}`}>
          <p>{Math.floor(max / 10)}°</p>
        </NavLink>
      </div>

      <div className={styles.button}>
        <button onClick={onClose} type='button'>
          ✘
        </button>
      </div>

      <div className={styles.title}>
        <NavLink to={`/city/${id}`}>
          <p className={styles.p2}>{name}</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Card
