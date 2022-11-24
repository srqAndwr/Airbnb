/*
 * @Author: shiruiqiang
 * @Date: 2022-10-13 17:47:43
 * @LastEditTime: 2022-11-22 17:12:19
 * @LastEditors: shiruiqiang
 * @FilePath: core.ts
 * @Description: 
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
//请求响应拦截器类型
interface interceptors {
    reqInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    respInterceptor?: (response: AxiosResponse) => AxiosResponse;
}
class Request {
    //当前axios实例
    private _instance: AxiosInstance
    //当前实例请求拦截器返回值
    private _requestInterceptor?: number
    //当前实例响应拦截器返回值
    private _responseInterceptor?: number
    /**
     * 
     * @param config 在实例化某一Request时确定的一些配置，例如：BaseUrl,Headers,Proxy之类
     * @param interceptors 在实例化某一Request时需要use的拦截器
     */
    constructor(config: AxiosRequestConfig, interceptors?: interceptors) {
        this._instance = axios.create({
            ...config,
        });
        interceptors?.reqInterceptor && (this._requestInterceptor = this._instance.interceptors.request.use(interceptors.reqInterceptor));
        interceptors?.respInterceptor && (this._responseInterceptor = this._instance.interceptors.response.use(interceptors.respInterceptor));
    }
    private _request<T>(config: AxiosRequestConfig) {
        return new Promise<T>((resolve, reject) => {
            this._instance.request<T>(config).then((res: AxiosResponse<T>) => {
                resolve(res.data);
            }).catch((e: AxiosError) => {
                reject(e);
            })
        });
    }
    private _get<T>(config: AxiosRequestConfig) {
        return this._request<T>({
            ...config,
            method: 'GET'
        });
    }
    private _post<T>(config: AxiosRequestConfig) {
        return this._request<T>({
            ...config,
            method: 'POST'
        });
    }
    //取消拦截器
    private _cancelIntercept() {
        this._requestInterceptor && this._instance.interceptors.request.eject(this._requestInterceptor);
        this._responseInterceptor && this._instance.interceptors.response.eject(this._responseInterceptor);
    }

    get request() {
        return this._request;
    }
    get get() {
        return this._get;
    }
    get post() {
        return this._post;
    }
    get cancelIntercept() {
        return this._cancelIntercept;
    }
}


export default Request;