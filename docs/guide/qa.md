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

## 转换时间过长或转换失败如何查看原因 ？

- 解决方法：
- 点击`设置`->`打开日志`，查看日志文件

  日志文件保存路径：`C:\Users\用户名\AppData\Roaming\tts-vue\logs`（**记得定期手动清理日志**）

  停在`创建webscoket连接...`是因为网络问题

  停在`第3次上报...`是你的文本里面有无法解析的内容

## 如何调整多音字的读音或添加中断或暂停等 ？

- 解决方法：

  文本内容输入这个试试，简单的读音例子：

  ```txt
    你好啊
    读<phoneme alphabet="sapi" ph="chong 2 liang 4">重量</phoneme>是不对的
    要读成“重量”
  ```

  ![image](https://user-images.githubusercontent.com/44148627/187923533-5f0a2375-c685-475e-9e51-d0ef3c3ce19e.png)
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
