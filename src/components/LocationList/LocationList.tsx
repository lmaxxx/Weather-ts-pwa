import classes from './LocationList.module.scss'
import {FC} from 'react'
import {ISearchedLocation} from '../../types'
import Location from "../Location/Location";
import {useNavigate} from "react-router-dom";

interface PropsType {
  locations: ISearchedLocation[]
}

const LocationList: FC<PropsType> = ({locations}) => {
  const navigate = useNavigate()

  const redirectToLocationHoF = (locationName: string) => {
    return () => {
      navigate(`/${locationName}`)
    }
  }

  return (
    <ul className={classes.LocationList}>
      {
        locations.map((location, index) => (
          <Location
            key={location.id}
            index={index}
            location={location}
            redirectToLocation={redirectToLocationHoF(location.name)}
          />
        ))
      }
    </ul>
  )
}

export default LocationList