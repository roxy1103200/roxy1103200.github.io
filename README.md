# Roxy.Log

一个只负责内容展示与个人链接跳转的静态博客。参考 `blog_index_prototype.html` 的深色双栏布局，使用 Jekyll 生成页面，发布到 GitHub Pages。

## 页面

- 首页：个人资料、技术栈、按时间倒序排列的全部文章。
- 文章页：现有 Markdown 正文、代码高亮、返回首页链接。
- 404 页面：失效链接提示与首页入口。
- 个人链接：GitHub 主页和邮箱。

页面不加载应用脚本、第三方字体或外部样式。搜索、分类筛选、主题切换、评论、广告、访问统计、RSS、分页和 PWA 已移除。`sw.js` 仅用于注销旧版离线缓存，不会被新页面注册。

## 本地预览

需要 Ruby 和 Bundler，在项目目录执行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

浏览器打开终端显示的本地地址。生成发布文件：

```sh
bundle exec jekyll build
```

生成结果位于 `_site/`。项目无需 Node.js、npm、Grunt 或 Less。

## 修改内容

在 `_config.yml` 中修改站点标题、`profile` 下的个人介绍、GitHub、邮箱和技术栈。文章数量和标签数量从文章自动统计，不包含虚构的专栏或开源项目数量。

在 `_posts/` 新增 `YYYY-MM-DD-slug.md`：

```markdown
---
layout: post
title: "文章标题"
subtitle: "可选副标题"
date: 2026-10-25 12:00:00 +0800
author: Roxy
tags: [Java, 随笔]
---

正文从这里开始。
```

可选的 `description` 字段可指定首页摘要；未填写时从正文自动截取。标签仅用于展示，不提供筛选。原有文章文件和 `/年/月/日/文章名/` 地址保持不变。

页面样式统一维护在 `assets/site.css`，公共布局在 `_layouts/`，公共片段在 `_includes/`。修改 `baseurl` 后，站内资源和文章链接会自动添加对应的路径前缀。

## 发布

保留 `.github/workflows/jekyll.yml`：推送到 `master` 分支后构建并发布到 GitHub Pages，也可在 Actions 手动运行。本地改动不会自动推送或触发发布。

## 来源

本项目由 [Hux Blog](https://github.com/Huxpro/huxpro.github.io) 精简重构，保留原有 [LICENSE](LICENSE) 与页脚来源信息。
