/*
Unlock Full version scribd.com
Nguyễn Trường Minh
Create by @khitamdao 01/08/2022
*/

const id = JSON.parse($response.body)["result"]["id"];

let obj = JSON.parse($response.body);
obj = {
  {
  "status" : {
    "message" : "OK",
    "code" : 0
  },
  "result" : {
    "id" : id,
    "state" : "trialing",
    "limited_validity" : null,
    "next_payment_due" : 6619406400,
    "last_paid_date" : null,
    "total_price" : {
      "value" : 8.9900000000000002,
      "currency" : "USD"
    },
    "created_at" : 1659343624,
    "can_be_canceled" : false,
    "description" : "Monthly recurring membership",
    "type" : "apple",
    "title" : "Month Pass",
    "purchase_valid_to" : null,
    "can_be_renewed" : false,
    "subscription" : true,
    "subscription_free_trial_days" : 30,
    "product_handle" : "com.scribd.premium.monthly.unlimited",
    "subscription_duration" : "1.month"
  }
}
$done({body: JSON.stringify(obj)});
