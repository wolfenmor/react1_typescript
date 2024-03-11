import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interfaces/carInterface";
import {UseAppDispatch} from "../../hooks/reduxHooks";
import {carActions} from "../../store/slices/carSlice";
import {carsService} from "../../services/carsService";

interface IProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = UseAppDispatch()
    const cut = async () => {
        await carsService.deleteById(id)
        dispatch(carActions.setTrigger())
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => cut()}>Delete</button>
        </div>
    );
};

export {Car};