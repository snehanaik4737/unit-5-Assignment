import "./todo.css"

export const TodoItem =({todo,handlestatus})=>{
    return <div className="todo">
        <div className="title">{todo.title} </div>
        <div className="toggle"><button className={`${todo.status ? "green":"red"}`} onClick={()=>handlestatus(todo.id)}></button></div> 
    
    </div>

 }


//  <span className={`${todo.status ? "green":"red"}`}></span>