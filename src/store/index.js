import { configureStore } from "@reduxjs/toolkit";
import premierReducer from './premierSlice'
import topReducer from './topSlice'
import bestReducer from './bestSlice'
import popularReducer from './popularSlice'

export default configureStore({
    reducer: {
        premier: premierReducer,
        top: topReducer,
        best: bestReducer,
        popular: popularReducer
    }
})