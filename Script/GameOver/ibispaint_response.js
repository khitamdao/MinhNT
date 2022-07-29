let obj = JSON.parse($response.body);
obj = {
  "result" : 1,
  "purchases" : [
    {
      "last_expire_date" : 6619406400000,
      "cancel_date" : null,
      "next_purchase_id" : "ibisPaintXPrimeYearly",
      "renew_state" : true,
      "item" : 5,
      "test_flag" : false,
      "last_purchase_id" : "490001108492104",
      "token" : null,
      "first_purchase_date" : 1657263798000,
      "cancel_reason" : 0,
      "trial_mode" : false,
      "last_purchase_date" : 1657263797000,
      "first_purchase_id" : "490001108492104"
    }
  ]
}
$done({body: JSON.stringify(obj)});
