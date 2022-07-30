/*
Unlock Full version B612
Nguyễn Trường Minh
Create by @khitamdao 30/07/2022
*/

let obj = JSON.parse($response.body);
obj = {
  "result" : {
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1657265653000,
        "productId" : "com.linecorp.b612.vip.oneyear",
        "expireDate" : 6619406400000
      },
    ],
    "activated" : true
  },
}
$done({body: JSON.stringify(obj)});
