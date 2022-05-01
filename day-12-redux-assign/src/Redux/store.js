import { legacy_createStore as createStore,applyMiddleware } from "redux";


import { todoReducer } from "./reducer";
import thunk from "redux-thunk"




//  const middleware=(store)=>(next)=>(action)=>{
//   if(typeof action==="function"){
//      return action(store.dispatch)
//   }
//      next(action)
//  }

export const store=createStore(todoReducer,
    //this is before using thunk
    // applyMiddleware(middleware)
    //after using thunk it will be
    //after applying thunk you can remove the middleware function &source code is same
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
     )


    //  {counter:0,todos:[]}

store.subscribe(()=>{
    console.log("subscribe",store.getState())
})