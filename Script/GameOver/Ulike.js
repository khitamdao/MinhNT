/* ulike VIP (By @songyangzz)

QuaX
^https:\/\/commerce-.*api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/GameOver/Ulike.js

Surge
^https:\/\/commerce-.*api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/GameOver/Ulike.js,script-update-interval=0

hostname:commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi

*/

let obj = JSON.parse($response.body);
obj.data.end_time=3725012184;
obj.data.is_cancel_subscribe=false;
obj.data.flag=true;
$done({body: JSON.stringify(obj)});
