import React, { useEffect, useState } from "react"
import nprogress from "nprogress"

function Nprogress({ children }) {
  const [loadedComponent, setComponent] = useState(null)
  // this works like componentwillMount
  if (!nprogress.isStarted()) nprogress.start()
  if (loadedComponent) nprogress.done()
  useEffect(() => {
    let mounted = true
    mounted && setComponent(children)
    // componentUnMount
    return () => (mounted = false)
  }, [children])
  // return the loaded component
  return loadedComponent || <></>
}

export default Nprogress
