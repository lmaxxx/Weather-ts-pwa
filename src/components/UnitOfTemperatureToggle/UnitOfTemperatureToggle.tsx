import classes from './UnitOfTemperatureToggle.module.scss'
import useUnitOfTemperature from "../../hooks/useUnitOfTemperature";
import {motion} from "framer-motion";
import {Text} from '@chakra-ui/react'

const variants = {
  hover: {
    scale: 1.15
  },
  initial: {
    x: "100%"
  },
  animate: {
    x: 0
  }
}

const UnitOfTemperatureToggle = () => {
  const {getUnitLetter, toggleUnit} = useUnitOfTemperature()

  return (
    <motion.div
      className={classes.UnitOfTemperatureToggle}
      whileHover={"hover"}
      initial={"initial"}
      animate={"animate"}
      variants={variants}
      onClick={toggleUnit}
    >
      <Text>{getUnitLetter()}</Text>
    </motion.div>
  )
}

export default UnitOfTemperatureToggle