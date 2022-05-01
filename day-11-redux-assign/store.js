import { legacy_createStore as createStore } from 'redux';

const initState = {
    todos: []
};

const reducer = (store, action) => {
    if (action.type === "add-todo") {
        let todo = document.createElement('div');
        todo.innerText = action.payload;
        document.getElementById('app').append(todo);
        return {
            ...store, todos: [
                ...store.todos,
                { title: action.payload, status: false }
            ]
        }
    }
    return store;
}

export const store = createStore(reducer, initState);