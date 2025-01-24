import { configureStore } from '@reduxjs/toolkit'
import Slice from './modules/Slice'

let store = configureStore({
    reducer: {
        counts: Slice
    }
})

export default store
