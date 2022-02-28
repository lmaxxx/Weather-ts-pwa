import {FC} from 'react'
import {Text} from "@chakra-ui/react";

interface PropsType {
  region: string
  country: string
  [x: string]: any;
}

const Region: FC<PropsType> = ({region, country, ...rest}) => {
  return (
    <Text {...rest}>
      {region?.trim() && `${region} / `}
      {country}
    </Text>
  )
}

export default Region