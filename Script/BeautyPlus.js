/*

BeautyPlus unlock vip by 渤涵

[rewrite_local]
^https:\/\/api-intl\.mr\.meitu\.com\/v1\/(manual_unlock|subs) url script-response-body buehen0426/Scripts/beautyplus/beautyplus.js

[MITM]
hostname = api-intl.mr.meitu.com



#!name=BeautyPlus Unlock VIP
#!desc=Fake vip: Anh & Video

[MITM]
hostname= %APPEND% api-intl.mr.meitu.com,

[Script]
# > BeautyPlus
beautyplusvip.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/buehen/QuantumultX/b187e6e716fa71903cd43f92200731e32a3153fb/scripts/beautyplus/beautyplus.js,script-update-interval=0,type=http-response,pattern=^https:\/\/api-intl\.mr\.meitu\.com/.*/subs_offer_elg$


*/

re('vip_expires_date":\\d@status":\\d@trial_days":\\d@ended_at":\\d+','vip_expires_date":"2033-12-12 11:11:11"@status":1@trial_days":365@ended_at":1999999999')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}
