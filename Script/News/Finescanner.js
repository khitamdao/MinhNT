/*
Unlock Full version Abbyy Finescanner
Nguyễn Trường Minh
Create by @khitamdao 29/07/2022
*/

let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "type" : "adapty_analytics_profile",
    "id" : "26c46a20-86c3-4966-aa0c-daf96814c127",
    "attributes" : {
      "app_id" : "b93cecdb-a0a5-49a3-99ce-3d61e264d25f",
      "total_revenue_usd" : 14.385658067337124,
      "customer_user_id" : null,
      "subscriptions" : {
        "com.abbyy.finescanner.forever.30Mar2020" : {
          "vendor_transaction_id" : "490000965347432",
          "billing_issue_detected_at" : null,
          "is_lifetime" : true,
          "store" : "app_store",
          "vendor_product_id" : "com.abbyy.finescanner.forever.30Mar2020",
          "vendor_original_transaction_id" : "490000965347432",
          "will_renew" : false,
          "renewed_at" : null,
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : true,
          "activated_at" : "2021-12-24T09:36:25.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : null,
          "expires_at" : null,
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {
        "UserHadTrial" : 0,
        "UserYearSubscriptionCount" : 0,
        "ScansCount" : 0,
        "AppUpdated" : 1,
        "UserAutorenewsCount" : 0,
        "UserDidOpenStore" : 1658789369.3775558
      },
      "profile_id" : "26c46a20-86c3-4966-aa0c-daf96814c127",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : true,
          "vendor_product_id" : "com.abbyy.finescanner.forever.30Mar2020",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : null,
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : null,
          "expires_at" : null,
          "will_renew" : false,
          "is_active" : true,
          "active_promotional_offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2021-12-24T09:36:25.000000+0000",
          "renewed_at" : null,
          "is_refund" : false,
          "active_introductory_offer_type" : null,
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : true,
      "non_subscriptions" : null
    }
  }
}
$done({body: JSON.stringify(obj)});
