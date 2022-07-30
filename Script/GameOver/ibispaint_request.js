const terminal_id = JSON.parse($request.body)["terminal_id"];
const receipt_data = JSON.parse($request.body)["receipt_data"];
const language = JSON.parse($request.body)["language"];

var obj = JSON.parse($request.body);
obj = {
  "application_type" : 2,
  "terminal_id" : terminal_id,
  "mode" : "receipt",
  "language" : language,
  "receipt_data" : receipt_data,
  "platform_type" : 1,
  "items" : [
    {
      "price" : 649000,
      "currency" : "VND",
      "item" : 5
    }
  ]
}
$done({body: JSON.stringify(obj)});
