/* Unlock Full version myTunerRadio
Create by @khitamdao 19/12/2022 */

let obj = JSON.parse($response.body);
obj = {
  "environment" : "Production",
  "receipt" : {
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1671349136000",
        "expires_date" : "2099-12-31 23:59:59 Etc/GMT",
        "expires_date_pst" : "2099-12-31 23:59:59 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "490001237623588",
        "is_trial_period" : "true",
        "original_transaction_id" : "490001237623588",
        "purchase_date" : "2022-12-18 07:38:56 Etc/GMT",
        "product_id" : "mobi.digitalminds.itunerfree.stopads.weekly",
        "original_purchase_date_pst" : "2022-12-17 23:38:57 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1671349137000",
        "web_order_line_item_id" : "490000562682341",
        "expires_date_ms" : "4102419599000",
        "purchase_date_pst" : "2022-12-17 23:38:56 America/Los_Angeles",
        "original_purchase_date" : "2022-12-18 07:38:57 Etc/GMT"
      }
    ]
  },
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1671349136000",
      "expires_date" : "2099-12-31 23:59:59 Etc/GMT",
      "expires_date_pst" : "2099-12-31 23:59:59 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "490001237623588",
      "is_trial_period" : "true",
      "original_transaction_id" : "490001237623588",
      "purchase_date" : "2022-12-18 07:38:56 Etc/GMT",
      "product_id" : "mobi.digitalminds.itunerfree.stopads.weekly",
      "original_purchase_date_pst" : "2022-12-17 23:38:57 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20634027",
      "original_purchase_date_ms" : "1671349137000",
      "web_order_line_item_id" : "490000562682341",
      "expires_date_ms" : "4102419599000",
      "purchase_date_pst" : "2022-12-17 23:38:56 America/Los_Angeles",
      "original_purchase_date" : "2022-12-18 07:38:57 Etc/GMT"
    }
  ]
};
$done({body: JSON.stringify(obj)});