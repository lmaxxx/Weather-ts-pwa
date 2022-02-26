import {Routes, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Weather from "./pages/Weather/Weather";
import {createContext, useState} from "react";
import {IUnitOfTemperatureContext, UnitOfTemperature} from "./types"

export const UnitOfTemperatureContext = createContext<IUnitOfTemperatureContext>({} as IUnitOfTemperatureContext)

function App() {
  const [unitOfTemperature, setUnitOfTemperature] = useState<UnitOfTemperature>("c")

  const unitOfTemperatureValue: IUnitOfTemperatureContext = {
    unitOfTemperature, setUnitOfTemperature
  }

  return (
    <UnitOfTemperatureContext.Provider value={unitOfTemperatureValue}>
      <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/:city"} element={<Weather/>}/>
      </Routes>
    </UnitOfTemperatureContext.Provider>
  )
}

export default App;
