import classes from './Weather.module.scss'
import {useParams} from "react-router-dom";
import useForecast from "../../hooks/useForecast";
import {useEffect} from "react";
import UnitOfTemperatureToggle from "../../components/UnitOfTemperatureToggle/UnitOfTemperatureToggle";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import {motion} from "framer-motion";
import {CircularProgress, Portal} from "@chakra-ui/react";

const variants = {
  exit: {
    x: "100%",
    transition: {
      duration: .7
    }
  },
  initial: {
    x: "100%"
  },
  animate: {
    x: 0,
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

  if(isLoading) return (
    <div className={classes.WeatherLoaderWrapper}>
      <CircularProgress size={"100px"} isIndeterminate color='green.300' />
    </div>
  )

  return (
    <motion.div
      variants={variants}
      exit={"exit"}
      initial={"initial"}
      animate={"animate"}
      className={classes.Weather}
    >
      <CurrentWeather currentForecast={forecast.current} location={forecast.location}/>
      <Portal>
        <UnitOfTemperatureToggle/>
      </Portal>
    </motion.div>
  )
}

export default Weather