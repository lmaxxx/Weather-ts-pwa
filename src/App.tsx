import {Routes, Route, useLocation} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Weather from "./pages/Weather/Weather";
import {createContext, useState} from "react";
import {IUnitOfTemperatureContext, UnitOfTemperature} from "./types"
import {AnimatePresence} from "framer-motion";

export const UnitOfTemperatureContext = createContext<IUnitOfTemperatureContext>({} as IUnitOfTemperatureContext)

function App() {
  const [unitOfTemperature, setUnitOfTemperature] = useState<UnitOfTemperature>("c")
  const location = useLocation()

  const unitOfTemperatureValue: IUnitOfTemperatureContext = {
    unitOfTemperature, setUnitOfTemperature
  }

  return (
    <UnitOfTemperatureContext.Provider value={unitOfTemperatureValue}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/:city"} element={<Weather/>}/>
        </Routes>
      </AnimatePresence>
    </UnitOfTemperatureContext.Provider>
  )
}

export default App;
