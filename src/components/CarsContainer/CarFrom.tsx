import {FC, PropsWithChildren, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carInterface";
import {UseAppDispatch, UseAppSelector} from "../../hooks/reduxHooks";
import {carActions} from "../../store/slices/carSlice";
import {carsService} from "../../services/carsService";
interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
    const {register, handleSubmit, reset, setValue} = useForm<ICar>()
    const dispatch = UseAppDispatch()
    const {carForUpdate} = UseAppSelector(state => state.cars)

    useEffect(()=> {
        if (carForUpdate){
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.create({car}))
        reset()
    }
    const update = async (car: ICar) => {
        await carsService.updateById(carForUpdate.id, car)
        dispatch(carActions.setTrigger())
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update: save)}>
            <input type="text" placeholder={"brand"} {...register("brand", {
                    pattern: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/
            })}/>
            <input type="text" placeholder={"price"} {...register("price", {
                valueAsNumber: true,
                min: 0,
                max: 1000000
            })}/>
            <input type="text" placeholder={"year"} {...register("year", {
                valueAsNumber: true,
                min: 1990,
                max: new Date().getFullYear()
            })}/>
            <button>
                {carForUpdate?"update": "save"}
            </button>
        </form>
    );
};

export {CarForm};