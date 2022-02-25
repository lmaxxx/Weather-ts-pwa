import {ChangeEvent, useCallback, useMemo, useState} from "react";

const useBindInput = () => {
  const [value, setValue] = useState<string>("")

  const bind = useMemo(() => ({
    value: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }
  }), [value]);


  const reset = useCallback(() => {
    return setValue("")
  }, [])

  return {bind, value, reset}
}

export default useBindInput