import {UnitOfTemperatureContext} from "../App"
import {useContext, useEffect} from "react";
import {UnitOfTemperature} from '../types'

const useUnitOfTemperature = () => {
  const {unitOfTemperature, setUnitOfTemperature} = useContext(UnitOfTemperatureContext);

  useEffect(() => {
    const unitFormLocalStorage = localStorage.getItem("unitOfTemperature") as UnitOfTemperature

    if(unitFormLocalStorage) setUnitOfTemperature(unitFormLocalStorage)
  }, []);


  const getUnitLetter = () => {
    if(unitOfTemperature === 'f') return "℉"

    return "℃"
  }

  const toggleUnit = () => {
    if(unitOfTemperature === 'f') {
      setUnitOfTemperature("c")
      localStorage.setItem("unitOfTemperature", "c")
      return
    }

    localStorage.setItem("unitOfTemperature", "f")
    setUnitOfTemperature("f")
  }

  return {getUnitLetter, unitOfTemperature, toggleUnit}
}

export default useUnitOfTemperature