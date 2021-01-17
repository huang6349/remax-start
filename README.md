# remax-start

[![](https://img.shields.io/badge/remax-2.11.3-ff69b4.svg?style=flat-square)](https://github.com/remaxjs/remax)
[![](https://img.shields.io/badge/react-16.14.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)

使用 remax 开发跨平台小程序。

## 开始

安装依赖

```bash
npm install
```

调试项目

```bash
# 选定要进行开发的平台，如 wechat，并调试
$ npm run dev wechat
or
$ yarn dev wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录。

## 构建

```bash
# 选定要构建的平台，如 wechat，并执行构建
$ npm run build wechat
or
$ yarn build wechat
```

使用小程序开发者工具打开项目下的 `dist/[target]` 目录，上传代码即可。
