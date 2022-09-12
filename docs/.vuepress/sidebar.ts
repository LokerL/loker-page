import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  {
    text: "如何使用",
    icon: "creative",
    prefix: "/guide/",
    link: "/guide/",
    children: "structure",
  },
]);
