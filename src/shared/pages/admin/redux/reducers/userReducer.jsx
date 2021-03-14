import constant from "../constant"

export default (state = {}, action) => {
  switch (action.type) {
    case constant.USER.setUser:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      }
    case constant.USER.logOut:
      return {
        ...state,
        user: {},
        loggedIn: false,
      }
    default:
      return state
  }
}
