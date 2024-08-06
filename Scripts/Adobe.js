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
    }, {
    "subscription_name": "CreatePDF",
    "subscription_level": "Basic",
    "subscription_state": "ACTIVE",
    "sub_ref": "",
    "biz_source": "CCC",
    "billing_term": null
    }, {
    "subscription_name": "ESign",
    "subscription_level": "Basic",
    "subscription_state": "ACTIVE",
    "sub_ref": "",
    "biz_source": "CCC",
    "billing_term": null
    }
  ]
}

body = JSON.stringify(obj);
$done({body});
