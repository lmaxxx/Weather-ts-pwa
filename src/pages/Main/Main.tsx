import classes from './Main.module.scss'
import LocationForm from "../../components/LocationForm/LocationForm";
import useSearchLocation from "../../hooks/useSearchLocation";
import {useEffect} from "react";
import LocationList from "../../components/LocationList/LocationList";
import {useToast} from "@chakra-ui/react";

const Main = () => {
  const {locations, isLoading, searchLocation, error} = useSearchLocation()
  const toast = useToast()

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery")

    if(lastQuery) searchLocation(lastQuery)
  }, []);


  useEffect(() => {
    if(error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: "top-right"
      })
    }
  }, [error])

  return (
    <div className={classes.Main}>
      <LocationForm isLoading={isLoading} searchLocation={searchLocation}/>
      <LocationList locations={locations}/>
    </div>
  )
}

export default Main