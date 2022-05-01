import { store } from './store.js'

const state = store.getState();
// let todos = state.todos;

// todos.map((e) => {
//     let todo = document.createElement('div');
//     todo.innerText = e.title;
//     document.getElementById('root').append(todo);
// })

const getTodo = ( event) => {
    event.preventDefault();
    const todo = document.getElementById('user-todo').value;
    const action = {
        type: "add-todo",
        payload: todo
    };
    store.dispatch(action);
    console.log(store.getState())
}

document.getElementById('submit').addEventListener('click', getTodo);