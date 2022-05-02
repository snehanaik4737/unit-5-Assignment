import { legacy_createStore as createStore } from "redux";
import { ADD_TODO } from "./action";

export const reducer = (store, action) => {
    switch (action.type) {
        case ADD_TODO : return { ...store, Todo: [...store.Todo, action.payload] }
        default : return store
    }
}
const initState = {
  Todo: [],
};
// console.log("Store", store.getState());
export const store = createStore(reducer,initState)
// console.log("Store", store.getState());