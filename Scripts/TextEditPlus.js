var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "request_date_ms" : 1737354942771,
  "request_date" : "2025-01-20T06:35:42Z",
  "subscriber" : {
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.kairoos.texteditplusai" : {
        "original_purchase_date" : "2024-09-04T17:28:37Z",
        "expires_date" : "2099-12-31T23:59:59Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "490002045946171",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2025-01-20T06:33:12Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "TEXTEDITAI" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2025-01-20T06:33:12Z",
        "product_identifier" : "com.kairoos.texteditplusai",
        "expires_date" : "2099-12-31T23:59:59Z"
      }
    },
    "original_purchase_date" : "2024-09-04T17:28:37Z",
    "original_app_user_id" : "$RCAnonymousID:5944e56e3a3844e59594a1921282869b",
    "last_seen" : "2025-01-20T01:16:38Z"
  }
}

body = JSON.stringify(obj);
$done({body});
