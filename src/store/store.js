import { configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers/rootReducer"

const initialState = {}

const store = configureStore({
  initialState,
  reducer: rootReducer,
  devTools: true,
})

export default store
