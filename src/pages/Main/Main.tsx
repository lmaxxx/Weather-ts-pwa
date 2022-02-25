import classes from './Main.module.scss'
import LocationForm from "../../components/LocationForm/LocationForm";
import useSearchLocation from "../../hooks/useSearchLocation";
import {useEffect} from "react";

const Main = () => {
  const {locations, isLoading, searchLocation, error} = useSearchLocation()

  // useEffect(() => {
  //   searchLocation("Lviv")
  // }, [])

  if(!isLoading && locations.length) {
    console.log(locations)
  }

  // useEffect(() => {
  //
  // }, [error])

  return (
    <div className={classes.Main}>
      <LocationForm isLoading={isLoading} searchLocation={searchLocation}/>
    </div>
  )
}

export default Main