/***********************************
> 應用名稱：Ulike - Define trendy selfie
> 下載地址：https://apps.apple.com/vn/app/ulike-define-trendy-selfie/id1398796436
> 更新時間：2022-05-09
[rewrite_local]
  
# Ulike - Define trendy selfie（2022-05-09）@ddgksf2013
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/commerce.js

[mitm] 
hostname=commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com

***********************************/

const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let ddgksf2013 = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1)
{
    ddgksf2013.data.start_time = 1584674770;
    ddgksf2013.data.end_time = 4077660370;
    ddgksf2013.data.is_cancel_subscribe = false;
    ddgksf2013.data.flag = true;
}
if ($request.url.indexOf(path2) != -1)
{
   ddgksf2013.data = {"isValid": 1,"expiresTs": 4077660370}
}
$done({body: JSON.stringify(ddgksf2013)});
