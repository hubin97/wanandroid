const PATH = {
    dev: {
        url: 'https://www.wanandroid.com',
    },
    test: {
        url: ''
    },
    prd: {
        url: '',
    }
}

let host = PATH.dev.url

// 首页
const bannerUrl = host + '/banner/json';
const articleTopUrl = host + '/article/top/json';
const articleListUrl = host + '/article/list'; // /0/json

// 项目
const projectUrl = host + '/project/tree/json';
const projectListUrl = host + '/project/list'; // /1/json?cid=294

// 体系
const treeUrl = host + '/tree/json';
const treeListUrl = host + '/article/list'; // /0/json?cid=60


export {
    host,
    bannerUrl,
    articleTopUrl,
    articleListUrl,
    
    projectUrl,
    projectListUrl,

    treeUrl,
    treeListUrl,
};