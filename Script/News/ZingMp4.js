/*
Unlock Full version zing
Nguyễn Trường Minh
Create by @khitamdao 26/07/2022
Update: 29/07/2022
*/

const avatar = JSON.parse($response.body)["data"]["avatar"];
const name = JSON.parse($response.body)["data"]["name"];
const birthdate = JSON.parse($response.body)["data"]["birthdate"];

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
    "birthdate" : birthdate,
    "euId" : "1a11fdcf75ca9c94c5db",
    "avatar" : avatar,
    "upload" : {
      "status" : 1,
      "remainSlot" : 1000,
      "totalSlot" : 1000
    },
    "name" : name
  },
}
$done({body: JSON.stringify(obj)});
