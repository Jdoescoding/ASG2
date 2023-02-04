$(document).ready(function () {
    $("#submit").on("click", function () {
        validornot = 0
        console.log(validornot)
        /*var settings = {
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
            for (n=0;n<response.length;n++){
                if(response[n].student_username==$(".username").val() && response[n].student_password==$(".password").val()){
                    validornot=1
                    var jsondata = {"Quiz_Topics": "","Question_1": "","assigned_student":"","Question_2":"","question_1_answer":"","question_2_answer":"","quiz_desc":"","enterquiz":"","student_login":response[n].student_username,"who_gave_assignment":"","creator_id":""};
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://assignment2id-dc5f.restdb.io/rest/quiztopics",
                        "method": "POST",
                        "headers": {
                          "content-type": "application/json",
                          "x-apikey": "63d771f53bc6b255ed0c446c",
                          "cache-control": "no-cache"
                        },
                        "processData": false,
                        "data": JSON.stringify(jsondata)
                      }
                      
                      $.ajax(settings).done(function (response) {
                      });
                }
            }
            if (validornot==0){
                alert("Wrong password or username. Please try again. Thank you.")
            }
          });*/



    })
})