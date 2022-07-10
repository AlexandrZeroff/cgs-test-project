import { useQuery } from "react-query";
import { ITodoList } from "../interfaces/todo";
import axios from "axios";
import config from '../config/config'
import {todos} from '../config/QUERY_KEYS'

async function fetchTodos<ITodoList>(){
    const { data } = await axios.get(config.base_url + config.api_base)
    return data
}

const useTodos = () => useQuery(todos, fetchTodos)
export default useTodos