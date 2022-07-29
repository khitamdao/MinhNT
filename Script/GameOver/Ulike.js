const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let ddgksf2013 = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1)
{
     if(ddgksf2013.response){
           var tmp = JSON.parse(ddgksf2013.response);
           tmp.start_time = 1584674770;
           tmp.end_time = 6619406400;
           tmp.is_cancel_subscribe = false;
           tmp.subscribe_type = "auto";
           tmp.flag = true;
           ddgksf2013.response =  JSON.stringify(tmp);  
     }
    ddgksf2013.data.start_time = 1584674770;
    ddgksf2013.data.end_time = 6619406400;
    ddgksf2013.data.is_cancel_subscribe = false;
    ddgksf2013.data.subscribe_type = "auto";
    ddgksf2013.data.flag = true;
}
if ($request.url.indexOf(path2) != -1)
{
   ddgksf2013.data = {"isValid": 1,"expiresTs": 6619406400}
}
$done({body: JSON.stringify(ddgksf2013)});
