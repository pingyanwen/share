import fetch from 'isomorphic-fetch';

import {getCookie} from './cookie';

export default function commonRequest(host = '', path, data = {}, method = 'GET', headers = null, credentials) {

    data.token = getCookie('token');

    let m = method.toUpperCase();

    path = host + path;

    let opts = {
        method: m,
        headers: headers || {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        // credentials: credentials ? credentials : 'include',跨域必填
        cors: 'cors',
    };

    if (m !== 'GET') {
        opts.body = !headers ? objToUrlString(data) : data;
    }

    if(process.env.NODE_ENV !== 'dev'&&data.requestType=='application/json'){
        delete data.requestType;
        opts.headers={};
        opts.body = JSON.stringify(data)
    }

    let p = m === 'GET' ? path + '?' + objToUrlString(data) : path;

    return fetch(p, opts).then(checkStatus).then(parseJSON, function (err) {
        return {'ret': '-999', 'msg': '网络连接失败!', error: err};
    });
}

/**
 * 将参数对象转为url字符串
 * @param obj
 * @returns {string}
 */
function objToUrlString(obj) {
    if (typeof obj !== 'object') {
        new Error('params expect an object, but got an ' + typeof obj);
        return;
    }
    let result = '';
    for (let n in obj) {
        if (obj.hasOwnProperty(n)) {
            if (result != '') {
                result += '&';
            }
            result += n + '=' + obj[n];
        }
    }
    return result;
}

// 监测请求状态是否正常
function checkStatus(response) {

    if (response.status >= 200 && response.status < 300) {

        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

/**
 * @param response
 * @returns {JSON | Promise<any>}
 */
function parseJSON(response) {
    return response.json();
}
/**
 * 将参数对象转为url
 * @param data
 */
function objToUrl(obj) {
    if (typeof obj !== 'object') {
        new Error('params expect an object, but got an ' + typeof obj);
        return;
    }
    let result = '';
    for (let n in obj) {
        if (obj.hasOwnProperty(n)) {
            if (result != '') {
                result += '/';
            }
            result += obj[n];
        }
    }
    return result;
}