$(document).ready(function () {
  let submit = document.createElement("p")
  document.body.append(submit)
  let submitbutton = document.createElement("a")
  submitbutton.append("Submit")
  submitbutton.setAttribute("id", "submit")
  submit.append(submitbutton)
  $("#submit").attr({ style: 'background-color:lightblue;padding:10px' })
  $(".username").on("change", function () {
    $(".password").on("change", function () {
      validornot = 0
      var settings = {
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
        for (n = 0; n < response.length; n++) {
          if (response[n].student_username == $(".username").val() && response[n].student_password == $(".password").val()) {
            console.log("good")
            validornot = 1
            $("#submit").attr("href", "home.html")
            var jsondata = { "Quiz_Topics": "1", "Question_1": "1", "assigned_student": "", "Question_2": "", "question_1_answer": "", "question_2_answer": "", "quiz_desc": "", "enterquiz": 0, "student_login": response[n].student_username, "who_gave_assignment": "", "creator_id": "" };
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
              console.log(response)
            });
          }
        }

        if (validornot == 0) {
          alert("Wrong password or username. Please try again. Thank you.")
        }
      });

    })



  })

})
