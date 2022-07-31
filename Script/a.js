/*
Unlock Full version Ulike
Nguyễn Trường Minh
Create by @khitamdao 31/07/2022
*/

const authkey = JSON.parse($response.body)["data"]["authkey"];
const subscribe_uid = JSON.parse($response.body)["data"]["subscribe_uid"];
const sign = JSON.parse($response.body)["sign"];
const iresponse = "{\"flag\":false,\"start_time\":1656580777,\"end_time\":6619406400,\"is_first_subscribe\":true,\"is_cancel_subscribe\":false,\"uid\":\"0\",\"subscribe_uid\":\"7114957930496165378\",\"subscribe_type\":\"un-auto\",\"authkey\":\"6fc4abaf90527c12102c0e94e5d4750e\",\"product_id\":\"beauty_subscription_year_alone\",\"subscribe_cycle\":12,\"cycle_unit\":\"MONTH\",\"space_cap\":0}"

let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "cycle_unit" : "MONTH",
    "uid" : "0",
    "subscribe_type" : "un-auto",
    "start_time" : 1656580777,
    "is_cancel_subscribe" : false,
    "authkey" : authkey,
    "subscribe_cycle" : 12,
    "flag" : false,
    "subscribe_uid" : subscribe_uid,
    "product_id" : "beauty_subscription_year_alone",
    "space_cap" : 0,
    "end_time" : 6619406400,
    "is_first_subscribe" : true
  },
  "response" : iresponse.replace("6fc4abaf90527c12102c0e94e5d4750e",authkey).replace("7114957930496165378",subscribe_uid) "{\"flag\":false,\"start_time\":1656580777,\"end_time\":6619406400,\"is_first_subscribe\":true,\"is_cancel_subscribe\":false,\"uid\":\"0\",\"subscribe_uid\":\"7114957930496165378\",\"subscribe_type\":\"un-auto\",\"authkey\":\"6fc4abaf90527c12102c0e94e5d4750e\",\"product_id\":\"beauty_subscription_year_alone\",\"subscribe_cycle\":12,\"cycle_unit\":\"MONTH\",\"space_cap\":0}",
  "ret" : "0",
  "systime" : "1659224637099",
  "sign" : sign
}
$done({body: JSON.stringify(obj)});
