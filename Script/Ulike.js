/*
# Quantumult X
# Ulike Unlock VIP
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/Ulike.js

# Surge
# Ulike Unlock VIP
http-response https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/Ulike.js

hostname= commerce-*.api.faceu.com, commerce-*.api.faceu.mobi, commerce-*.api.wecut.com, commerce-*.api.wecut.mobi, pay.faceu.com, pay.faceu.mobi, pay.wecut.com, pay.wecut.mobi

*/

const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.start_time = 1584674770;
obj.data.end_time = 4077660370;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
}
if ($request.url.indexOf(path2) != -1){
 obj.data = {
    "isValid": 1,
    "expiresTs": 4077660370
}
}
$done({body: JSON.stringify(obj)});