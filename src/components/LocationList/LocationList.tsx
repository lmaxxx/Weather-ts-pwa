import classes from './LocationList.module.scss'
import {FC} from 'react'
import {ISearchedLocation} from '../../types'

interface PropsType {
  locations: ISearchedLocation[]
}

const LocationList: FC<PropsType> = ({locations}) => {

  return (
    <ul className={classes.LocationList}>
      {
        locations.map(location => (
          <li
            key={location.id}
          >
            {location.name} {"/" && location.region} / {location.country}
          </li>
        ))
      }
    </ul>
  )
}

export default LocationList