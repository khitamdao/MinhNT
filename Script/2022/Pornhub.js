/*
Date: 28/05/2022 by @ddgksf2013

hostname = *.pornhub.com,

# PornHub 网页优化（网址：https://cn.pornhub.com）
^https?:\/\/(cn|www)\.pornhub\.com\/_xa\/ads url reject-dict
^https?:\/\/(cn|www)\.pornhub\.com(\/?$|\/([?]|view|video).*$) url script-response-body https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/2022/Pornhub.js
*/

var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ddgksf2013/Cuttlefish@v0.3/Html/CSS/pornhub.css" type="text/css">');
$done({ body });
