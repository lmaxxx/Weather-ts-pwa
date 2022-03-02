import classes from './Details.module.scss'
import {FC} from 'react'
import {IDetail} from "../../types";
import Detail from "../Detail/Detail";

interface PropsType {
  details: IDetail[]
  detailStyles?: any
}

const Details: FC<PropsType> = ({details, detailStyles}) => {
  return (
    <div className={classes.Details}>
      {
        details.map((detail: IDetail) => (
          <Detail detailStyles={detailStyles} key={detail.name} detail={detail}/>
        ))
      }
    </div>
  )
}

export default Details