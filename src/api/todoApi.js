import axios from "axios";

export function getTodos() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}

export function createTodo(todo) {
  return axios.post("https://jsonplaceholder.typicode.com/todos", todo);
}

export function updateTodo(id, todo) {
  return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, todo);
}

export function deleteTodo(id) {
  return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
