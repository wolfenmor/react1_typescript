import {FC, PropsWithChildren, useEffect} from "react";
import {UseAppDispatch, UseAppSelector} from "../../hooks/reduxHooks";
import {Car} from "./Car";
import {ICar} from "../../interfaces/carInterface"
import {carActions} from "../../store/slices/carSlice";
interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
    const {cars, trigger} = UseAppSelector(state => state.cars)
    const dispatch = UseAppDispatch();

    useEffect(()=> {
        dispatch(carActions.getAll())
    }, [trigger])
    return (
        <div>
            {cars.map((car: ICar) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};