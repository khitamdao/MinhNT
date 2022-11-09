var obj = JSON.parse($response.body);

obj = {
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

$done({body: JSON.stringify(obj)});
