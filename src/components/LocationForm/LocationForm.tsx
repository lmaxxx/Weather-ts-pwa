import classes from './LocationForm.module.scss'
import {FC, FormEvent} from 'react'
import { Input, Button, Flex } from '@chakra-ui/react'
import useBindInput from "../../hooks/useBindInput";

interface PropsType {
  searchLocation: (query: string) => void
  isLoading: boolean
}

const LocationForm: FC<PropsType> = ({searchLocation, isLoading}) => {
  const {value, bind, reset} = useBindInput()

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    reset()
    searchLocation(value)
  }

  const disableButton = () => {
    if(value.trim().length < 3) return true

    return false
  }

  return (
    <form onSubmit={submit} className={classes.LocationForm}>
      <Flex align="center" justify="space-between">
        <Input
          {...bind}
          size={"lg"}
          mr={".5rem"}
          placeholder={"Write location..."}
        />
        <Button
          type={"submit"}
          size={"lg"}
          isDisabled={disableButton()}
          colorScheme={"blue"}
          isLoading={isLoading}
        >Search</Button>
      </Flex>
    </form>
  )
}

export default LocationForm