/***********************************
+ Quantumult X:
[rewrite_local]
# ～ Lake解鎖會員權限（2022-04-20）@ddgksf2013
https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/News/Lake.js

[mitm] 
hostname=revenuecat.lakecoloring.com
--------------------------------------------------
+ Surge 4:
[MITM]
hostname = %APPEND% revenuecat.lakecoloring.com,

[Script]
# Lake (Update 20/04/2022 by @ddgksf2013)
Lake = type=http-response,pattern=https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/News/Lake.js,script-update-interval=0,max-size=0

***********************************/

var cuttlefish ={"warning":"本腳本僅供學習交流使用，禁止轉載售賣","tgchannel":"https://t.me/ddgksf2021","feedback":"https://t.me/ddgksf2013_bot"}
var ddgksf2013={"request_date":"2022-04-20T11:54:41Z","request_date_ms":1591358081473,"subscriptions":{"com.premium.yearly":{"billing_issues_detected_at":null,"expires_date":"2030-02-18T07:52:54Z","is_sandbox":false,"original_purchase_date":"2020-02-11T07:52:55Z","period_type":"normal","purchase_date":"2020-02-11T07:52:54Z","store":"app_store","unsubscribe_detected_at":null}},"subscriber":{"entitlements":{"standard":{"expires_date":"2030-02-18T07:52:54Z","product_identifier":"com.premium.yearly","purchase_date":"2020-02-11T07:52:54Z"}},"first_seen":"2020-05-29T07:59:41Z","last_seen":"2020-06-05T11:46:28Z","management_url":null,"non_subscriptions":{},"original_app_user_id":"httpstmeddgksf2021","original_application_version":"5","original_purchase_date":"2020-05-29T07:47:32Z","other_purchases":{}}};
$done({body : JSON.stringify(ddgksf2013)});
