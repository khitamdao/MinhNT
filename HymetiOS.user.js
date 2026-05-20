// ==UserScript==
// @name         Radar Hymetnet
// @namespace    http://tampermonkey.net/
// @version      1.3.6
// @description  Tiện ích hỗ trợ làm bản tin Dự báo Dông v1.3.6
// @match        *://hymetnet.gov.vn/*
// @grant        none
// @run-at       document-idle
// ==UserScript==

(function() {
    'use strict';

    // - Khai báo Cấu trúc biểu mẫu Bản tin mẫu dưới dạng chuỗi HTML hoàn chỉnh
    const BAN_TIN_MAU_HTML = `<html xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Bản tin Dông</title>
<style>
    @page WordSection1 { size: 21.0cm 29.7cm; margin: 2.0cm 2.0cm 2.0cm 2.0cm; }
    div.WordSection1 { page: WordSection1; }
    body, p, table, td { font-family: "Times New Roman", serif; font-size: 14.0pt; }
    p { margin: 0; }
    .content-p {
        margin-top: 6.0pt; margin-bottom: 0pt; text-align: justify;
        text-indent: 36.0pt; line-height: 110%;
    }
</style>
</head>
<body>
<div class="WordSection1">
    <p align="center" style="text-align:center; font-size:14.0pt;"><b>BẢN TIN CẢNH BÁO DÔNG, LỐC, SÉT, MƯA ĐÁ VÀ MƯA LỚN CỤC BỘ</b></p>
    <p align="center" style="text-align:center; font-size:14.0pt;"><b>TỈNH {TINH_WORD_UPPER}</b></p>
    <br>
    <p class="content-p"><b>1. Thực trạng trong những giờ qua:</b></p>
    <p class="content-p">{DONG_TEXT}</p>
    <p class="content-p"><i>(Nguồn từ hệ thống định vị sét, ảnh radar thời tiết quốc gia, http://hymetnet.gov.vn)</i></p>
    <p class="content-p"><b>2. Cảnh báo khả năng xuất hiện:</b></p>
    <p class="content-p">{DUBAO_TEXT}</p>
    <p class="content-p">Trong cơn dông có khả năng xảy ra lốc, sét, mưa đá và gió giật mạnh, làm gãy đổ cây cối, hư hại nhà cửa, các công trình giao thông và cơ sở hạ tầng gây nguy hiểm cho tính mạng con người.</p>
    <p class="content-p"><b>3. Cảnh báo cấp độ rủi ro thiên tai do lốc, sét, mưa đá:</b> Cấp 1</p>
    <p class="content-p"><b>Đề nghị:</b> Các cơ quan, đơn vị và nhân dân theo dõi, phòng tránh.</p>
    <p class="content-p"><i>Tin phát lúc: {GIO_PHAT}.</i></p>
</div>
</body>
</html>`;

    // - Khai báo Cấu trúc biểu mẫu Hồ sơ mẫu dưới dạng chuỗi HTML hoàn chỉnh
    const HO_SO_MAU_HTML = `<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<style>
    body, p, table, td { font-family: "Times New Roman", serif; font-size: 13.0pt; }
    p.MsoNormal, p.MsoBodyText, p.TableParagraph { margin: 0; line-height: 110%; text-align: justify; }
</style>
</head>
<body lang=EN-US link=blue vlink=purple style='tab-interval:36.0pt;word-wrap:break-word'>
<div class=WordSection1>
<p class=MsoNormal align=center style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;text-align:center'><b><span lang=vi>HỒ SƠ TIN CẢNH BÁO DÔNG, LỐC, SÉT, MƯA ĐÁ VÀ MƯA LỚN CỤC BỘ</span></b></p>
<p class=MsoNormal align=center style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;text-align:center'><b><span lang=vi>TỈNH {TINH_WORD_UPPER}</span></b></p>
<p class=MsoBodyText style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;text-indent:36.0pt;line-height:110%'><span lang=vi>Thời gian phát tin: {GIO_PHAT} {DATE}.</span></p>
<p class=MsoBodyText style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;text-indent:36.0pt;line-height:110%'><span lang=vi>Đơn vị dự báo: Đài Khí tượng Thuỷ văn tỉnh {TINH_WORD_CAMEL}.</span></p>
<p class=MsoBodyText style='margin-top:6.0pt;margin-right:0cm;margin-bottom:6.0pt;margin-left:0cm;text-indent:36.0pt;line-height:110%'><span lang=vi>Trưởng ca cảnh báo: {FORECASTER_NAME}. Các dự báo viên: {OTHER_FORECASTER_NAME}.</span></p>
<div align=center>
<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=5 width="100%" style='border-collapse:collapse; border:1px solid black;'>
 <tr style='height:14.95pt'>
  <td colspan=2 valign=top style='background:#f2f2f2; padding:5pt;'>
  <p class=TableParagraph><b><i style='mso-bidi-font-style:normal'><span lang=vi style='font-size:13.0pt;'>1. Thu thập, xử lý các loại thông tin dữ liệu</span></i></b></p>
  </td>
 </tr>
 <tr style='height:29.85pt'>
  <td width="30%" valign=top style='padding:5pt;'>
  <p class=TableParagraph><span lang=vi style='font-size:13.0pt;'>Số liệu vệ tinh, Radar, định vị sét</span></p>
  </td>
  <td valign=top style='padding:5pt;'>
  <p class=TableParagraph><span lang=vi style='font-size:13.0pt;'>Vùng phản hồi vô tuyến bão/dông phát triển mạnh với độ phản hồi vô tuyến lớn nhất đạt giá trị cao trên khu vực.</span></p>
  </td>
 </tr>
 <tr style='height:14.95pt'>
  <td colspan=2 valign=top style='background:#f2f2f2; padding:5pt;'>
  <p class=TableParagraph><b><i style='mso-bidi-font-style:normal'><span lang=vi style='font-size:13.0pt;'>2. Phân tích, dự báo, cảnh báo</span></i></b></p>
  </td>
 </tr>
 <tr>
  <td valign=top style='padding:5pt;'><span lang=vi style='font-size:13.0pt;'>Hiện trạng dông sét</span></td>
  <td valign=top style='padding:5pt;'><span lang=vi style='font-size:13.0pt;'>{DONG_TEXT}</span></td>
 </tr>
 <tr>
  <td valign=top style='padding:5pt;'><span lang=vi style='font-size:13.0pt;'>Khả năng phát triển</span></td>
  <td valign=top style='padding:5pt;'><span lang=vi style='font-size:13.0pt;'>{DUBAO_TEXT}</span></td>
 </tr>
 <tr style='height:14.95pt'>
  <td colspan=2 valign=top style='background:#f2f2f2; padding:5pt;'>
  <p class=TableParagraph><b><i style='mso-bidi-font-style:normal'><span lang=vi style='font-size:13.0pt;'>3. Kết luận</span></i></b></p>
  </td>
 </tr>
 <tr>
  <td colspan=2 valign=top style='padding:5pt;'>
  <p class=MsoNormal style='text-align:justify;'><span style='font-size:13.0pt;'>{DUBAO_TEXT}</span></p>
  <p class=MsoNormal style='margin-top:6.0pt; text-align:justify;'><span lang=vi style='font-size:13.0pt;'>Trong cơn dông có khả năng xảy ra lốc, sét, mưa đá và gió giật mạnh, làm gãy đổ cây cối, hư hại nhà cửa, các công trình giao thông và cơ sở hạ tầng gây nguy hiểm cho tính mạng con người.</span></p>
  </td>
 </tr>
</table>
</div>
</div>
</body>
</html>`;

    // - Thiết lập Bảng dữ liệu tọa độ hiệu chuẩn các trạm Radar thời tiết
    const CALIBRATED_BOUNDS = {
        "/radar": { "linear": [97.0350, 114.9650, 7.6650, 25.2600], "mercator": [97.0200, 114.9800, 7.1100, 25.2150] },
        "/radar/PHA": { "linear": [100.6800, 106.4600, 18.8700, 24.2700], "mercator": [100.6800, 106.4600, 18.8450, 24.2450] },
        "/radar/VTR": { "linear": [102.4574, 108.2592, 18.7180, 24.1110], "mercator": [102.4574, 108.2592, 18.6980, 24.0910] },
        "/radar/PLI": { "linear": [103.8150, 109.5750, 18.0950, 23.5085], "mercator": [103.7954, 109.6045, 18.0950, 23.5085] }
    };

    // - Khởi tạo Đối tượng ảnh thanh màu hiệu chuẩn DBZ trực tiếp từ máy chủ
    window.radarColorBarImg = new Image();
    window.radarColorBarImg.crossOrigin = "Anonymous";
    window.radarColorBarImg.src = "http://hymetnet.gov.vn/images/DBZ.jpg";

    // - Hàm Phân tích giá trị phản hồi cường độ DBZ từ điểm ảnh màu sắc quét được
    window.getDBZ = function(r, g, b) {
        if (r === 0 && g === 0 && b === 0) return 0;
        if (r === 255 && g === 255 && b === 255) return 0;
        if (r === 204 && g === 255 && b === 255) return 5;
        if (r === 0 && g === 236 && b === 236) return 10;
        if (r === 1 && g === 160 && b === 246) return 15;
        if (r === 0 && g === 0 && b === 246) return 20;
        if (r === 0 && g === 255 && b === 0) return 25;
        if (r === 0 && g === 200 && b === 0) return 30;
        if (r === 0 && g === 144 && b === 0) return 35;
        if (r === 255 && g === 255 && b === 0) return 40;
        if (r === 231 && g === 192 && b === 0) return 45;
        if (r === 255 && g === 144 && b === 0) return 50;
        if (r === 255 && g === 0 && b === 0) return 55;
        if (r === 214 && g === 0 && b === 0) return 60;
        if (r === 192 && g === 0 && b === 0) return 65;
        if (r === 255 && g === 0 && b === 255) return 70;
        if (r === 153 && g === 85 && b === 201) return 75;
        
        let colors = [
            {r:204,g:255,b:255,v:5}, {r:0,g:236,b:236,v:10}, {r:1,g:160,b:246,v:15},
            {r:0,g:0,b:246,v:20}, {r:0,g:255,b:0,v:25}, {r:0,g:200,b:0,v:30},
            {r:0,g:144,b:0,v:35}, {r:255,g:255,b:0,v:40}, {r:231,g:192,b:0,v:45},
            {r:255,g:144,b:0,v:50}, {r:255,g:0,b:0,v:55}, {r:214,g:0,b:0,v:60},
            {r:192,g:0,b:0,v:65}, {r:255,g:0,b:255,v:70}, {r:153,g:85,b:201,v:75}
        ];
        let minD = 999999, val = 0;
        for (let c of colors) {
            let d = (r-c.r)**2 + (g-c.g)**2 + (b-c.b)**2;
            if (d < minD) { minD = d; val = c.v; }
        }
        return val;
    };

    // - Hàm Định vị thực thể bản đồ Leaflet lớp nền hệ thống toàn cục
    function getMap() {
        let lMap = null;
        if (window.map && window.map.fitBounds) lMap = window.map;
        else if (window.mymap && window.mymap.fitBounds) lMap = window.mymap;
        else if (window.radarMap && window.radarMap.fitBounds) lMap = window.radarMap;
        else {
            let containers = document.querySelectorAll('.leaflet-container');
            for (let i = 0; i < containers.length; i++) {
                for (let key in containers[i]) {
                    if (key.startsWith('__leaflet_')) {
                        let obj = containers[i][key];
                        if (obj && obj._map) lMap = obj._map;
                        else if (obj && obj.fitBounds) lMap = obj;
                    }
                }
                if (lMap) break;
            }
        }
        return lMap;
    }

    // - Các Hàm toán học chuyển đổi hệ tọa độ trắc địa Mercator phẳng phục vụ vẽ bản đồ
    function latToY(lat) {
        return Math.log(Math.tan((lat * Math.PI) / 360 + Math.PI / 4));
    }
    function yToLat(y) {
        return (360 / Math.PI) * Math.atan(Math.exp(y)) - 90;
    }

    // - Hàm Chuẩn hóa tên chuỗi địa danh hành chính tiếng Việt để so sánh chuỗi cốt lõi
    function getCoreName(str) {
        if (!str) return "";
        return str.toLowerCase()
            .replace(/tỉnh|thành phố|thị xã|huyện|quận|thị trấn|xã|phường/g, "")
            .normalize("NCD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/\s+/g, "")
            .trim();
    }

    // - Hàm Giải mã đa giác dữ liệu hình học không gian vùng địa giới xã phường
    function decodeCommune(c, g) {
        if (c._d) return c._d;
        let outerRings = [];
        let minG = 999, minL = 999, maxG = -999, maxL = -999;
        
        function parseRing(ring) {
            let parsed = [];
            ring.forEach(pt => {
                let lng = pt[0], lat = pt[1];
                parsed.push([lng, lat]);
                if (lng < minG) minG = lng;
                if (lat < minL) minL = lat;
                if (lng > maxG) maxG = lng;
                if (lat > maxL) maxL = lat;
            });
            outerRings.push(parsed);
        }

        if (c.geometry) {
            if (c.geometry.type === "Polygon") {
                parseRing(c.geometry.coordinates[0]);
            } else if (c.geometry.type === "MultiPolygon") {
                c.geometry.coordinates.forEach(p => parseRing(p[0]));
            }
        } else if (c.coordinates) {
            if (c.type === "Polygon") {
                parseRing(c.coordinates[0]);
            } else if (c.type === "MultiPolygon") {
                c.coordinates.forEach(p => parseRing(p[0]));
            }
        }
        return { outerRings, bbox: [minG, minL, maxG, maxL] };
    }

    // - Hàm Phân nhóm và trích xuất ranh giới tỉnh từ cấu trúc TopoJSON xã phường
    function getProvinceBoundaries(g) {
        let provMap = new Map();
        let communes = g.objects ? Object.values(g.objects).flatMap(o => o.geometries || []) : g;
        
        communes.forEach(c => {
            let pName = c.properties.tenTinh || c.properties.TEN_TINH;
            if (!pName) return;
            if (!provMap.has(pName)) provMap.set(pName, { communes: [], minG: 999, minL: 999, maxG: -999, maxL: -999 });
            let prov = provMap.get(pName);
            let d = c._d || decodeCommune(c, g);
            c._d = d; 
            prov.communes.push(c);
            prov.minG = Math.min(prov.minG, d.bbox[0]);
            prov.minL = Math.min(prov.minL, d.bbox[1]);
            prov.maxG = Math.max(prov.maxG, d.bbox[2]);
            prov.maxL = Math.max(prov.maxL, d.bbox[3]);
        });

        let provBoundaries = [];
        provMap.forEach((data, name) => {
            provBoundaries.push({ name, communes: data.communes, bbox: [data.minG, data.minL, data.maxG, data.maxL] });
        });
        return provBoundaries;
    }

    // - Hàm Khởi tạo vẽ lớp phủ ranh giới hành chính trực tiếp kiểm tra độ đồng bộ ảnh nền
    async function drawTestOverlay() {
        let mainProvInput = document.getElementById('ui-mainProv').value;
        if (!mainProvInput || mainProvInput.trim() === "") {
            alert("Phải nhập tỉnh cần lấy! Hãy gõ tên tỉnh vào ô cấu hình.");
            return;
        }

        let imgs = Array.from(document.querySelectorAll('img')).filter(i => (i.src.includes('dataout') || i.src.includes('radar') || i.src.includes('VQVN')) && i.naturalWidth > 200);
        imgs.sort((a, b) => b.naturalWidth - a.naturalWidth);
        let radarImg = imgs[0];
        if (!radarImg) { alert("Không tìm thấy ảnh Radar trên trang hiện tại!"); return; }

        if (!window.cachedGeoData) window.cachedGeoData = await (await fetch('http://hymetnet.gov.vn/DiaPhan_Xa_2025_min.json')).json();
        let g = window.cachedGeoData, communes = g.objects ? Object.values(g.objects).flatMap(o => o.geometries || []) : g;
        
        let mainP = getCoreName(mainProvInput);
        let subStr = document.getElementById('ui-subProvs').value;
        let subMap = new Map();
        if (subStr.trim() !== "") subStr.split(',').forEach(s => { let n = getCoreName(s); if(n) subMap.set(n, s.trim()); });

        let provsToDraw = [];
        communes.forEach(c => {
            let tName = getCoreName(c.properties.tenTinh || c.properties.TEN_TINH);
            if (tName.includes(mainP) || subMap.has(tName)) {
                provsToDraw.push(c);
            }
        });

        let pathKey = window.location.pathname;
        let boundCfg = CALIBRATED_BOUNDS[pathKey] || CALIBRATED_BOUNDS["/radar"];
        let isMercator = document.getElementById('ui-projection').value === "mercator";
        let bounds = isMercator ? boundCfg.mercator : boundCfg.linear;

        let eMinG = bounds[0], eMaxG = bounds[1], eMinL = bounds[2], eMaxL = bounds[3];
        let yProjMin = latToY(eMinL), yProjMax = latToY(eMaxL);

        let oldCanvas = document.getElementById('radar-test-canvas');
        if (oldCanvas) oldCanvas.remove();

        let testCvs = document.createElement('canvas');
        testCvs.id = 'radar-test-canvas';
        let natW = radarImg.naturalWidth, natH = radarImg.naturalHeight;
        testCvs.width = natW; testCvs.height = natH;
        testCvs.style.cssText = 'position:absolute; pointer-events:none; z-index:99999;';
        
        let ctx = testCvs.getContext('2d');
        ctx.strokeStyle = '#ff0000'; 
        ctx.lineWidth = 0.5; 

        provsToDraw.forEach(tc => {
            let decoded = tc._d || decodeCommune(tc, g);
            decoded.outerRings.forEach(ring => {
                ctx.beginPath();
                ring.forEach((pt, idx) => {
                    let lng = pt[0], lat = pt[1];
                    let x = ((lng - eMinG) / (eMaxG - eMinG)) * natW;
                    let y;
                    if (isMercator) {
                        let yProj = latToY(lat);
                        y = ((yProjMax - yProj) / (yProjMax - yProjMin)) * natH;
                    } else {
                        y = ((eMaxL - lat) / (eMaxL - eMinL)) * natH;
                    }
                    if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                });
                ctx.closePath(); ctx.stroke();
            });
        });

        document.body.appendChild(testCvs);
        if (window.radarCanvasSyncTimer) cancelAnimationFrame(window.radarCanvasSyncTimer);
        
        function syncCanvas() {
            let currentCvs = document.getElementById('radar-test-canvas');
            if (!currentCvs || !document.body.contains(radarImg)) return;
            let r = radarImg.getBoundingClientRect();
            currentCvs.style.left = (r.left + window.scrollX) + 'px';
            currentCvs.style.top = (r.top + window.scrollY) + 'px';
            currentCvs.style.width = r.width + 'px';
            currentCvs.style.height = r.height + 'px';
            window.radarCanvasSyncTimer = requestAnimationFrame(syncCanvas);
        }
        syncCanvas();
        alert("Đã vẽ xong lớp phủ ranh giới hành chính đồng bộ.");
    }

    // - Hàm Cốt lõi tự động quét phân tích cường độ DBZ và sinh dữ liệu văn bản tin dông
    async function runAutoScan(mainStr, subStr, limit, warningLimit) {
        if (!mainStr || mainStr.trim() === "") {
            throw new Error("Phải nhập tỉnh cần lấy! Hãy gõ tên tỉnh vào ô cấu hình.");
        }

        if (warningLimit === undefined || warningLimit === "" || isNaN(warningLimit)) {
            warningLimit = limit;
        }
        let minLimit = Math.min(limit, warningLimit);

        let imgs = Array.from(document.querySelectorAll('img')).filter(i => (i.src.includes('dataout') || i.src.includes('radar') || i.src.includes('VQVN')) && i.naturalWidth > 200);
        imgs.sort((a, b) => b.naturalWidth - a.naturalWidth);
        let radarImg = imgs[0];
        if (!radarImg) throw new Error("Không tìm thấy ảnh dữ liệu Radar thời tiết!");

        if (!window.cachedGeoData) window.cachedGeoData = await (await fetch('http://hymetnet.gov.vn/DiaPhan_Xa_2025_min.json')).json();
        let g = window.cachedGeoData, communes = g.objects ? Object.values(g.objects).flatMap(o => o.geometries || []) : g;
        
        let mainP = getCoreName(mainStr), subMap = new Map();
        if (subStr.trim() !== "") subStr.split(',').forEach(s => { let n = getCoreName(s); if(n) subMap.set(n, s.trim()); });

        function toTitleCase(str) {
            if(!str) return "";
            return str.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
        }

        let mainCommunes = [], otherCommunes = [];
        communes.forEach(c => {
            let tName = getCoreName(c.properties.tenTinh || c.properties.TEN_TINH);
            if (tName.includes(mainP)) mainCommunes.push(c);
            else otherCommunes.push(c);
        });

        if (mainCommunes.length === 0) throw new Error("Không tìm thấy dữ liệu Tỉnh chính yêu cầu!");
        let exactMainProvName = toTitleCase(mainCommunes[0].properties.tenTinh || mainCommunes[0].properties.TEN_TINH);

        let preCanvas = document.createElement('canvas');
        let natW = radarImg.naturalWidth, natH = radarImg.naturalHeight;
        preCanvas.width = natW; preCanvas.height = natH;
        let pCtx = preCanvas.getContext('2d');
        pCtx.drawImage(radarImg, 0, 0);
        let imgData = pCtx.getImageData(0, 0, natW, natH).data;

        let pathKey = window.location.pathname;
        let boundCfg = CALIBRATED_BOUNDS[pathKey] || CALIBRATED_BOUNDS["/radar"];
        let isMercator = document.getElementById('ui-projection').value === "mercator";
        let bounds = isMercator ? boundCfg.mercator : boundCfg.linear;

        let eMinG = bounds[0], eMaxG = bounds[1], eMinL = bounds[2], eMaxL = bounds[3];
        let yProjMin = latToY(eMinL), yProjMax = latToY(eMaxL);

        function checkCommuneMaxDBZ(tc) {
            let decoded = tc._d || decodeCommune(tc, g);
            tc._d = decoded;
            let cBbox = decoded.bbox;
            if (cBbox[2] < eMinG || cBbox[0] > eMaxG || cBbox[3] < eMinL || cBbox[1] > eMaxL) return 0;

            let x1 = Math.floor(((cBbox[0] - eMinG) / (eMaxG - eMinG)) * natW);
            let x2 = Math.ceil(((cBbox[2] - eMinG) / (eMaxG - eMinG)) * natW);
            let y1, y2;
            
            if (isMercator) {
                let yProjHigh = latToY(cBbox[3]), yProjLow = latToY(cBbox[1]);
                y1 = Math.floor(((yProjMax - yProjHigh) / (yProjMax - yProjMin)) * natH);
                y2 = Math.ceil(((yProjMax - yProjLow) / (yProjMax - yProjMin)) * natH);
            } else {
                y1 = Math.floor(((eMaxL - cBbox[3]) / (eMaxL - eMinL)) * natH);
                y2 = Math.ceil(((eMaxL - cBbox[1]) / (eMaxL - eMinL)) * natH);
            }

            x1 = Math.max(0, x1); x2 = Math.min(natW - 1, x2);
            y1 = Math.max(0, y1); y2 = Math.min(natH - 1, y2);

            let maxVal = 0;
            for (let y = y1; y <= y2; y++) {
                for (let x = x1; x <= x2; x++) {
                    let idx = (y * natW + x) * 4;
                    let r = imgData[idx], gData = imgData[idx + 1], b = imgData[idx + 2];
                    let dbz = window.getDBZ(r, gData, b);
                    if (dbz > maxVal) maxVal = dbz;
                }
            }
            return maxVal;
        }

        let mainDistrictMap = new Map();

        mainCommunes.forEach(c => {
            let maxDbz = checkCommuneMaxDBZ(c);
            if (maxDbz >= minLimit) {
                let hName = toTitleCase(c.properties.tenHuyen || c.properties.TEN_HUYEN);
                let xName = toTitleCase(c.properties.tenXa || c.properties.TEN_XA);
                if (!mainDistrictMap.has(hName)) mainDistrictMap.set(hName, []);
                mainDistrictMap.get(hName).push({ name: xName, dbz: maxDbz });
            }
        });

        let now = new Date();
        let currentHourStr = `${String(now.getHours()).padStart(2, '0')} giờ ${String(now.getMinutes()).padStart(2, '0')} phút`;

        let dongText = "";
        let dubaoText = "";

        if (mainDistrictMap.size === 0) {
            dongText = `Hiện nay, qua theo dõi trên ảnh radar thời tiết cho thấy không có vùng mây dông nào đáng lưu ý phát triển trên khu vực tỉnh ${exactMainProvName}.`;
            dubaoText = `Trong những giờ tới, thời tiết trên khu vực tỉnh ${exactMainProvName} ổn định, ít có khả năng xuất hiện mưa dông cục bộ.`;
        } else {
            let mainHuyenList = Array.from(mainDistrictMap.keys());
            dongText = `Hiện nay (vào lúc ${currentHourStr}), qua theo dõi trên ảnh radar thời tiết cho thấy vùng mây dông đang phát triển và gây mưa trên khu vực các huyện: ${mainHuyenList.join(', ')} thuộc tỉnh ${exactMainProvName}. Ngoài ra vùng mây dông cũng xuất hiện tại các vùng lân cận khác.`;
            
            let lineArr = [];
            mainDistrictMap.forEach((communesList, huyenName) => {
                let listTarget = communesList.filter(item => item.dbz >= limit).map(item => item.name);
                let listWarning = communesList.filter(item => item.dbz >= minLimit && item.dbz < limit).map(item => item.name);
                
                let s = `Tại huyện ${huyenName}: dông mưa xuất hiện ở các xã/phường: ${listTarget.join(', ')}`;
                if (listWarning.length > 0) {
                    s += ` và cảnh báo nguy cơ lan sang: ${listWarning.join(', ')}`;
                }
                lineArr.push(s);
            });
            
            dubaoText = `Trong những giờ tới, vùng mây dông này tiếp tục phát triển và gây mưa rào và dông cho các khu vực kể trên, sau đó có khả năng lan sang các khu vực lân cận khác thuộc tỉnh ${exactMainProvName}. Trưởng ca cảnh báo đề nghị theo dõi sát diễn biến.`;
        }

        let mapCanvas = document.createElement('canvas');
        mapCanvas.width = natW; mapCanvas.height = natH;
        let mCtx = mapCanvas.getContext('2d');
        mCtx.drawImage(radarImg, 0, 0);
        mCtx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
        mCtx.lineWidth = 0.5;

        mainCommunes.forEach(c => {
            if (c._d) {
                c._d.outerRings.forEach(ring => {
                    mCtx.beginPath();
                    ring.forEach((pt, idx) => {
                        let x = ((pt[0] - eMinG) / (eMaxG - eMinG)) * natW;
                        let y = isMercator ? ((yProjMax - latToY(pt[1])) / (yProjMax - yProjMin)) * natH : ((eMaxL - pt[1]) / (eMaxL - eMinL)) * natH;
                        if (idx === 0) mCtx.moveTo(x, y); else mCtx.lineTo(x, y);
                    });
                    mCtx.closePath(); mCtx.stroke();
                });
            }
        });

        let outCvs = document.createElement('canvas');
        let cbWidth = 45, gapPixels = 10;
        outCvs.width = natW + gapPixels + cbWidth;
        outCvs.height = natH;
        let oCtx = outCvs.getContext('2d');
        oCtx.fillStyle = '#ffffff';
        oCtx.fillRect(0, 0, outCvs.width, outCvs.height);
        oCtx.drawImage(mapCanvas, 0, 0);

        return new Promise((resolve) => {
            let cbImg = window.radarColorBarImg;
            if (cbImg.complete && cbImg.naturalWidth > 0) {
                oCtx.drawImage(cbImg, natW + gapPixels, 0, cbWidth, natH);
                resolve({ dongText, dubaoText, image: outCvs.toDataURL('image/jpeg', 0.95) });
            } else {
                cbImg.onload = () => {
                    oCtx.drawImage(cbImg, natW + gapPixels, 0, cbWidth, natH);
                    resolve({ dongText, dubaoText, image: outCvs.toDataURL('image/jpeg', 0.95) });
                };
                cbImg.onerror = () => {
                    resolve({ dongText, dubaoText, image: mapCanvas.toDataURL('image/jpeg', 0.95) });
                };
            }
        });
    }

    // - Hàm Xây dựng giao diện Khung điều khiển nổi đa nhiệm tích hợp
    function injectFloatingUI() {
        if (document.getElementById('radar-helper-panel')) return;

        let panel = document.createElement('div');
        panel.id = 'radar-helper-panel';
        panel.style.cssText = 'position:fixed; bottom:10px; right:10px; width:340px; max-height:85vh; overflow-y:auto; background:rgba(255,255,255,0.96); border:2px solid #2980b9; border-radius:8px; box-shadow:0 4px 15px rgba(0,0,0,0.3); z-index:999999; font-family:Arial,sans-serif; padding:10px; font-size:12px; color:#2c3e50;';

        panel.innerHTML = `
            <div style="background:#2980b9; color:white; padding:6px; font-weight:bold; border-radius:4px; margin-bottom:8px; text-align:center; position:relative;">
                <span id="radar-version-text">⛈️ RADAR HYMETNET v1.3.6</span>
                <button id="ui-btnToggle" style="position:absolute; right:5px; top:4px; background:none; border:none; color:white; font-weight:bold; cursor:pointer;">➖</button>
            </div>
            <div id="ui-content-body">
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin-bottom:6px;">
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Tỉnh chính:</label>
                        <input type="text" id="ui-mainProv" value="Thái Nguyên" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                    </div>
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Phép chiếu:</label>
                        <select id="ui-projection" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                            <option value="mercator">Mercator</option>
                            <option value="linear">Linear (Kinh vĩ)</option>
                        </select>
                    </div>
                </div>
                <div style="margin-bottom:6px;">
                    <label style="font-weight:bold;display:block;margin-bottom:2px;">Tỉnh lân cận (cách nhau dấu phẩy):</label>
                    <input type="text" id="ui-subProvs" value="Bắc Kạn, Tuyên Quang, Vĩnh Phúc, Lạng Sơn, Hà Nội" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin-bottom:8px;">
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Ngưỡng chuẩn (DBZ):</label>
                        <input type="number" id="ui-limit" value="30" min="5" max="80" step="5" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                    </div>
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Ngưỡng dự phòng:</label>
                        <input type="number" id="ui-warningLimit" value="25" min="5" max="80" step="5" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                    </div>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin-bottom:8px;">
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Trưởng ca:</label>
                        <input type="text" id="ui-forecaster" value="Nguyễn Trường Minh" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                    </div>
                    <div>
                        <label style="font-weight:bold;display:block;margin-bottom:2px;">Dự báo viên:</label>
                        <input type="text" id="ui-otherForecaster" value="Vợ yêu" style="width:100%; padding:3px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box;">
                    </div>
                </div>
                <div style="display:flex; gap:4px; margin-bottom:8px;" id="ui-action-buttons">
                    <button id="ui-btnScan" style="flex:1.5; padding:5px; background:#2ecc71; color:white; border:none; border-radius:3px; font-weight:bold; cursor:pointer;">⚡ Quét khu vực có Dông & Dự báo</button>
                    <button id="ui-btnDrawMap" style="flex:1; padding:5px; background:#34495e; color:white; border:none; border-radius:3px; font-weight:bold; cursor:pointer;">🗺️ Vẽ Bản Đồ</button>
                </div>
                <div style="margin-bottom:6px;">
                    <label style="font-weight:bold;display:block;margin-bottom:2px;">1. Thực trạng diễn biến dông sét:</label>
                    <textarea id="ui-txtDong" rows="3" style="width:100%; padding:4px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box; font-size:11px; resize:vertical;"></textarea>
                </div>
                <div style="margin-bottom:6px;">
                    <label style="font-weight:bold;display:block;margin-bottom:2px;">2. Cảnh báo khả năng xuất hiện dông lốc:</label>
                    <textarea id="ui-txtDuBao" rows="3" style="width:100%; padding:4px; border:1px solid #bdc3c7; border-radius:3px; box-sizing:border-box; font-size:11px; resize:vertical;"></textarea>
                </div>
                <div id="ui-captureArea" style="display:none; text-align:center; margin-top:6px; border-top:1px dashed #bdc3c7; padding-top:6px;">
                    <label style="font-weight:bold; display:block; margin-bottom:4px; color:#e67e22;">🖼️ Ảnh chụp Radar đồng bộ ranh giới:</label>
                    <img id="ui-capturedImg" style="max-width:100%; max-height:180px; border:1px solid #34495e; border-radius:4px;">
                    <a id="ui-btnSaveImage" href="#" download="Radar_Hymetnet_Capture.jpg" style="display:inline-block; margin-top:4px; padding:3px 8px; background:#e67e22; color:white; text-decoration:none; font-weight:bold; border-radius:3px; font-size:11px;">💾 Lưu ảnh Radar</a>
                </div>
            </div>
        `;

        document.body.appendChild(panel);

        let btnToggle = document.getElementById('ui-btnToggle');
        let body = document.getElementById('ui-content-body');
        btnToggle.onclick = () => {
            if(body.style.display === 'none') { body.style.display = 'block'; btnToggle.innerText = '➖'; }
            else { body.style.display = 'none'; btnToggle.innerText = '➕'; }
        };

        document.getElementById('ui-btnDrawMap').onclick = () => { drawTestOverlay().catch(e => alert(e.message)); };

        let btnScan = document.getElementById('ui-btnScan');
        btnScan.onclick = async () => {
            btnScan.innerText = "⏳ Đang quét dữ liệu...";
            btnScan.style.background = "#95a5a6";
            btnScan.disabled = true;
            try {
                let mProv = document.getElementById('ui-mainProv').value;
                let sProvs = document.getElementById('ui-subProvs').value;
                let lim = parseInt(document.getElementById('ui-limit').value);
                let wLim = parseInt(document.getElementById('ui-warningLimit').value);
                
                let res = await runAutoScan(mProv, sProvs, lim, wLim);
                document.getElementById('ui-txtDong').value = res.dongText;
                document.getElementById('ui-txtDuBao').value = res.dubaoText;
                
                if (res.image) {
                    document.getElementById('ui-capturedImg').src = res.image;
                    document.getElementById('ui-btnSaveImage').href = res.image;
                    document.getElementById('ui-captureArea').style.display = 'block';
                }
                btnScan.innerText = "✅ HOÀN TẤT";
                btnScan.style.background = "#2ecc71";
            } catch(e) {
                console.error(e);
                alert(e.message);
                btnScan.innerText = "❌ LỖI QUÉT";
                btnScan.style.background = "#e74c3c";
            }
            setTimeout(() => {
                btnScan.innerText = "⚡ Quét khu vực có Dông & Dự báo";
                btnScan.style.background = "#2ecc71";
                btnScan.disabled = false;
            }, 2500);
        };

        initWordModule();
    }

    // - Hàm Xử lý Mô-đun đóng gói cấu trúc xuất bản văn bản Microsoft Word (.doc) tự động
    function initWordModule() {
        let container = document.getElementById('ui-action-buttons');
        if (!container) return;

        if (document.getElementById('ui-btnExportWord')) document.getElementById('ui-btnExportWord').remove();

        let btnWord = document.createElement('button');
        btnWord.id = 'ui-btnExportWord';
        btnWord.innerText = '📄 Tạo Bản Tin & Hồ Sơ';
        btnWord.style.cssText = 'flex:1; padding:5px; background:#e84393; color:white; border:none; border-radius:3px; font-weight:bold; font-size:12px; cursor:pointer;';
        container.appendChild(btnWord);

        const safeReplace = (html, keyword, value) => {
            let patternStr = "\\{\\s*(?:<[^>]*>|&nbsp;|\\s)*";
            let words = keyword.split(' ');
            for (let i = 0; i < words.length; i++) {
                let escapedWord = words[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                patternStr += escapedWord;
                if (i < words.length - 1) patternStr += "(?:<[^>]*>|&nbsp;|\\s)+";
            }
            patternStr += "(?:<[^>]*>|&nbsp;|\\s)*\\}";
            return html.replace(new RegExp(patternStr, 'gi'), value);
        };

        function removeVietnameseTones(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
        }

        btnWord.onclick = function() {
            let mainProvValue = document.getElementById('ui-mainProv').value.trim();
            let forecasterVal = document.getElementById('ui-forecaster').value.trim();
            let otherForecasterVal = document.getElementById('ui-otherForecaster').value.trim();
            let dongTextVal = document.getElementById('ui-txtDong').value.trim();
            let dubaoTextVal = document.getElementById('ui-txtDuBao').value.trim();

            if (!dongTextVal || !dubaoTextVal) {
                alert("Bạn cần hoàn tất quét dữ liệu phân tích trước khi xuất bản tệp Word!");
                return;
            }

            let now = new Date();
            let gioPhat = `${String(now.getHours()).padStart(2, '0')} giờ ${String(now.getMinutes()).padStart(2, '0')} phút`;
            let dateStr = `ngày ${String(now.getDate()).padStart(2, '0')} tháng ${String(now.getMonth() + 1).padStart(2, '0')} năm ${now.getFullYear()}`;

            let provUpper = mainProvValue.toUpperCase();
            let provCamel = mainProvValue.replace(/(^\w|\s\w)/g, m => m.toUpperCase());

            let finalBanTin = BAN_TIN_MAU_HTML;
            finalBanTin = safeReplace(finalBanTin, "TINH_WORD_UPPER", provUpper);
            finalBanTin = safeReplace(finalBanTin, "DONG_TEXT", dongTextVal);
            finalBanTin = safeReplace(finalBanTin, "DUBAO_TEXT", dubaoTextVal);
            finalBanTin = safeReplace(finalBanTin, "GIO_PHAT", `${gioPhat} ${dateStr}`);

            let finalHoSo = HO_SO_MAU_HTML;
            finalHoSo = safeReplace(finalHoSo, "TINH_WORD_UPPER", provUpper);
            finalHoSo = safeReplace(finalHoSo, "TINH_WORD_CAMEL", provCamel);
            finalHoSo = safeReplace(finalHoSo, "GIO_PHAT", gioPhat);
            finalHoSo = safeReplace(finalHoSo, "DATE", dateStr);
            finalHoSo = safeReplace(finalHoSo, "FORECASTER_NAME", forecasterVal);
            finalHoSo = safeReplace(finalHoSo, "OTHER_FORECASTER_NAME", otherForecasterVal);
            finalHoSo = safeReplace(finalHoSo, "DONG_TEXT", dongTextVal);
            finalHoSo = safeReplace(finalHoSo, "DUBAO_TEXT", dubaoTextVal);

            let blobBanTin = new Blob(['\ufeff' + finalBanTin], { type: 'application/msword;charset=utf-8' });
            let blobHoSo = new Blob(['\ufeff' + finalHoSo], { type: 'application/msword;charset=utf-8' });

            let urlBanTin = URL.createObjectURL(blobBanTin);
            let urlHoSo = URL.createObjectURL(blobHoSo);

            let provUnsigned = removeVietnameseTones(mainProvValue).replace(/\s+/g, '_');
            let nameBanTin = `Ban_tin_Dong_${provUnsigned}.doc`;
            let nameHoSo = `Ho_so_Dong_${provUnsigned}.doc`;

            let overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:9999999; display:flex; align-items:center; justify-content:center;';
            
            overlay.innerHTML = `
                <div style="background:white; padding:20px; border-radius:8px; width:300px; font-family:Arial, sans-serif;">
                    <h3 style="margin-top:0; color:#2980b9; text-align:center;">Văn Bản Sẵn Sàng</h3>
                    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:15px;">
                        <a href="${urlBanTin}" download="${nameBanTin}" style="display:block; text-align:center; padding:12px; background:#0984e3; color:white; text-decoration:none; border-radius:4px; font-weight:bold;">📥 TẢI BẢN TIN</a>
                        <a href="${urlHoSo}" download="${nameHoSo}" style="display:block; text-align:center; padding:12px; background:#e84393; color:white; text-decoration:none; border-radius:4px; font-weight:bold;">📥 TẢI HỒ SƠ</a>
                    </div>
                    <button id="modal-btnCloseComplete" style="width:100%; padding:10px; background:#636e72; color:white; border:none; border-radius:4px; cursor:pointer;">Đóng</button>
                </div>
            `;
            document.body.appendChild(overlay);

            document.getElementById('modal-btnCloseComplete').onclick = () => {
                document.body.removeChild(overlay);
                URL.revokeObjectURL(urlBanTin);
                URL.revokeObjectURL(urlHoSo);
            };
        };
    }

    // - Kiểm tra trạng thái tài liệu để kích hoạt giao diện
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        injectFloatingUI();
    } else {
        window.addEventListener('DOMContentLoaded', injectFloatingUI);
    }
})();
