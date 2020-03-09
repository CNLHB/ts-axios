/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-08 18:59:20
 * @LastEditTime: 2020-03-08 23:00:11
 * @LastEditors: seven
 */
const  toString =  Object.prototype.toString
export function isDate(val: any): val is Date{
    return toString.call(val) === '[object Date]'
}

export function isObj(val: any): val is Object{
    return  val !== null && typeof val === 'object'
}

//判断普通对象
export function isPlainObjcet(val: any): val is Object{
    return  toString.call(val) === '[object Object]'
}