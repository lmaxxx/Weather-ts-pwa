import classes from './Detail.module.scss'
import {FC} from 'react'
import {IDetail} from "../../types";
import {Text} from "@chakra-ui/react";

interface PropsType {
  detail: IDetail
  detailStyles?: any
}

const Detail: FC<PropsType> = ({detail, detailStyles}) => {
  return (
    <div className={classes.Detail}>
      <Text {...detailStyles}>{detail.name}: {detail.value}{detail.unit}</Text>
    </div>
  )
}

export default Detail