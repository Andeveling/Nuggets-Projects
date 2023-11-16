import { useNavigate, useParams } from "react-router-dom"
import { BsFillEmojiWinkFill } from "react-icons/bs"
import styles from "./City.module.css"

function City({ cities }) {
  const params = useParams()
  const navigate = useNavigate()

  let city = onFilter(cities)

  function onFilter(cities) {
    let city = cities.filter((c) => c.id === parseInt(params.cityId))
    if (city.length > 0) {
      return city[0]
    } else {
      return
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={() => navigate(-1)} type='button'>
          Back
        </button>
      </div>
      <div className={styles.img}>
        <img src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"} width='100' height='100' alt='' />
        <h2 className={styles.minmax}>{city.weather}</h2>
      </div>

      <div className={styles.name}>
        <h2 className={styles.title}>{city.name}</h2>
        <span>City</span>
      </div>

      <div className={styles.minmax}>
        <h2>{Math.round(city.max / 10)}°</h2>
        <span>max</span>
      </div>

      <div className={styles.temp}>
        <h2>{Math.round(city.temp / 10)}°</h2>
        <span>temp</span>
      </div>

      <div className={styles.minmax}>
        <h2>{Math.round(city.min / 10)}°</h2>
        <span>min</span>
      </div>

      <div className={styles.wind}>
        <h2>{city.wind} k/h</h2>
        <span>wind speed</span>
      </div>
    </div>
  )
}

export default City
