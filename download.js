/* --- Mẫu Script 1 --- */

var obj = JSON.parse($response.body);

if(obj.response){
  var tmp1 = JSON.parse(obj.data);
  tmp1.capabilities.canMoveChildrenWithinDrive = true;
  tmp1.capabilities.canComment = true;
  tmp1.capabilities.canRemoveChildren = true;
  tmp1.capabilities.canEdit = true;
  tmp1.capabilities.canAddChildren = true;
  tmp1.capabilities.canMoveItemIntoTeamDrive = true;
  tmp1.capabilities.canMoveItemOutOfDrive = true;
  tmp1.capabilities.canDownload = true;
  tmp1.capabilities.canMoveItemWithinDrive = true;
  tmp1.capabilities.canRename = true;
  
  obj.response =  JSON.stringify(tmp1);
};

$done({body: JSON.stringify(obj)});
