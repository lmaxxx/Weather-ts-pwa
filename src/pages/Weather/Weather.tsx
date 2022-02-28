import classes from './Weather.module.scss'
import {useParams} from "react-router-dom";
import useForecast from "../../hooks/useForecast";
import {useEffect} from "react";
import UnitOfTemperatureToggle from "../../components/UnitOfTemperatureToggle/UnitOfTemperatureToggle";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import {motion} from "framer-motion";

const variants = {
  exit: {
    x: "100%",
    transition: {
      duration: .7
    }
  }
}

const Weather = () => {
  const {city} = useParams()
  const {isLoading, getForecast, forecast} = useForecast()

  useEffect(() => {
    getForecast(city)
  }, [])

  if(isLoading) return <>loading</>

  return (
    <motion.div variants={variants} exit={"exit"} className={classes.Weather}>
      <CurrentWeather currentForecast={forecast.current} location={forecast.location}/>
      <UnitOfTemperatureToggle/>
    </motion.div>
  )
}

export default Weather