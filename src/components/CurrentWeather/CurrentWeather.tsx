import classes from './CurrentWeather.module.scss'
import {FC, useMemo} from 'react'
import {ICurrentForecast, IForecastLocation} from '../../types'
import {Heading, Image, Text} from "@chakra-ui/react";
import useUnitOfTemperature from "../../hooks/useUnitOfTemperature";
import Region from "../../UI/Region";
import getCurrentForecastDetails from "../../helpers/getCurrentForecastDetails";
import Ditails from "../Details/Details";

interface PropsType {
  currentForecast: ICurrentForecast
  location: IForecastLocation
}

const CurrentWeather: FC<PropsType> = ({currentForecast, location}) => {
  const {unitOfTemperature, getUnitLetter} = useUnitOfTemperature()
  const currentForecastDetails = useMemo(() => getCurrentForecastDetails(currentForecast), [unitOfTemperature]);

  return (
    <div className={classes.CurrentWeather}>
      <Heading>{location?.name}</Heading>
      <Region region={location?.region} country={location?.country}/>
      <Image
        src={currentForecast?.condition.icon}
        alt={"Weather icon"}
      />
      <Text>{currentForecast?.[`temp_${unitOfTemperature}`]}{getUnitLetter()}</Text>
      <Text>Feels like {currentForecast?.[`feelslike_${unitOfTemperature}`]}{getUnitLetter()}</Text>
      <Ditails details={currentForecastDetails}/>
    </div>
  )
}

export default CurrentWeather