// 解析url参数
const str = "http://s.weibo.com/weibo/Aralic?topnav=1&wvr=6#ehyud";

function getUrlParams(str) {
  // 方法一：正则（主要是练习一下分组命名）
  const regExp = /^http[s]?:\/\/([0-9a-zA-Z.-]+[\/]?)+?(?<params>.*)$/;
  const res = str.match(regExp).groups;
  console.log(res.params.substring(1));

  // 方法二：split
  const res2 = str.indexOf("?") !== -1 ? str.split("?") : null;
  console.log(res2[1]);

  if (!res2) return;

  // 解析参数成对象
  const params = res2[1];
  const totalParam = {};
  if (params.indexOf("#") !== -1) {
    const hashVal = params.split("#")[1];
    totalParam.hash = hashVal;
  }
  params.split("&").forEach((item) => {
    const s = item.split("=");
    totalParam[s[0]] = s[1];
  });

  console.log(totalParam);
}

getUrlParams(str);
