import axios, {AxiosInstance} from "axios";
import config from "../config/config";
import { ITodo } from "../interfaces/todo";

export class HttpService{
    fetchingService: AxiosInstance
    base_url: string

    constructor(base_url = config.base_url + config.api_base){
        this.fetchingService = axios
        this.base_url = base_url
    }

    private getFullAPIUrl(routerPath: string){
        return this.base_url + routerPath
    }

    async get(apiPath: string){
        const result = await this.fetchingService.get(this.getFullAPIUrl(apiPath))
        return result.data
    }

    async getOne(apiPath: string, id: string){
        const result = await this.fetchingService.get(this.getFullAPIUrl(apiPath) + `/${id}`)
        return result.data
    }

    async create(todo: ITodo, apiPath: string){
        const result = await this.fetchingService.post(this.getFullAPIUrl(apiPath), todo)
        return result.data
    }

    async update(todo: ITodo, apiPath: string, id: string){
        const result = await this.fetchingService.put(this.getFullAPIUrl(apiPath) + `/${id}`, todo)
        return result.data
    }

    async delete(apiPath: string, id: string){
        const result = await this.fetchingService.delete(this.getFullAPIUrl(apiPath) + `/${id}`)
        return result.data
    }
}

export default HttpService