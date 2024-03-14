import {IRes} from "../types/responseType";
import {ICar} from "../interfaces/carInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IPagination} from "../interfaces/paginationInterface";

const carService = {
    getAll:():IRes<IPagination<ICar>> => apiService.get(urls.cars.base)
}

export {carService}