import {useCallback, useState} from "react";
import {IForecast} from "../types";
import axios from "axios";

const useForecast = () => {
  const [forecast, setForecast] = useState<IForecast>({} as IForecast)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  const getForecast = useCallback(
    async (cityName: string | undefined) => {
      if(!cityName) return

      try {
        setIsLoading(true)
        setError("")

        const response = await axios({
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
          params: {q: cityName, days: '3'},
          headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '906b487883msh3185b1e59ac2549p1442aajsne0e636f4abac'
          }
        })

        setForecast(response.data)
      } catch (err: any) {
        setError(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }, []
  )

  return {error, isLoading, forecast, getForecast}
}

export default useForecast