//action types
export const ADD_COUNT="ADD_COUNT"
export const ADD_TODO ="ADD_TODO"

//action creators

export const addTodo =(title)=>{
    return{
        type:ADD_TODO,
        payload:{
            title:title,
            status:false,
        }
    }
}