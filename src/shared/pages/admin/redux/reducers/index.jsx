import { combineReducers } from "redux"
// reducers
import menuReducer from "./menuReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
})

export default rootReducer
