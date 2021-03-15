import constant from "../constant"

export default {
  setMenu: (obj) => {
    return {
      type: constant.MENU.setMenu,
      payload: obj,
    }
  },
}
