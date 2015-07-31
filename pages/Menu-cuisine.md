---
layout: page
show_meta: false
title: "菜单"
subheadline: "Layouts of Feeling Responsive"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/Menu-cuisine/"
---
<ul>
    {% for post in site.categories.Menu-cuisine %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
