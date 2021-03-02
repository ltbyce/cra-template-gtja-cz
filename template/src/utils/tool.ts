export function convertPath(path: string) {
  return process.env.PUBLIC_URL + path;
}

export function loopMenuList(data, key, callback) {
  let keyName = key.indexOf('/') !== -1 ? 'path' : 'key';
  for (let i = 0; i < data.length; i++) {
    if (data[i][keyName] === key) {
      return callback(data[i]);
    }
    if (data[i].children) {
      loopMenuList(data[i].children, key, callback);
    }
  }
}
