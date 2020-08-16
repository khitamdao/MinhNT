/*QX:
^https?:\/\/(ios|apple)\.fuliapps\.com\/ url script-response-body https://raw.githubusercontent.com/khitamdao/script/master/PhimTaiLieu.js

Surge4：
http-response ^https?:\/\/(ios|apple)\.fuliapps\.com\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/khitamdao/script/master/PhimTaiLieu.js

Surge & QX MITM = *.fluids.com
*/

var body = $response.body;
var url = $request.url;
const path1 = "/ucp/index";
const path2 = "/getGlobalData";
const path3 = "/vod/reqplay/"
if (url.indexOf(path1) != -1){
  let obj = JSON.parse(body);
  obj.data.uinfo.down_daily_remainders = "666";
  obj.data.uinfo.play_daily_remainders = "666";
  obj.data.uinfo["next_upgrade_need"] = "0";
  obj.data.user.isvip = "1";
  obj.data.user.nickname = "Vip_share";
  obj.data.user.gicon = "V5";
  obj.data.user.gid = "5";
  obj.data.user.avatar = "https://raw.githubusercontent.com/khitamdao/script/master/PhimTaiLieu.js";
  body = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
  obj.data.app_launch_times_adshow = "0";
  obj.data.adgroups = "";
  obj.data.iOS_adgroups ="";
  body = JSON.stringify(obj);
}
if (url.indexOf(path3) != -1){
  let obj = JSON.parse(body);
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
	body = JSON.stringify(obj);
}
$done({body});
