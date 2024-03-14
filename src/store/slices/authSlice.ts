import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces/authInterface";
import {AxiosError} from "axios";
import {authService} from "../../services/authService";
import {IUser} from "../../interfaces/userInterface";

interface IState {
    registerError: string;
    loginError: string;
    currentUser: IUser
}
const initialState: IState = {
    registerError: null,
    loginError: null,
    currentUser: null
}
const register = createAsyncThunk<void, {user: IAuth}>(
    "authSlice/register",
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const login = createAsyncThunk<IUser, {user: IAuth}>(
    "authSlice/login",
    async ({user}, {rejectWithValue}) => {
        try {
            return authService.login(user)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(register.rejected, state => {
                state.registerError = "username or password is already exist"
            })
            .addCase(login.rejected, state => {
                state.loginError = "username or password doesn't correct"
            })
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
            .addMatcher(isFulfilled(register, login), state => {
                state.registerError = null
                state.loginError = null
            })

})

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register,
    login
}

export {
    authReducer,
    authActions
}