let obj = JSON.parse($response.body);
obj = {
  "err" : 0,
  "sTime" : 1658760867433,
  "data":{
    "createdTime" : 1653307488306,
    "hasVipTrial" : false,
    "vip" : {
      "startTime" : 1658760867403,
      "vipType" : 1,
      "subscription" : {
        "status" : 1,
        "expireTime" : 6619406400000,
        "platform" : 2
      },
      "expireTime" : 6619406400000
    },
    "obStatus" : 1,
    "vipObStatus" : 0
  },
}
$done({body: JSON.stringify(obj)});
