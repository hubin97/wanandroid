import {Component} from "react";

export default class HttpRequest extends Component<any> {

    static get = (url: string, headers?: any | undefined) => {
        console.log('HttpRequest=>get| ' + url)
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: headers,
            })
                .then((rsp) => {
                    if (rsp.ok) {
                        return rsp.json()
                    } else {
                        console.log('服务器繁忙，请稍后再试；\r\nCode:' + rsp.status)
                        //reject(rsp.status)
                        return rsp.status
                    }
                })
                .then((result) => {
                    if (result.errorCode != 0) {
                        reject(result.data.errorMsg)
                        // TODO: Toast 提示
                        console.log(result.data.errorMsg)
                    } else {
                        let data: string | object = result.data
                        resolve(data)
                    }
                })
                .catch((error) => {
                    //reject(error)
                    // TODO: Toast 提示
                    console.log(error)
                })
        })
    }

    static post = (url: string, body?: BodyInit_ | null, headers?: any | undefined) => {
        console.log('HttpRequest=>post| ' + url)
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: headers,
                method: 'POST',
                body: body
            })
                .then((rsp) => {
                    if (rsp.ok) {
                        return rsp.json()
                    } else {
                        console.log('服务器繁忙，请稍后再试；\r\nCode:' + rsp.status)
                    }
                })
                .then((result) => {
                    if (result.errorCode != 0) {
                        // TODO: Toast 提示
                        console.log(result.data.errorMsg)
                        return
                    }
                    resolve(result.data)
                })
                .catch((error) => {
                    //reject(error)
                    // TODO: Toast 提示
                    console.log(error)
                })
        })
    }
}
