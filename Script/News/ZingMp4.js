/*
Unlock Full version zing
Nguyễn Trường Minh
Update: 26/07/2022
*/
const avatar = JSON.parse($response.body)["data"]["avatar"];
const name = JSON.parse($response.body)["data"]["name"];
const id = JSON.parse($response.body)["data"]["id"];
const csuId = JSON.parse($response.body)["data"]["csuId"];
const euId = JSON.parse($response.body)["data"]["euId"];

let obj = JSON.parse($response.body);
obj = {
  "err" : 0,
  "sTime" : 1658760867433,
  "data" : {
    "id" : id,
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
    "csuId" : csuId,
    "obStatus" : 1,
    "vipObStatus" : 0,
    "segments" : "suggest-playlist-default",
    "ipCountry" : "VN",
    "birthdate" : "",
    "euId" : euId,
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
