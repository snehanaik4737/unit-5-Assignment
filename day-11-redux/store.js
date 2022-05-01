import { legacy_createStore as createStore } from "redux";
import {addTodo} from "./actions.js"
import {reducer}from "./reducer.js"
import {ADD_TODO} from "./actions.js";




const initState={
    counter:0,
    todos:[],
    theme:"dark",
}
const store=createStore(reducer,initState);


console.log("store",store.getState())

store.dispatch({type:ADD_TODO,payload:1})
console.log("After dispatch",store.getState())

store.dispatch(addTodo("learn redux"))

console.log("After dispatch",store.getState())
