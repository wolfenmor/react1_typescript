import {ITokens} from "../interfaces/tokensInterface";
import {IRes} from "../types/responseType";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {IAuth} from "../interfaces/authInterface";
import {urls} from "../constants/urls";

const accessTokenKey = "access"
const refreshTokenKey = "refresh"

const authService = {
    register(user:IAuth):IRes<IUser>{
      return apiService.post(urls.auth.register, user)
    },
    me():IRes<IUser>{
      return apiService.get(urls.auth.me)
    },
    async login(user: IAuth):Promise<IUser>{
      const {data} = await apiService.post(urls.auth.login, user);
      this.setTokens(data)
        const {data: me} = await this.me()
        return me
    },
    setTokens({access, refresh}: ITokens): void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {authService}