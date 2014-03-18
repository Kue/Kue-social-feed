var oauth= require("oauth");
 
oauth       = oauth.OAuth2;
var facebook   = {
  appId: "213068875558203",  
  appSecret: "3991b016fea2ea7b3fe29ea39f269ea0",
  url: "https://graph.facebook.com",
  token: "ACCESS_TOKEN"
}
 
var oAuth = new oauth(
  facebook.appId,
  facebook.appSecret,
  facebook.url
);
 
// https://developers.facebook.com/docs/technical-guides/fql/
var query = "SELECT+uid,name,pic_square+FROM+user+WHERE+uid=me()+OR+uid+IN+(SELECT+uid2+FROM+friend+WHERE+uid1=me())";
 
oAuth.getProtectedResource("https://graph.facebook.com/fql?q=" + query, facebook.token, function (error, data, response) {
  if( error ) {
    console.log("error");
  }else {
    console.log(JSON.parse(data));
  }
});