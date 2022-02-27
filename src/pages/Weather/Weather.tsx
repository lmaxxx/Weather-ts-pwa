import classes from './Weather.module.scss'
import {useParams} from "react-router-dom";
import useForecast from "../../hooks/useForecast";
import {useEffect} from "react";

const Weather = () => {
  const {city} = useParams()
  const {error, isLoading, forecast, getForecast} = useForecast()

  useEffect(() => {
    getForecast(city)
  }, [])

  if(isLoading) return <>loading</>

  return (
    <div className={classes.Weather}>
      {city}
      <img src={forecast?.current?.condition.icon} alt=""/>
    </div>
  )
}

export default Weather