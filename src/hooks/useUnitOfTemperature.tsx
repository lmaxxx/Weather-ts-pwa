import {UnitOfTemperatureContext} from "../App"
import {useContext} from "react";

const useUnitOfTemperature = () => {
  return useContext(UnitOfTemperatureContext);
}

export default useUnitOfTemperature