import {Routes, Route} from 'react-router-dom'
import Main from "./pages/Main/Main";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/:city"} element={<Weather/>}/>
    </Routes>
  )
}

export default App;
