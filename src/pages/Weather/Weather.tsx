import classes from './Weather.module.scss'
import {useParams} from "react-router-dom";
import useForecast from "../../hooks/useForecast";
import {useEffect} from "react";
import UnitOfTemperatureToggle from "../../components/UnitOfTemperatureToggle/UnitOfTemperatureToggle";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

const Weather = () => {
  const {city} = useParams()
  const {isLoading, getForecast, forecast} = useForecast()

  useEffect(() => {
    getForecast(city)
  }, [])

  if(isLoading) return <>loading</>

  return (
    <div className={classes.Weather}>
      <CurrentWeather currentForecast={forecast.current} location={forecast.location}/>
      <UnitOfTemperatureToggle/>
    </div>
  )
}

export default Weather