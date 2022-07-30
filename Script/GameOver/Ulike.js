const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1)
{
     if(obj.response){
           var tmp = JSON.parse(obj.response);
           tmp.start_time = 1584674770;
           tmp.end_time = 6619406400;
           tmp.is_cancel_subscribe = false;
           tmp.subscribe_type = "auto";
           tmp.flag = true;
           obj.response =  JSON.stringify(tmp);  
     }
    obj.data.start_time = 1584674770;
    obj.data.end_time = 6619406400;
    obj.data.is_cancel_subscribe = false;
    obj.data.subscribe_type = "auto";
    obj.data.flag = true;
}
if ($request.url.indexOf(path2) != -1)
{
   obj.data = {"isValid": 1,"expiresTs": 6619406400}
}
$done({body: JSON.stringify(obj)});

/***********************************
> 應用名稱：醒图&Ulike&轻颜相机&vaporcam
> 軟件版本：0.0.0
> 下載地址：https://apps.apple.com/us/app
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 解鎖說明：解鎖高級會員權限
> 更新時間：2022-07-25

# Quantumult X
# Ulike Unlock VIP
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/Ulike.js

# Surge
# Ulike Unlock VIP
http-response https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/Ulike.js

hostname= commerce-*.api.faceu.com, commerce-*.api.faceu.mobi, commerce-*.api.wecut.com, commerce-*.api.wecut.mobi, pay.faceu.com, pay.faceu.mobi, pay.wecut.com, pay.wecut.mobi

***********************************/
