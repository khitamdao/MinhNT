var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 66194064000 },
    { spid: "ocr", times: 0, expire_time: 66194064000 },
    { spid: "pdf2doc", times: 0, expire_time: 66194064000 },
    { spid: "pdf_merge", times: 0, expire_time: 66194064000 },
    { spid: "pdf_sign", times: 0, expire_time: 66194064000 },
    { spid: "pdf_split", times: 0, expire_time: 66194064000 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 66194064000,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 66194064000 },
      { memberid: 20, name: "WPS会员", expire_time: 66194064000 },
      { memberid: 12, name: "稻壳会员", expire_time: 66194064000 }
    ]
  },
  wealth: 0,
  expire_time: 66194064000
};

$done({ body: JSON.stringify(obj) });
