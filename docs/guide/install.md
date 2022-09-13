---
title: 安装运行
icon: launch
order: 2
category:
  - 使用指南
tag:
  - 安装运行
star: true
---

## 直接下载安装

- [下载地址 Gitee](https://gitee.com/LGW_space/tts-vue/releases/latest)

- [下载地址 GitHub](https://github.com/LokerL/tts-vue/releases/latest)

- [下载地址 lanzou 云](https://wwn.lanzoul.com/b0f3ype9g) 密码：`em1n`

- 在[GitHubActions](https://github.com/LokerL/tts-vue/actions)有实时推送自动构建的版本。

### 1. 下载并解压

下载最新版本的压缩文件，解压里面的`tts-vue_1.x.x`到任意位置后，运行此安装程序。

![解压](/imgs/zip.png)

### 2. 运行安装程序

::: tip
首次安装可以选择文件保存位置，再次安装会默认选择以前的安装位置，并且会卸载旧版本并重新安装。
:::

选择为当前用户还是所有用户安装，点击下一步。

![安装](/imgs/install.png)

选择安装位置，点击安装。

![安装2](/imgs/install2.png)

:tada:恭喜你，完成了安装步骤，安装成功后即可运行该程序。

![安装完成](/imgs/finish.png)

:smile:尝试点击右下角的`开始转换`按钮，开始你的第一次文本转语音吧

## 通过源码编译

通过源码编译的方法适合有开发能力和编程基础的小伙伴，有能力的小伙伴更推荐下载源码编译运行。可以直接在控制台查看一些输出内容，更方便调试和修改。

### 1. 下载源码

源码可以从以下仓库获取：

github： [https://github.com/LokerL/tts-vue](https://github.com/LokerL/tts-vue "github仓库")

gitee： [https://gitee.com/LGW_space/tts-vue](https://gitee.com/LGW_space/tts-vue "github仓库")

```bash
git clone https://github.com/LokerL/tts-vue.git

OR

git clone https://gitee.com/LGW_space/tts-vue.git
```

或者你可以在仓库直接下载源码的压缩包。

### 2. 安装依赖

在项目根目录运行

::: code-tabs#shell

@tab yarn

```bash
yarn
```

@tab:active npm

```bash
npm i
```

:::

### 3. 运行

::: code-tabs#shell

@tab yarn

```bash
yarn dev
```

@tab:active npm

```bash
npm run dev
```

:::

### 4. 项目打包

::: code-tabs#shell

@tab yarn

```bash
yarn build
```

@tab:active npm

```bash
npm run build
```

:::
