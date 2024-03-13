import {IRes} from "../types/responseType";
import {ICar} from "../interfaces/carInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll:():IRes<ICar[]> => apiService.get(urls.cars.base)
}

export {carService}