/*
Unlock Full version zing
Nguyễn Trường Minh
Update: 26/07/2022
*/

const avatar = JSON.parse($response.body)["data"]["avatar"];
const name = JSON.parse($response.body)["data"]["name"];

let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "id" : 1085568223,
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
    "csuId" : "cs1.67d1800f080ae154b81b",
    "obStatus" : 1,
    "euId" : "1a11fdcf75ca9c94c5db",
    "avatar" : avatar,
    "name" : name
  },
}
$done({body: JSON.stringify(obj)});

/*
const avatar = JSON.parse($response.body)["data"]["avatar"];
const name = JSON.parse($response.body)["data"]["name"];

let obj = JSON.parse($response.body);
obj = {
  "err" : 0,
  "sTime" : 1658760867433,
  "data" : {
    "id" : 1085568223,
    "createdTime" : 1653307488306,
    "hasVipTrial" : false,
    "boolAtt" : 18,
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
    "csuId" : "cs1.67d1800f080ae154b81b",
    "obStatus" : 1,
    "vipObStatus" : 0,
    "segments" : "suggest-playlist-default",
    "ipCountry" : "VN",
    "birthdate" : "",
    "euId" : "1a11fdcf75ca9c94c5db",
    "avatar" : avatar,
    "facebookId" : "",
    "vipBanner" : 0,
    "upload" : {
      "status" : 1,
      "remainSlot" : 1000,
      "totalSlot" : 1000
    },
    "name" : name,
    "gender" : 0
  },
  "msg" : "Success"
}
$done({body: JSON.stringify(obj)});
*/
