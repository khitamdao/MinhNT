/*

BeautyPlus unlock vip

*/

re('vip_expires_date":\\d@status":\\d@trial_days":\\d@ended_at":\\d+','vip_expires_date":"2033-12-12 11:11:11"@status":1@trial_days":365@ended_at":1999999999')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}
