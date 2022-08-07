/* --- Mẫu Script 1 --- */

var obj = JSON.parse($response.body);

obj = {
  "data" : {
  },
};

$done({body: JSON.stringify(obj)});
