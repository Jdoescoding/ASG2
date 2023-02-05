$(document).ready(function(){
  let un = document.getElementsByClassName("un").value;
  let pw = document.getElementsByClassName("pw").value;
  $(".submit").on("click",function(e){
    e.PreventDefault();
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
      for(i = 0; i < response.length; i++)
      {
        if(un !== response[i].student_name)
        {
          let message = "This user does not exist!";
          document.getElementsByClassName("message").innerText = message;
        }
        else if (un == response[i].student_name && pw != response[i].student_password)
        {
          let message = "Your password is wrong!";
          document.getElementsByClassName("message").innerText = message;
        }
        else
        {
          let message = " ";
          document.getElementsByClassName("message").innerText = message;
        }
      }
    });
  }
  )
}
)
