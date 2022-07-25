let obj= JSON.parse($response.body);

delete obj.data.lastVipExpireTime;
obj.data.vip= {
  "expireTime": 6619406400,
  "startTime": 1572527803,
  "subscription": {
    "status": 0,
    "expireTime": 6619406400,
    "platform": 2
  },
  "vipType": 1
}

$done({body:JSON.stringify(obj)});
