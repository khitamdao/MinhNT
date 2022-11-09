var body = JSON["parse"]($response["body"]);
var modifiedStatus = "HTTP/1.1 200 OK";
body = {
  data: {
    processAppleReceipt: {
      subscription: {
        status: "active",
        expirationDate: "31.12.2099",
        tier: "premium"
      }
    }
  }
};
$done({ status: modifiedStatus, body: JSON["stringify"](body) });
