/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let host
let routerMode
let imgBaseUrl = '' //图片视频资源文件地址，方便做CDN

if (process.env.NODE_ENV == 'development') {
    host = 'http://10.1.80.229' // 开发环境地址
    routerMode = 'hash'
    imgBaseUrl = 'http://10.1.80.229'
} else {
    host = 'http://120.26.205.75:8015' // 线上地址
    routerMode = 'hash'
    imgBaseUrl = 'http://120.26.205.75:8015'
}

export {
    host,
    routerMode,
    imgBaseUrl
}