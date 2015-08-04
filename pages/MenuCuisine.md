---
layout: page
show_meta: false
title: "菜单"
breadcrumb: true
header: no
permalink: "/MenuCuisine/"
#site.categories 里的内容为小写  使用 | debug能够看到变量内容
---

<ul>
    {% for post in site.categories.menucuisine %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
