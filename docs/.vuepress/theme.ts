import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://github.com/LokerL",

  author: {
    name: "Loker",
    url: "https://github.com/LokerL",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "LokerL/loker-page",

  repoLabel: "GitHub",

  repoDisplay: true,

  docsDir: "demo/src",

  darkmode: "toggle",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "我心有猛虎，细嗅蔷薇。",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      enableAll: false,
      codetabs: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
