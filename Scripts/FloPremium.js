/* Flo Premium
hostname = api.owhealth.com,
^https?:\/\/api\.owhealth\.com\/subscriptions\/v1\/apple url script-response-body FloPremium.js
FloPremium = type=http-response, requires-body=true, pattern=^https?:\/\/api\.owhealth\.com\/subscriptions\/v1\/apple, script-path=FloPremium.js
*/

let obj = JSON.parse($response.body);
obj = {
  "status" : "active",
  "transaction_id" : 490002046392694,
  "service_level" : 1,
  "expiration_date" : "2099-12-31T14:37:21Z",
  "auto_renew_status" : false,
  "used_intro_gr1" : true,
  "features" : [
    "premium",
    "report_for_doctor",
    "symptom_checker"
  ],
  "subscription_manager" : null
};
$done({body: JSON.stringify(obj)});
