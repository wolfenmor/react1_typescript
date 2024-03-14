import {useDispatch} from "react-redux";
import {AppDispatch} from "../types/reduxTypes";

const UseAppDispatch = () => useDispatch<AppDispatch>()

export {UseAppDispatch}