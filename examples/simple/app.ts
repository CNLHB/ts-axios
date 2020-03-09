/*
 * @Description: 
 * @Author: seven
 * @Date: 2020-03-07 17:25:21
 * @LastEditTime: 2020-03-07 17:25:32
 * @LastEditors: seven
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})