$(document).ready(function(){
  $(".submit").on("click",function(e){
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://assignment2id-dc5f.restdb.io/rest/loginstudent",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "63d771f53bc6b255ed0c446c",
        "cache-control": "no-cache"
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  )
}
)
