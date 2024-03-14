import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../types/reduxTypes";

const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {UseAppSelector}