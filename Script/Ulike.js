/*

Ulike unlock vip by 渤涵

[rewrite_local]
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://github.com/rewardhunter066/tonyzkm/raw/master/Script/qyxj.js

[MITM]
hostname = commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com

*/

let obj = JSON.parse($response.body);
obj.data.end_time=3725012184;
obj.data.is_cancel_subscribe=false;
obj.data.flag=true;
$done({body: JSON.stringify(obj)});

//轻颜相机
