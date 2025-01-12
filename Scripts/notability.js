/*
Unlock Full version notability
Create by @khitamdao 12/07/2023
*/

const path = "/notability.com/global";
var obj = JSON.parse($response.body);

if ($request.url.indexOf(path) != -1){
  const email = JSON.parse($response.body)["data"]["processAppleReceipt"]["subscription"]["user"]["email"];
  obj = {
  "data" : {
    "processAppleReceipt" : {
      "error" : 0,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "490001395784085",
        "tier" : "premium",
        "refundedDate" : null,
        "refundedReason" : null,
        "isInBillingRetryPeriod" : false,
        "expirationDate" : "2099-12-31T23:59:59.000Z",
        "gracePeriodExpiresAt" : null,
        "overDeviceLimit" : false,
        "expirationIntent" : null,
        "__typename" : "AppStoreSubscription",
        "user" : {
          "id" : "a42431f0-35e6-4067-81a1-b712a851c08c",
          "email" : email,
          "__typename" : "User"
        },
        "status" : "canceled",
        "originalPurchaseDate" : "2023-06-12T12:19:17.000Z"
      },
      "__typename" : "SubscriptionResult"
    }
  }
  }
  };
$done({body: JSON.stringify(obj)});
