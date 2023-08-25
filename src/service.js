
export function fetchEntries(keyword) {
  const url =
    'https://api.dictionaryapi.dev/api/v2/entries/en/' + keyword ?? '';
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json()) //数据解析方式,获取到网络请求返回的对象
      .then(responseJson => {
        //console.log('res', JSON.stringify(responseJson));
        resolve(responseJson);
      })
      .catch(error => {
        //console.log(error);
        reject(error);
      });
  });
}
