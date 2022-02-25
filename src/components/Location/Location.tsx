import classes from './Location.module.scss'
import {FC} from 'react'
import {motion} from 'framer-motion'
import {ISearchedLocation} from "../../types";
import {Box, Heading, Text} from "@chakra-ui/react";

interface PropsType {
  location: ISearchedLocation
  index: number
}

const locationVariants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05
    }
  }),
  hover: {
    x: 10
  }
}

const Location: FC<PropsType> = ({location, index}) => {
  return (
    <motion.li
      className={classes.Location}
      variants={locationVariants}
      initial={"initial"}
      animate={"animate"}
      custom={index}
      whileHover={"hover"}
    >
      <Box p={2} shadow='md' w={400} mt={3} borderWidth='1px' rounded='md'>
        <Heading fontSize='ld'>{location.name}</Heading>
        <Text mt={1}>
          {location.region.trim() && `${location.region} / `}
          {location.country}
        </Text>
      </Box>
    </motion.li>
  )
}

export default Location