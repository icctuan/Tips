// 搜索多个文件夹路径（字符串数组，例如['/usr/bin', '/etc/config']），查找是否有公共路径，若有则返回公共路径（字符串），否则返回 null
// 其实是找字符串的相同前缀

function findSameRoute(routes) {
  if (!Array.isArray(routes)) return null;
  const routesArr = routes
    .map((item) => item.split("/"))
    .sort((a, b) => (a.length > b.length ? -1 : 1));
  const sameRoutes = [];
  for (let i = 0; i < routesArr[0].length; i++) {
    let isAllHave = true;
    for (let j = 0; j < routesArr.length - 1; j++) {
      if (!routesArr[j + 1] || routesArr[j][i] !== routesArr[j + 1][i]) {
        isAllHave = false;
        break;
      }
    }
    isAllHave && sameRoutes.push(routesArr[0][i]);
  }
  return sameRoutes.join("/");
}

const same = findSameRoute(["1/2/3/6", "1/2/3/4/5", "1/2/3/gfhwrsg"]);
console.log(same); // '1/2/3'
