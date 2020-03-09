/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-07 16:52:08
 * @LastEditTime: 2020-03-09 21:27:30
 * @LastEditors: seven
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "./types"
import { ParseHeaders } from "./helpers/headers";
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    return new Promise((resolve) => {
        const { data, url, method, headers, responseType } = config;
        const request = new XMLHttpRequest();
        if (responseType) {
            request.responseType = responseType
        }
        request.open(method.toUpperCase(), url, true);
        request.onreadystatechange = function handleLoad() {
            if (request.readyState !== 4) {
                return
            }
            const responseHeaders = ParseHeaders(request.getAllResponseHeaders())
            const responseData = responseType !== "text" ? request.response : request.responseText
            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }
            resolve(response)
        }
        Object.keys(headers).forEach((name) => {
            if (data === null && name.toLowerCase() === "content-type") {
                delete headers[name]
            } {
                request.setRequestHeader(name, headers[name])
            }
        })
        request.send(data);
    })
}