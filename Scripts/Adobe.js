var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "subscriptions" : [
    {
      "subscription_name" : "PDFPack",
      "subscription_state" : "ACTIVE",
      "biz_source" : "",
      "billing_term" : null,
      "sub_ref" : "",
      "subscription_level" : "Plus"
    },
    {
      "subscription_name" : "Files",
      "subscription_state" : "ACTIVE",
      "biz_source" : "",
      "billing_term" : null,
      "sub_ref" : "",
      "subscription_level" : "Plus"
    }
  ]
}
  
body = JSON.stringify(obj);
$done({body});
