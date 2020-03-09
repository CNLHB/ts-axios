/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-07 16:45:32
 * @LastEditTime: 2020-03-09 21:36:41
 * @LastEditors: seven
 */
export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
export interface AxiosRequestConfig {
    url: string
    method: Method
    headers?: any
    data?: any
    params?: any
    responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}
export interface AxiosPromise extends Promise< AxiosResponse>{
    
}