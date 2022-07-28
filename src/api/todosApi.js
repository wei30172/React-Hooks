import axios from "axios";

export const todosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export default todosApi;
