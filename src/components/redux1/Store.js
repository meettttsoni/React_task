// import { legacy_createStore as createStore } from "redux";
// import { myReducer } from "./Reducer";
// export const myStore=createStore(myReducer)

import { legacy_createStore as createStore } from "redux"

import { Rootreducer } from "./Rootreducer"


 export const myStore =createStore(Rootreducer)