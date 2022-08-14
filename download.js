/* --- Mẫu Script 1 --- */

var obj = JSON.parse($response.body);

obj = {
  "capabilities" : {
    "canMoveChildrenWithinDrive" : true,
    "canComment" : true,
    "canRemoveChildren" : true,
    "canEdit" : true,
    "canAddChildren" : true,
    "canMoveItemIntoTeamDrive" : true,
    "canMoveItemOutOfDrive" : true,
    "canDownload" : true,
    "canMoveItemWithinDrive" : true,
    "canRename" : true
  },
};

$done({body: JSON.stringify(obj)});
