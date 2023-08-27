import Qs from 'query-string';

// import Singleton from "../utils/singleton";
import {host} from './url';

type HttpMethods = 'POST' | "GET" | "PUT" | "DELETE" | "PATCH"
type HttpResultItem = { code: number| null, msg: string, data: any }

export interface HttpResult {
    data: HttpResultItem | null,
    error: HttpResultItem | null
}

export default class HTTP {
    static GET<Q>(url: string, query?: Q, header?: Object) {
        return handleFetch(url, 'GET', null, query, header)
    }
    static POSTForm<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'POST', params, query, {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            ...header
        })
    }
    static POST<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'POST', params, query, {
            'Content-Type': 'application/json;charset=UTF-8',
            ...header
        })
    }
    static PUT<P, Q>(url: string, params?: P, query?: Q, header?: Object) {
        return handleFetch(url, 'PUT', params, query, header)
    }
    static DELETE<P, Q>(url: string, params: P, query: Q, header?: Object) {
        return handleFetch(url, 'DELETE', params, query, header)
    }
    static PATCH<P, Q>(url: string, params: P, query: Q, header?: Object) {
        return handleFetch(url, 'PATCH', params, query, header)
    }
}

/**
 *
 * */
async function handleFetch<P, Q, H>(url: string, method: HttpMethods, params?: P, query?: Q, header?: H): Promise<HttpResult> {
    // @ts-ignore
    // let singleton = new Singleton()
    // let token = singleton.getToken()
    let option: any = {
        method: method,
        // headers: {
        //     accessToken: token
        // }
    }
    if (query) {
        url = url + "?" + Qs.stringify(query)
    }
    console.log('url=>' + url)
    if (method !== 'GET' && params) {
        option.body = params
        //console.log('body=>'+ JSON.stringify(params))
    }
    if (header) {
        option.headers = { ...option.headers, ...header }
        //console.log('headers=>'+ JSON.stringify(option.headers))
    }
    return new Promise(async (resolve) => {
        try {
            let response = await fetch(url, { ...option })
            let result: any = null
            if (response.ok) {
                result = await response.json()
                //console.log(result)
                // 如果匹配到特定域名开头, 校验errorCode
                if (url.startsWith(host)) {
                    if (result && result.errorCode === 0) {
                        resolve({
                            data: {code: result.errorCode, msg: result.errorMsg, data: result.data},
                            error: null,
                        })
                    } else {
                        console.log(result.errorCode, result.errorMsg)
                        //handleErrorCode(result)
                        resolve({
                            data: null,
                            error: {code: result.errorCode, msg: result.errorMsg || '网络错误', data: null}
                        })
                    }
                } else {
                    if (result) {
                        resolve({ data: { code: null, msg: "外部接口请求成功", data: result }, error: null})
                    } else {
                        resolve({ data: null, error: { code: response.status || -1, msg: '网络错误', data: null } })
                    }
                }
            } else {
                //console.log(result.errorCode, result.errorMsg)
                resolve({ data: null, error: { code: response.status || -1, msg: '网络错误', data: null } })
            }
        } catch (error) {
            resolve({ data: null, error: { code: -1, msg: '网络错误', data: null } })
        }
    })
}
