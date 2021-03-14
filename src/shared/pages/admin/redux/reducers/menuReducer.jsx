import constant from "../constant"
import menu from "../../router"

export default (state = { menu }, action) => {
  switch (action.type) {
    case constant.MENU.setMenu:
      return {
        ...state,
        menu: action.payload,
      }
    default:
      return state
  }
}
