

/* https://tw.api.langlive.com/webapi/v1/redpacket/open
f_pfid=1647847&live_id=2132991G04923oOHY&stamp=1515320276516
Content-Type:application/x-www-form-urlencoded; charset=UTF-8
Origin:https://www.kingkong.com.tw
Referer:https://www.kingkong.com.tw/2132991
API-REQUEST-CHANNEL:WEB
USER-TOKEN:e4dbfee7c59fc8a89b3990f2461fb273
USER-UID:2173487 */

    /* console.log("T.redPackage --arg0: ",obj);
    console.log("T.redPackage obj.pfid: ",obj.pfid);
    console.log("T.redPackage obj.stamp: ",obj.stamp);
    console.log("T.redPackage obj.liveId: ",obj.liveId);
    console.log("T.redPackage obj.pfid: ",obj.pfid); */

//btn-get-red-package

//red-package-wrapper

  // ($.ajax({
    // url: 'https://tw.api.langlive.com/webapi/v1/redpacket/open',
    // headers: {
        // 'API-REQUEST-CHANNEL':'WEB',
        // 'USER-TOKEN':userToken,
        // 'USER-UID':userUid
    // },
    // method: 'POST',
    // data: {
      // 'f_pfid':obj.pfid,
      // 'live_id':obj.liveId,
      // 'stamp':obj.stamp
    // },
    // success: function(data){
      // console.log('post success: ',data);
    // },
    // error: function (error) {
      // console.log("post error ",error);
    // }
  // }))

  function c_getRedPacket(userInfo,obj){
    var userToken = userInfo.token ;
    var userUid = userInfo.pfid ;
      ($.ajax({
    url: 'https://tw.api.langlive.com/webapi/v1/redpacket/open',
    headers: {
        'API-REQUEST-CHANNEL':'WEB',
        'USER-TOKEN':userToken,
        'USER-UID':userUid
    },
    method: 'POST',
    data: {
      'f_pfid':obj.pfid,
      'live_id':obj.liveId,
      'stamp':obj.stamp
    },
    success: function(data){
      console.log('post success: ',data);

    },
    error: function (error) {
      console.log("post error ",error);

    }
  }))
  }
  function delayGetR(userInfo,obj){
    setTimeout(function(){ c_getRedPacket(userInfo,obj) }, (Math.random() * 500));
  }
this.T.redPackage = function(a) {

    var e, i = [], s = a || {};
    
    var obj = a[Object.keys(a)[0]];
    var userInfo = JSON.parse( localStorage.getItem("userInfo")) ;
   
    delayGetR(userInfo,obj);
    
    
    return function(a) {
        i.push("<div" + jade.attr("data-pfid", a.pfid, !0, !1) + jade.attr("data-stamp", a.stamp, !0, !1) + ' class="red-package-wrapper"><div class="red-package"><a href="javascript:" class="close"></a><div' + jade.attr("style", "background-image: url(" + a.avatar + ")", !0, !1) + ' class="avatar"></div><div class="form"><span class="name">' + jade.escape(null == (e = a.name) ? "" : e) + '</span><span>的紅包</span></div><a href="javascript:" class="btn btn-get-red-package">馬上搶</a></div><div class="red-package-loading"><a href="javascript:" class="close"></a><div' + jade.attr("style", "background-image: url(" + a.avatar + ")", !0, !1) + ' class="avatar"></div><img src="/static/image/loadingFollow.gif" class="img-loading"/></div><div style="display:none" class="red-package-result1"><a href="javascript:" class="close"></a><div' + jade.attr("style", "background-image: url(" + a.avatar + ")", !0, !1) + ' class="avatar"></div><div class="tips">恭喜妳獲得</div><div class="balance"><div class="icon-balance"></div><div class="value">0</div></div><div class="tips-dark">(共' + jade.escape(null == (e = a.gold || 0) ? "" : e) + '浪花)</div></div><div style="display:none" class="red-package-result2"><a href="javascript:" class="close"></a><div' + jade.attr("style", "background-image: url(" + a.avatar + ")", !0, !1) + ' class="avatar"></div><div class="tips">很遺憾</div><div class="tips-dark">紅包被搶光啦</div><div class="tips-dark">(共' + jade.escape(null == (e = a.gold || 0) ? "" : e) + "浪花)</div></div></div>")
    }
    .call(this, "r"in s ? s.r : "undefined" != typeof r ? r : void 0),
    i.join("")
}

