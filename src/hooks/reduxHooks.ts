import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/reduxType";

const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector
const UseAppDispatch = () => useDispatch<AppDispatch>()

export {UseAppSelector, UseAppDispatch}