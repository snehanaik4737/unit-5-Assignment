

import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from "./action";

const init ={todos:[]}
export const todoReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_TODO: return {...store,todos:payload};

         
     case DELETE_TODO:
    return {
      ...store, todos:store.todos.filter((el)=>el.id!==payload),
    };

    case TOGGLE_TODO:
      return {
        ...store,todos:store.todos.map(todo=>todo.id===payload ? {...todo,status:!todo.status}:todo),
      
      };
        default:return store;
    }
}