import csrf from "csurf"

export default csrf({
  cookie: {
    key: `csrf`,
    httpOnly: true,
  },
})
