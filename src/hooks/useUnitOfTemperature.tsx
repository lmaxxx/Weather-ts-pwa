import {UnitOfTemperatureContext} from "../App"
import {useContext} from "react";

const useUnitOfTemperature = () => {
  const {unitOfTemperature, setUnitOfTemperature} = useContext(UnitOfTemperatureContext);

  const getUnitLetter = () => {
    if(unitOfTemperature === 'f') return "℉"

    return "℃"
  }

  const toggleUnit = () => {
    if(unitOfTemperature === 'f') {
      setUnitOfTemperature("c")
      return
    }

    setUnitOfTemperature("f")
  }

  return {getUnitLetter, unitOfTemperature, toggleUnit}
}

export default useUnitOfTemperature