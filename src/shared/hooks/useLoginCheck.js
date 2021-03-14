import { useEffect, useState } from "react"

function useLoginCheck() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (!window.__HEADER__) return
    const { isLogin: i } = window.__HEADER__
    if (!i) return
    setIsLogin(true)
  }, [])

  return isLogin
}

export default useLoginCheck
