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

const bannerUrl = host + '/banner/json';
const articleTopUrl = host + '/article/top/json';
const articleListUrl = host + '/article/list'; // /0/json

export {
    host,
    bannerUrl,
    articleTopUrl,
    articleListUrl,
};