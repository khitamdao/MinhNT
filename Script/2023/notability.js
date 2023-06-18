/*
Phải Kích hoạt gói dùng thử

# Surge
[MITM]
hostname=notability.com,
[Script]
Notability = type=http-response, requires-body=true, pattern=^https?:\/\/notability\.com\/subscriptions, script-path=https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/2023/notability.js

# QuantumultX
# notability.com
hostname = notability.com,
# Notability
^https?:\/\/notability\.com\/subscriptions$ url script-response-body https://raw.githubusercontent.com/khitamdao/MinhNT/master/Script/2023/notability.js
*/

re('"expirationDate":"\\w{4}@"status":"\\w+"','"expirationDate":"9999@"status":"active"');
function re() {
var body = $response.body;
if(!body){
$done({});
}
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
 $done({body});
} 
