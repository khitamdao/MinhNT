/*
Unlock Full version NhacCuaTui
Create by @khitamdao 19/06/2023
*/

let obj = JSON.parse($response.body);
let url = $request.url;
const user = "/user/account/info";
if(url.indexOf(user) != -1)
{
  obj.data.vipExpire= "31.12.2099";
  obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
