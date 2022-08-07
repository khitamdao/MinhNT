/*
Unlock Full version Ulike
Create by @khitamdao 04/8/2022
*/

var obj = JSON.parse($response.body);

obj = {
  "data" : {
    "cycle_unit" : "MONTH",
    "uid" : "0",
    "subscribe_type" : "auto",
    "start_time" : 1659239790,
    "is_cancel_subscribe" : false,
    "authkey" : "cb806392966e0b09d3f344e723fd337c",
    "subscribe_cycle" : 12,
    "flag" : true,
    "subscribe_uid" : "7114995871753717250",
    "product_id" : "beauty_subscription_year",
    "space_cap" : 0,
    "end_time" : 4077660370,
    "is_first_subscribe" : false,
  },
  "response" : {
    "cycle_unit" : "MONTH",
    "uid" : "0",
    "subscribe_type" : "auto",
    "start_time" : 1659239790,
    "is_cancel_subscribe" : false,
    "authkey" : "cb806392966e0b09d3f344e723fd337c",
    "subscribe_cycle" : 12,
    "flag" : true,
    "subscribe_uid" : "7114995871753717250",
    "product_id" : "beauty_subscription_year",
    "space_cap" : 0,
    "end_time" : 4077660370,
    "is_first_subscribe" : false,
  },
  "ret" : "0",
  "sign" : "Jrh/s+DqYEUyO4santP+uDjfgOuT0n2RggzJX3UCbk8j9qyc03C/MKCom71puHjDjz7EoUI+jkktYm6lfulkppVcuI6d6pKDlG56kENIJgHiPTw2zMTDVR56PYCHH9GrIFfkHI+2TQ0CitzX1as31mOKzPoolD/xzF5ds7YxgTk=",
};

$done({body: JSON.stringify(obj)});
