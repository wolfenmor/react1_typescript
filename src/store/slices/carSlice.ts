import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {carsService} from "../../services/carsService";
import {AxiosError} from "axios";

interface IState {
    cars:ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState:IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}
const getAll = createAsyncThunk<ICar[], void>(
    "carSlice/getAll",
    async (_, thunkAPI) => {
        try {
            const {data} = await carsService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)
const create = createAsyncThunk<void, { car:ICar }>(
    "carSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
            await carsService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers:{
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        setTrigger:state => {
            state.trigger = !state.trigger
        }
    },
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
            .addMatcher(isFulfilled(create), state => {
                state.trigger = !state.trigger
            })
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create
}

export {carReducer, carActions}