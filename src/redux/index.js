import {combineReducers, legacy_createStore} from "redux"
import counter from "./counter"
import token from "./token"


const reducer = combineReducers({
    // wishlist,
    // cart,
    counter,
    token
})

export const store = legacy_createStore(reducer)