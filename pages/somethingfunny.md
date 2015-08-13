---
layout: page
show_meta: false
title: "记录一些有趣东西"
breadcrumb: true
header: no
permalink: "/somethingfunny/"
#site.categories 里的内容为小写  使用 | debug能够看到变量内容
---

<ul>
    {% for post in site.data.somethingfunny %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    <br/>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;
        {{ post.describe }}
    </p>
    {% endfor %}
</ul>
