
import http, { HttpResult } from './http'
import {
    bannerUrl,
    articleTopUrl,
    articleListUrl,
    projectUrl,
    projectListUrl,
    treeUrl,
    treeListUrl,
    toolUrl,
    chapterUrl,
    wxarticleUrl,
    wxarticleListUrl,
    wxarticleSearchUrl,
    chapterListUrl,
} from './url'

// interface IDeviceDetailReqParam {
//     dataId: number | string,
//     dataTypeEnum: 'endpoint' | 'device'
// }

// export interface SceneListReqParam {
//     ifExclude: boolean | null, // 默认传nil; 否则为true时查除了当前roomId之外的所有房间下的数据
//     ifExcludeType: boolean | null, // 默认传nil; 否则为true时查除了当前typeEnum之外的所有类型下的数据
//     roomId: number | null,
//     currentPage: number,
//     pageSize: number,
//     typeEnum: 'appOperate' | 'timer' | 'deviceAttr', // TriggerTypeEnum, 手动, 定时, 设备触发
//     // ifFamilyAll: boolean
// }

// export interface RoomDeviceListReqParam {
//     roomId: number | null,
//     currentPage: number,
//     pageSize: number,
// }

// export interface LoginReqParam {
//     loginType: number, //= '0' | '1', // 0: 密码登录, 1: 验证码登录
//     phone: string,
//     password: string,
// }

// export interface SuggestSubmitParam {
//     dataId: string,
//     dataTypeEnum: string,
//     familyId: number,
//     sgContent: string,
//     sgPictureList: [string],
//     sgTime: number,
//     sgTypeId: number,
//     userContact: string,
// }

// const deviceDetailReq = (query: IDeviceDetailReqParam) => http.GET(deviceDetailUrl, query);
// // 获取天气
// const weatherReq = () => http.GET(weatherV7Url)
// // 家庭区域
// const familyAndAreaListReq = () => http.GET(familyAndAreaListUrl);
// const switchDefaultAreaReq = (areaId: number) => http.PUT(switchDefaultAreaUrl, null, {areaId: areaId});
// const familyManagerListReq = () => http.GET(familyManagerListUrl);
// const familyDetailReq = (familyId: number) => http.GET(familyDetailUrl, {familyId: familyId});

// // 常用场景
// const mostUseScenesReq = () => http.GET(mostUseScenesUrl);
// const mostUsedDeviceReq = () => http.GET(mostUsedDeviceUrl)
// const homeRoomListReq = () => http.GET(homeRoomListUrl)
// const roomDeviceReq = (query: RoomDeviceListReqParam) => http.GET(roomDeviceUrl, query)

// // 场景列表
// const sceneListReq = (query: SceneListReqParam) => http.GET(sceneListUrl, query);
// const defaultFAreaAllRoomReq = (id: number) => http.GET(defaultFAreaAllRoomUrl, {areaId: id} )

// // 个人中心
// const suggestListReq = () => http.GET(suggestListUrl)
// const suggestSubmitReq = (param: SuggestSubmitParam) => http.POST(submitSuggestUrl, JSON.stringify(param))

// // 登录 body请求为 raw方式
// const loginReq = (param: LoginReqParam) => http.POST(loginUrl, JSON.stringify(param))
// const logoutReq = () => http.GET(logoutUrl)
// const appStoreLastVersionReq = () => http.POST(appStoreLastVersionUrl)
// const aliOssAuthReq = (upload_type: number) => http.GET(aliOssAuthUrl, {uploadType: upload_type})

// home
const bannerReq = () => http.GET(bannerUrl);
const articleTopReq = () => http.GET(articleTopUrl);
const articleListReq = (page: number) => http.GET(articleListUrl + '/' + page + '/json');

// project  /1/json?cid=294
const projectReq = () => http.GET(projectUrl);
const projectListReq = (page: number, cid: number) => http.GET(projectListUrl + '/' + page + '/json?' + 'cid=' + cid);

// tree  /1/json?cid=294
const treeReq = () => http.GET(treeUrl);
const treeListReq = (page: number, cid: number) => http.GET(treeListUrl + '/' + page + '/json?' + 'cid=' + cid);

// wxarticle
const wxarticleReq = () => http.GET(wxarticleUrl);
//  /408/1/json
const wxarticleListReq = (page: number, cid: number) => http.GET(wxarticleListUrl + '/' + cid + '/' + page + '/json');
//  /405/1/json?k=Java
const wxarticleSearchReq = (page: number, cid: number, keyword: string) => http.GET(wxarticleSearchUrl + '/' + cid + '/' + page + '/json?' + 'k=' + keyword);

// chapter
const chapterReq = () => http.GET(chapterUrl);
const chapterListReq = (page: number, cid: number) => http.GET(chapterListUrl + '/' + page + '/json?' + 'cid=' + cid + '&order_type=1');

// tool
const toolReq = () => http.GET(toolUrl);

export {
    bannerReq,
    articleTopReq,
    articleListReq,

    projectReq,
    projectListReq,

    treeReq,
    treeListReq,

    toolReq,
    chapterReq,
    chapterListReq,
    
    wxarticleReq,
    wxarticleListReq,
    wxarticleSearchReq,
}