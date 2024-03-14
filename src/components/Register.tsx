import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {UseAppDispatch} from "../hooks/UseAppDispatch";
import {authActions} from "../store/slices/authSlice";
import {UseAppSelector} from "../hooks/UseAppSelector";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>()
    const dispatch = UseAppDispatch();

    const navigate = useNavigate()

    const {registerError} = UseAppSelector(state => state.auth)
    const reg:SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user}))
        if (requestStatus === "fulfilled"){
            navigate("/login")
        }
    }
    return (
        <div>
            {registerError && <h4>{registerError}</h4>}
            <form onSubmit={handleSubmit(reg)}>
                <input type="text" placeholder={"username"} {...register("username")}/>
                <input type="text" placeholder={"password"} {...register("password")}/>
                <button>Click</button>
            </form>
        </div>
    );
};

export default Register;