import constant from "../constant"

export default {
  setUser: (obj) => {
    return {
      type: constant.USER.setUser,
      payload: obj,
    }
  },
  logOut: () => {
    return {
      type: constant.USER.logOut,
    }
  },
}
