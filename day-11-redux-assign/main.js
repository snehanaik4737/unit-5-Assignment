import { addTodo, ADD_TODO } from './Redux/action';
import { store } from './Redux/Store';
// import './style.css'

let data;

let text = document.getElementById("textTitle");
  document.getElementById("btn").addEventListener("click", d);

function d() {
    store.dispatch({ type: ADD_TODO , payload: { title: text.value, status: false } });
  data = store.getState().Todo;
  // console.log(data)
  appendTodo(data)
}
// console.log("aad",store)

function appendTodo(data)
{
  console.log(data)
  let x = document.getElementById("todosList");
  x.innerHTML = ""
  data.map((e,i) => {
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = i+1
    let td2 = document.createElement("td")
    td2.innerText = e.title
    let td3 = document.createElement("td")
    td3.innerText = e.status

    row.append(td1, td2, td3)
    x.append(row)
  })
}