import {FC, PropsWithChildren} from "react";
import {CarForm} from "../components/CarsContainer/CarFrom";
import {Cars} from "../components/CarsContainer/Cars";

interface IProps extends PropsWithChildren {

}

const CarsPage: FC<IProps> = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};