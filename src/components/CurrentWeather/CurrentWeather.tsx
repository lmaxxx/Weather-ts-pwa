import classes from './CurrentWeather.module.scss'
import {FC, useEffect, useMemo} from 'react'
import {ICurrentForecast, IForecastLocation} from '../../types'
import {Heading, Image, Text} from "@chakra-ui/react";
import useUnitOfTemperature from "../../hooks/useUnitOfTemperature";
import Region from "../../UI/Region";
import getCurrentForecastDetails from "../../helpers/getCurrentForecastDetails";
import Ditails from "../Details/Details";
import improveImageExtensionUrl from "../../helpers/improveImageExtensionUrl";

interface PropsType {
  currentForecast: ICurrentForecast
  location: IForecastLocation
}

const CurrentWeather: FC<PropsType> = ({currentForecast, location}) => {
  const {unitOfTemperature, getUnitLetter} = useUnitOfTemperature()
  const currentForecastDetails = useMemo(() => getCurrentForecastDetails(currentForecast), [unitOfTemperature]);

  useEffect(() => {
    currentForecast.condition.icon = improveImageExtensionUrl(currentForecast.condition.icon, 128)
  }, []);

  return (
    <div className={classes.CurrentWeather}>
      <Heading
        as={"h1"}
        size={"2xl"}
        textAlign={"center"}
        mb={5}
        color={"gray.700"}
      >Current weather forecast</Heading>
      <div className={classes.CurrentWeatherWrapper}>
        <aside>
          <Heading
            as={"h3"}
            textAlign={"center"}
            color={"gray.600"}
            size={"3xl"}
            mb={2}
            lineHeight={"1.2"}
            isTruncated
          >{location.name}</Heading>
          <Region
            region={location.region}
            country={location.country}
            textAlign={"center"}
            color={"gray.500"}
            isTruncated
          />
          <Image
            src={currentForecast.condition.icon}
            alt={"Weather icon"}
            boxSize={"xs"}
            objectFit={'contain'}
          />
          <Text
            textAlign={"center"}
            color={"orange.400"}
            fontSize={"8xl"}
          >{currentForecast?.[`temp_${unitOfTemperature}`]}{getUnitLetter()}</Text>
          <Text
            textAlign={"center"}
            fontSize={"mb"}
            color={"gray.500"}
          >Feels like {currentForecast?.[`feelslike_${unitOfTemperature}`]}{getUnitLetter()}</Text>
        </aside>
        <Ditails
          details={currentForecastDetails}
          detailStyles={{
            mb: 3,
            fontSize: "2xl",
            color: "grey.600"
          }}
        />
      </div>
    </div>
  )
}

export default CurrentWeather