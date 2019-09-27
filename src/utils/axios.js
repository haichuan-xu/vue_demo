import axios from 'axios'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，
import Vue from 'vue'
import {Message} from 'element-ui' // element-ui
// 配置baseURL
const serverAddress = {
    // 生产环境服务器地址
    production: 'http://127.0.0.1:8081',
    // 开发环境服务器地址 //TODO 对接口时 添加后缀
    development: 'http://localhost:8081',
};
// 通过 process.env.NODE_ENV 来判断当前运行环境
axios.defaults.baseURL = serverAddress[process.env.NODE_ENV];

// 创建axios
let instance = axios.create();
// 超时 50000
instance.defaults.timeout = 50000;
let loading;
// 拦截所有请求
axios.interceptors.request.use((request) => {

    //如果包含本地测试数据的请求地址
    if (request.url.indexOf('jsonData')) {
        request.baseURL = 'http://localhost:8081';
        return request;
    }
    loading = Loading.service({fullscreen: true, text: "数据正在加载中···"});
    // 返回请求
    return request;
}, (err) => {

    // 返回请求异常
    return Promise.reject(err);
});

// 拦截所有响应
// TODO 稍后对接后台接口时 优化此处向下代码
let flag = true;
axios.interceptors.response.use((response) => {

    // 关闭加载
    if (loading) {
        loading.close();
    }

    let res = response;

    // 返回响应
    return res;

}, (err) => {
    // 关闭加载
    if (loading) {
        loading.close();
    }
    // 返回响应异常
    return Promise.reject(err);
});
Vue.prototype.axios = axios;