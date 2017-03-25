import fetch from '../config/fetch'

import * as home from './mockData/home'
import * as teach from './mockData/teach'
import * as operate from './mockData/operate'
import * as discuss from './mockData/discuss'
import * as login from './mockData/login'

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

// 编译环境使用真实数据
if (process.env.NODE_ENV == 'development') {

} else {
    let trendsList = (type, userid) => setpromise(home.trendsList)
    let newsList = (type, userid) => setpromise(home.newsList)
    let newsDetail = (type, newsid) => setpromise(home.newsDetail)
    let videoList = (type, limit, userid) => setpromise(teach.videoList)
    let videoCon = (type, videoid) => setpromise(teach.videoCon)
    let taskList = (type, category, grade, limit) => setpromise(operate.taskList)
    let taskDetail = (type, taskid) => setpromise(operate.taskDetail)
    let topicList = (type, funid) => setpromise(discuss.topicList)
    let discussList = (type, topicid) => setpromise(discuss.discussList)
    let accountLogin = (type, username, password) => setpromise(login.userInfo)
    let accountState = type => setpromise(login.sessionState)
    let accountToken = username => setpromise(login.validate_token);
}

// let sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);

export {
    trendsList,
    newsList,
    newsDetail,
    videoList,
    videoCon,
    taskList,
    taskDetail,
    topicList,
    discussList,
    accountLogin,
    accountState
}
