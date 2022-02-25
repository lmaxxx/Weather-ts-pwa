import classes from './LocationList.module.scss'
import {FC} from 'react'
import {ISearchedLocation} from '../../types'
import Location from "../Location/Location";

interface PropsType {
  locations: ISearchedLocation[]
}

const LocationList: FC<PropsType> = ({locations}) => {

  return (
    <ul className={classes.LocationList}>
      {
        locations.map((location, index) => (
          <Location key={location.id} index={index} location={location}/>
        ))
      }
    </ul>
  )
}

export default LocationList