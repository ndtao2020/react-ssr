import { useCallback, useEffect, useState } from "react"

const useAsync = (asyncFunction, immediate = true) => {
  const [pending, setPending] = useState(false)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setPending(true)
    setValue(null)
    setError(false)
    return asyncFunction()
      .then((response) => setValue(response))
      .catch(() => setError(true))
      .finally(() => setPending(false))
  }, [asyncFunction])

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [immediate, execute])

  return { execute, pending, value, error }
}

export default useAsync
