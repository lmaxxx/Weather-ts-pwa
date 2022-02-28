import classes from './Details.module.scss'
import {FC} from 'react'
import {IDetail} from "../../types";
import Detail from "../Detail/Detail";

interface PropsType {
  details: IDetail[]
}

const Details: FC<PropsType> = ({details}) => {
  return (
    <div className={classes.Details}>
      {
        details.map((detail: IDetail) => (
          <Detail detail={detail}/>
        ))
      }
    </div>
  )
}

export default Details