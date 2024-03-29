---
title: 常见问题
icon: ask
order: 4
category:
  - 使用指南
tag:
  - 问题
star: true
---

## 问题自查

### 接口对应关系

1. Microsoft Speech API：对应微软演示页面的接口，稳定性不佳，但是免费
2. Edge Speech API：对应Edge浏览器的大声朗读接口，稳定性还行，免费，但是有单次的长度限制，具体限制未知，并且该接口未对文本切片
3. Azure Speech API：微软TTS的正式接口，稳定性最佳，每月50W字符免费，推荐有能力的人使用，需要微软账号。

### Azure Speech API使用，key和region获取

- [微软文本转语音文档](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/index-text-to-speech)
- [微软文本转语音概述](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/text-to-speech)
- [微软文本转语音快速入门](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&pivots=programming-language-javascript#prerequisites) **【重要：请仔细阅读先决条件，里面有如何获取`key`和`region`】**
  - Azure 订阅 - 免费创建订阅
  - 在 Azure 门户中创建语音资源。
  - 获取语音资源密钥和区域。 部署语音资源后，选择“转到资源”以查看和管理密钥。 有关 Azure AI 服务资源的详细信息，请参阅获取资源密钥。
- 拿到key和region后填入设置页面的相应区域。

### 转换失败检查：

1. 点击左上角第4个按钮打开开发者工具
2. 点击console打开控制台
3. 点击custom level**取消**勾选Warnings
4. 点击“开始转换”，并查看console输出内容

### 问题自查：

- **429错误：** AxiosError: Request failed with status code **429** 网络问题。出现429都是网络问题，调用接口过于频繁，应该是微软那边把你的IP给限制了，暂时没有解决方案。
- **400错误：** AxiosError: Request failed with status code **400** 内容错误。文本内出现了不能识别的字符，如：“&”等，或者使用了官方弃用的语音。

## 网络异常？

> 对于网络问题，我觉得这并不是软件问题造成的，也许是我技术不到位，找不到其他的原因。
>
> 猜测现在的问题是连接不上微软的服务器，属于网络问题。解决方案嘛，就像你给别人打电话，没人接听，要去找人去修电话吗？
>
> 从客户端角度，我还暂时想不到解决方案，但是我也会有空去搜索学习其他开发者的解决思路（如果有的话）。如果找到了可行的解决方 案，我会及时更新到软件上的。
>
> **对于拙作在使用过程中的不便，个人技术问题还请见谅。**
>
> 我更希望你可以同时去找找其他的同类软件或程序，佛系一点，没必要花个 1 分钱喷我一下，毕竟你下载和使用过程中是完全免费的。
>
> 如果找到了很稳定且免费的软件，也可以告知我，我也好去学习下经验。

## 转换时间过长或转换失败如何查看原因 ？

- 解决方法：
- 点击`设置`->`打开日志`，查看日志文件

  日志文件保存路径：`C:\Users\用户名\AppData\Roaming\tts-vue\logs`（**为避免日志文件过多，记得定期手动清理日志**）

  停在`创建webscoket连接...`是因为网络问题

  停在`第3次上报...`是你的文本里面有无法解析的内容。PS：现在已知无法解析的内容包括`&`和 SSML 以外的标签语言。

  **经过我多次尝试，转换 4 篇 800 字以上的高考作文用时只要 15-20 秒钟。**

## 如何调整多音字的读音或添加中断或暂停等 ？

- 解决方法：
  使用简单SSML或者拼音
  文本内容输入这个试试，简单的读音例子：

  ```txt
    你好啊
    读<phoneme alphabet="sapi" ph="chong 2 liang 4">重量</phoneme>是不对的
    要读成“重量”
    
    或者使用拼音：
    重量 重复 和颜悦色 和稀泥
    zhòng liàng  chóng fù  hé yán yuè sè  huò xī ní 
  ```
  
  ![image](https://user-images.githubusercontent.com/44148627/187923533-5f0a2375-c685-475e-9e51-d0ef3c3ce19e.png)
  
  停顿与不停顿，试试这个：
  不停顿
  
  ```txt
  你好啊<mstts:ttsbreak strength="none" />今天天气怎么样?
  ```
  
  停顿2秒
  ```txt
  你好啊<break time="2000ms"/>今天天气怎么样?
  ```
  
  ![image](https://github.com/LokerL/loker-page/assets/44148627/ee9323d7-1734-48db-bb76-629bee264ca8)

  详情可以看：[使用音素改善发音](https://docs.microsoft.com/zh-cn/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp#use-phonemes-to-improve-pronunciation)

## 批量转换失败或者听到都是“汪汪汪”(one one one)的声音

- 可能出现问题的原因：

  - 微软那个接口只允许 utf-8，其他编码的文本都会变成 1，英文读起来就是 one，连着就是汪汪汪了。<https://github.com/LokerL/tts-vue/issues/10#issuecomment-1225158716>

- 解决方法：

  1. 已经存在的 ANSI 编码的文本文档，可以点击文件->另存为->编码：UTF-8。
  2. 新建的文本文档保存文件格式及的选择 UTF-8。
     以下节选自官方：

  > - 文件是纯文本 (.txt) 或 SSML 文本 (.txt)。
  > - 文件已编码为包含字节顺序标记 (BOM) 的 UTF-8 格式。
  > - 文件是单个文件，而不是 zip 文件。
  > - 文件包含 400 多个字符（对于纯文本），或 400 个可计费字符（对于 SSML 文本），并且少于 10,000 个段落。
  >   - 对于纯文本，通过点击 Enter/Return 来分隔每个段落。 请参阅纯文本输入示例。
  >   - 对于 SSML 文本，每个 SSML 部分都被视为一个段落。 按不同段落分隔 SSML 部分。 请参阅 SSML 文本输入示例。

## 点击下载没反应，下载文件为文本文档？

- 可能出现问题的原因：

  1. 正确的下载方法是转换完成后点击绿色的下载图标，而不是播放器控件的扩展下载，点播放器控件的下载会默认保存为 xxxx.txt。
  2. 点击绿色下载没反应？因为默认保存位置是桌面，所以要检查当前登录的账户有没有写入桌面文件的权限。

- 解决方法：

  1. 尝试更改默认下载位置为其他盘。
  2. 以管理员身份运行此软件。
  3. 要是想直接用播放器控件下载音乐，可以在保存的时候更改文件名后缀为.mp3 即可。（如果你已经下载完了，可以尝试更改下载的文本文档.txt 后缀名为.mp3）
