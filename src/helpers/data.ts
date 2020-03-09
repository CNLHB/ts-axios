/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-08 20:13:41
 * @LastEditTime: 2020-03-09 21:30:07
 * @LastEditors: seven
 */
import {isObj, isPlainObjcet} from './util'
export function transfromRequest(data: any): any{
    if(isPlainObjcet(data)){
        return JSON.stringify(data)
    }
    return data

}
export function transfromResponse(data: any): any{
    if(typeof data === 'string'){
        try{
            data = JSON.parse(data)
        }catch(e){
            
        }
    }
    return data

}
