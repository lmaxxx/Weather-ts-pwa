import {useCallback, useState} from "react";
import axios from "axios";

const useSearchLocation = () => {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>({} as unknown)

  const searchLocation = useCallback(
    async (query: string) => {
      try {
        setIsLoading(true)
        setError({})

        const response = await axios({
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/search.json',
          params: {q: query},
          headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '906b487883msh3185b1e59ac2549p1442aajsne0e636f4abac'
          }
        })

        setLocations(response.data)
      } catch (err: unknown) {
        setError(err)
      }
      finally {
        setIsLoading(false)
      }
    }, []
  )


  return {error, isLoading, locations, searchLocation}
}

export default useSearchLocation