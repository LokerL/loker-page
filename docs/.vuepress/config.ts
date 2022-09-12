import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Loker小站",
  description: "个人主页",

  base: "/",

  theme,

  plugins: [
    searchPlugin({
      locales: {
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
