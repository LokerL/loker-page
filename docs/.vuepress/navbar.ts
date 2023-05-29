import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "加入Q群",
    icon: "group",
    children: [
      {
        text: "tts-vue问题反馈群③(474128303)",
        icon: "group",
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=7gvofti_Vl8hyDtZqVxuAwQSyYOaODOT&authKey=WBGICfV9oJXjeXL01KGcxg6FFzgyLgejgle0ZFRQpHMWDha4HftPvqfBGojiSHko&noverify=0&group_code=474128303",
      },
      {
        text: "tts-vue问题反馈群②(702034846)-已满",
        icon: "group",
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=5-vK4VI8ueWoF-cBDl6PjBzfDeWRqmvw&authKey=ZHIxqKeYEGewEZFtKtT5o1UNbTtAEnMOe4vH2haBIxA8edc1U%2F4rn5R9RKSv5%2BRF&noverify=0&group_code=702034846",
      },
      {
        text: "tts-vue问题反馈群①(752801820)-已满",
        icon: "group",
        link: "https://jq.qq.com/?_wv=1027&k=bMNZfGxs",
      },
    ],
  },
]);
