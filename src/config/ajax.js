//config
import axios from 'axios'
import Qs from 'qs'
import store from '../store/store'
import { host, imgBaseUrl } from './env'

const baseURL = host + '/app/ajax/'
const suffix = '.ashx'

// 创建一个axios实例导出，并且自定义其配置
export const ajax = (config) => {

    return axios({
        //`url`是请求的服务器地址
        url: baseURL + config.api + suffix,

        // 基础url前缀
        // baseURL: 'http://10.1.80.229/app/ajax/',

        //`method`是请求资源的方式
        method: config.method ? config.method : 'get', //default

        params: config.params ? config.params : {},
        　　　　
        transformRequest: [function(data) {
            // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
            　　
            data = Qs.stringify({});
            return data;
        }],

        transformResponse: [function(data) {
            // 这里提前处理返回的数据
            if (data.errcode === '0') {
                data['errcode'] = 0
            }

            data.data.forEach(function(el) {
                if (el.picurl && (el.picurl.length !== 16)) {
                    el.picurl = imgBaseUrl + el.picurl
                } else if (el.picurl) {
                    el.picurl = require('../assets/images/cooking_icon.png')
                }

                if (el.videourl) {
                    el.videourl = imgBaseUrl + el.videourl
                }
            }, this)
            store.dispatch('hideLoading')

            return data
        }],

        data: config.data ? config.data : {},

        // 请求头信息
        // headers: {'X-Requested-With': 'XMLHttpRequest'},

        //设置超时时间
        timeout: 1000,
        //返回数据类型
        responseType: 'json', // default
    })
}