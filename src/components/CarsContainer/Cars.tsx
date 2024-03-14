import React, {useEffect} from 'react';
import {UseAppSelector} from "../../hooks/UseAppSelector";
import {UseAppDispatch} from "../../hooks/UseAppDispatch";
import {carActions} from "../../store/slices/CarSlice";
import {Car} from "./Car";

const Cars = () => {
    const {cars} = UseAppSelector(state => state.cars)
    const dispatch = UseAppDispatch()
    useEffect(()=> {
        dispatch(carActions.getAll())
    }, [])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;