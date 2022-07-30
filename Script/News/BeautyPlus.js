/*
Unlock Full version Beauty Plus
Nguyễn Trường Minh
Create by @khitamdao 30/07/2022
*/

let obj = JSON.parse($response.body);
obj = {
  "vip_expires_date" : "2099-12-31"
}
$done({body: JSON.stringify(obj)});
