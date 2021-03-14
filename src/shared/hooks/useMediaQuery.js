import { useCallback, useMemo } from "react"

function useMediaQuery() {
  const getMinWidth = useCallback((width) => {
    return window.matchMedia(`(min-width: ${width}px)`).matches
  }, [])
  const isMobile = useMemo(() => getMinWidth(320), [getMinWidth])
  const isTablet = useMemo(() => getMinWidth(768), [getMinWidth])
  return { isMobile, isTablet }
}
export default useMediaQuery
