let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "cycle_unit" : "MONTH",
    "uid" : "0",
    "subscribe_type" : "un-auto",
    "start_time" : 1656580777,
    "is_cancel_subscribe" : false,
    "authkey" : "42d7d6efce7244017a4ca6fc8f6ceb64",
    "subscribe_cycle" : 12,
    "flag" : true,
    "subscribe_uid" : "7114957930496165378",
    "product_id" : "beauty_subscription_year",
    "space_cap" : 0,
    "end_time" : 6619406400,
    "is_first_subscribe" : false
  },
  "response" : "{\"flag\":true,\"start_time\":1656580777,\"end_time\":6619406400,\"is_first_subscribe\":false,\"is_cancel_subscribe\":false,\"uid\":\"0\",\"subscribe_uid\":\"7114957930496165378\",\"subscribe_type\":\"un-auto\",\"authkey\":\"42d7d6efce7244017a4ca6fc8f6ceb64\",\"product_id\":\"beauty_subscription_year\",\"subscribe_cycle\":12,\"cycle_unit\":\"MONTH\",\"space_cap\":0}",
  "systime" : "1657176965562",
  "errmsg" : "success",
  "ret" : "0"
};
$done({body: JSON.stringify(obj)});
