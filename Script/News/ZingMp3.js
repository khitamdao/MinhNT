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
    "csuId" : "cs1.67d1800f080ae154b81b",
    "euId" : "1a11fdcf75ca9c94c5db",
    "avatar" : avatar,
    "name" : name,
    "segments" : "suggest-playlist-default",
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
  },
}
$done({body: JSON.stringify(obj)});
