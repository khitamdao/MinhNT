let obj = JSON.parse($response.body);
let url = $request.url;
const user = "/v1/subscription/user_info";
if(url.indexOf(user) != -1)
{
  obj = {
    "data" : {
      "cycle_unit" : "MONTH",
      "subscribe_type" : "un-auto",
      "subscribe_cycle" : 12,
      "flag" : true,
      "start_time" : 1656580777,
      "end_time" : 4102419599
    },
    "response" : "{\"flag\":true,\"start_time\":1656580777,\"end_time\":6619406400,\"subscribe_type\":\"un-auto\",\"subscribe_cycle\":12,\"cycle_unit\":\"MONTH\"}",
    "ret" : "0"
  };
}
$done({body: JSON.stringify(obj)});