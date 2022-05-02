import { ADD_TODO } from "./action";
import { store } from "./store";

export const TodoReducer = (store, action) => {
    switch (action.type) {
        case ADD_TODO: return { ...store, Todo: [...store.Todo, action.payload] }
        default: return store
    }
}