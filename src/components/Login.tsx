import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {UseAppDispatch} from "../hooks/UseAppDispatch";
import {authActions} from "../store/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {UseAppSelector} from "../hooks/UseAppSelector";

const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>()

    const navigate = useNavigate()
    const dispatch = UseAppDispatch()
    const {loginError} = UseAppSelector(state => state.auth)
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}))
        if (requestStatus === "fulfilled") {
            navigate("/cars")
        }
    }
    return (
        <div>
            {loginError && <h4>{loginError}</h4>}
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={"username"} {...register("username")}/>
                <input type="text" placeholder={"password"} {...register("password")}/>
                <button>Click</button>
            </form>
        </div>
    );
};

export default Login;