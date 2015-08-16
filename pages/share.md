---
layout: page
show_meta: false
title: "分享"
breadcrumb: true
header: no
permalink: "/share/"
#site.categories 里的内容为小写  使用 | debug能够看到变量内容
#  (*dropdown:*)
#  (*- title: "菜式分享"*)
#    (*url: "/share/cuisine"*)
#  (*- title: "开心分享"*)
#    (*url: "/share/funny"*)
#  (*- title: "资讯分享"*)
#    (*url: "/shar/info"*)
---

#### 开心分享
<ul>
    {% for post in site.categories.share %}
    {% if post.subcategory == "funny" %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
    {% endfor %}
</ul>
