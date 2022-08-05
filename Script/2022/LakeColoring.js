/***********************************
Date: 20/04/2022 by @Cuttlefish
Link：https://apps.apple.com/tw/app/id1183717726

[mitm] 
hostname = revenuecat.lakecoloring.com,

# Lake Date: 20/04/2022 by @Cuttlefish
https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/2022/LakeColoring.js

***********************************/

var obj={
  "request_date":"2022-04-20T11:54:41Z",
  "request_date_ms":1591358081473,
  "subscriptions":{
    "com.premium.yearly":{
      "billing_issues_detected_at":null,
      "expires_date":"2030-02-18T07:52:54Z",
      "is_sandbox":false,
      "original_purchase_date":"2020-02-11T07:52:55Z",
      "period_type":"normal",
      "purchase_date":"2020-02-11T07:52:54Z",
      "store":"app_store",
      "unsubscribe_detected_at":null,
    },
  },
  "subscriber":{
    "entitlements":{
      "standard":{
        "expires_date":"2030-02-18T07:52:54Z",
        "product_identifier":"com.premium.yearly",
        "purchase_date":"2020-02-11T07:52:54Z",
      },
    },
    "first_seen":"2020-05-29T07:59:41Z",
    "last_seen":"2020-06-05T11:46:28Z",
    "management_url":null,
    "non_subscriptions":{},
    "original_app_user_id":"khitamdao",
    "original_application_version":"5",
    "original_purchase_date":"2020-05-29T07:47:32Z",
    "other_purchases":{},
  },
};

$done({body : JSON.stringify(obj)});
