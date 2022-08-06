/* --- Mẫu Script 2 --- */

var obj = JSON.parse($response.body);

if(obj.response){
  var tmp1 = JSON.parse(obj.data);
  tmp1.start_time = 1659239790;
  
  obj.response =  JSON.stringify(tmp1);
};
