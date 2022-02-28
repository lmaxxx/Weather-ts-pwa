import classes from './Main.module.scss'
import LocationForm from "../../components/LocationForm/LocationForm";
import useSearchLocation from "../../hooks/useSearchLocation";
import {useEffect} from "react";
import LocationList from "../../components/LocationList/LocationList";
import {useToast} from "@chakra-ui/react";
import {motion} from "framer-motion";

const variants = {
  exit: {
    x: "-100%",
    transition: {
      duration: .7
    }
  }
}

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
    <motion.div variants={variants} exit={"exit"} className={classes.Main}>
      <LocationForm isLoading={isLoading} searchLocation={searchLocation}/>
      <LocationList locations={locations}/>
    </motion.div>
  )
}

export default Main