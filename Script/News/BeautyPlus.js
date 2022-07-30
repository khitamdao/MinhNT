/*
Unlock Full version Beauty Plus
Nguyễn Trường Minh
Create by @khitamdao 30/07/2022
*/

let obj = JSON.parse($response.body);
obj = {
  "vip_expires_date" : 6619406400000
}
$done({body: JSON.stringify(obj)});
