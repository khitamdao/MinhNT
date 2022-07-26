let obj = JSON.parse($response.body);
obj = {
  "result":1,"purchases":[{"cancel_date":null,"cancel_reason":0,"first_purchase_date":1657263798000,"first_purchase_id":"490001108492104","item":5,"last_expire_date":6619406400000,"last_purchase_date":1657263797000,"last_purchase_id":"490001108492104","next_purchase_id":"ibisPaintXPrimeYearly","renew_state":true,"test_flag":false,"token":null,"trial_mode":true}]
}
$done({body: JSON.stringify(obj)});
