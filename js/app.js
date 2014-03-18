var FACEBOOK_APP_ID = "213068875558203",
  FACEBOOK_CALLBACK_URL = "//kue.github.io/FriendOnline";
//  FACEBOOK_CANVAS_URL = "//apps.facebook.com/friend-online"
//  FACEBOOK_CANVAS_URL_RAW = "http%3A%2F%2Fapps.facebook.com%2Ffriend-online";
//self == top && (top.location.href = FACEBOOK_CANVAS_URL);
window.fbAsyncInit = function () {
  FB.init({
    appId: FACEBOOK_APP_ID,
    channelUrl: FACEBOOK_CALLBACK_URL + "/channel.html"
  });
  var e = function () {
    FB.getLoginStatus(function (e) {
      e.status === "connected" ? $.getJSON("https://graph.facebook.com/fql?q=SELECT%20uid%2C%20name%2C%20pic_square%20FROM%20user%20WHERE%20uid%20%3D%20me()%20OR%20uid%20IN%20(SELECT%20uid2%20FROM%20friend%20WHERE%20uid1%20%3D%20me())&access_token=" + e.authResponse.accessToken, function (e) {
        FB.Canvas.setSize()
      }) : top.location.href = "https://www.facebook.com/dialog/oauth?client_id=" + FACEBOOK_APP_ID + "&redirect_uri=" + FACEBOOK_CALLBACK_URL + "&scope=email,user_birthday,user_about_me"
    })
  };
  setInterval(e, 15e3);
  e()
};
(function (e) {
  var r, i = e.getElementsByTagName(t)[0];
  if (e.getElementById(n)) return;
  r = e.createElement(t);
  r.id = n;
  r.src = "//connect.facebook.net/en_US/all.js";
  i.parentNode.insertBefore(r, i)
})(document, "script", "facebook-jssdk");
