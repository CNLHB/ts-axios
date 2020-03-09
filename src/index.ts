/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-07 16:42:39
 * @LastEditTime: 2020-03-09 21:33:43
 * @LastEditors: seven
 */

 import {AxiosRequestConfig, AxiosPromise, AxiosResponse} from './types'
 import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transfromRequest, transfromResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
function axios(config: AxiosRequestConfig): AxiosPromise{
    // 入口
    processConfig(config)
    return xhr(config).then((res)=>{
        return transfromResponseData(res)
    })
}

function processConfig(config: AxiosRequestConfig): void{
    config.url = transfromURL(config)
    config.headers = tranfromHeaders(config)
    config.data = transfromData(config)
}

function transfromURL(config: AxiosRequestConfig): string {
    const {url, params} = config
    return buildURL(url, params)
}
function transfromData(config: AxiosRequestConfig): string {
    return transfromRequest(config.data)
}
function tranfromHeaders(config: AxiosRequestConfig): string {
    const {headers = {},data } = config

    return processHeaders(config,data)
}
function transfromResponseData(res: AxiosResponse): AxiosResponse{
    res.data = transfromResponse(res.data)
    return res
}

export default axios