import { legacy_createStore as createstore } from "redux";
import { myreducer } from "./Reducer";

export const mystore=createstore(myreducer)