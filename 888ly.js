// ==UserScript==
// @name        bazhua
// @namespace   bazhua
// @include     http*://fxs.888ly.cn/OutBoundLine/OutBoundLineList.aspx*
// @version     1
// @grant       none
// ==/UserScript==
var refreshSec = 5;
alert("start grab");
var all = []
var time = setInterval(function() {
   $("table.line-item-layout tr.line-product").each(function() {
      var infos = [];
      var supplierStr = $(this).find("div.hover-tip").html();
      var supplierInfo = supplierStr.match(/-(.*?)</);
      infos.push(supplierInfo.length>0?supplierInfo[0].replace("-", "").replace("<", ""):null);
      var idStr=$(this).find("span.features").text();
      var idArr = idStr.match(/\[(.*?)\]/);
      infos.push(idArr.length > 0 ? idArr[0].replace("[", "").replace("]", "") : null);
      var a = $(this).find("div.supp-route-wrap a");
      infos.push(a.attr("title"));
      var curUrl = window.location.href;
      infos.push(curUrl.substring(0, curUrl.lastIndexOf("/")+1) + a.attr("href"));
      all.push(infos.join("\t"));
   });
   var curA = $("#paging_pageNum a.PageIndex");
   var nextA = curA.next();
   if (nextA.attr('id') != "paging_Next") {
       nextA.click();   
   } else {
      alert("Please press  shift+ctrl+j to copy");
      console.clear();
      console.info(all.join("\n"));
      clearInterval(time)
   }
   
}, refreshSec * 1000);






