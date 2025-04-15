//https://api.revenuecat.com/v1/(receipts|subscribers)/*


let obj = JSON.parse($response.body);
obj = {
  "request_date_ms" : 1738776071503,
  "request_date" : "2025-02-05T17:21:11Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-06-07T07:31:36Z",
    "original_application_version" : "8.7.8.423",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.readdle.Scanner.subscription.year30" : {
        "original_purchase_date" : "2022-06-07T07:32:56Z",
        "expires_date" : "2029-06-14T07:32:56Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "490001085159114",
        "unsubscribe_detected_at" : "2022-06-07T07:33:42Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "price" : {
          "amount" : 0,
          "currency" : "VND"
        },
        "purchase_date" : "2022-06-07T07:32:56Z",
        "display_name" : null,
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "plus" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-06-07T07:32:56Z",
        "product_identifier" : "com.readdle.Scanner.subscription.year30",
        "expires_date" : "2029-06-14T07:32:56Z"
      }
    },
    "original_purchase_date" : "2022-06-07T07:31:14Z",
    "original_app_user_id" : "$RCAnonymousID:901e3b26a97d48749b58979a88eaff3c",
    "last_seen" : "2025-02-05T17:18:16Z"
  }
}

body = JSON.stringify(obj);
$done({body});
