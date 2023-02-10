$(document).ready(function () {
  let submit = document.createElement("p")
  document.body.append(submit)
  let submitbutton = document.createElement("a")
  submitbutton.append("Submit")
  submitbutton.setAttribute("id", "submit")
  submit.append(submitbutton)
  $("#submit").attr({ style: 'background-color:lightblue;padding:10px' })
  /*validate the user's password and username. Submit button becomes a link to show home page.*/
  $(".un").on("click", function () {
    $(".pw").on("click", function () {
      validornot = 0
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassignment2final-af39.restdb.io/rest/loginstudents",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "63e62546478852088da6800e",
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response) {
        for (n = 0; n < response.length; n++) {
          if (response[n].student_username == $(".un").val() && response[n].student_password == $(".pw").val()) {
            validornot = 1
            $("#submit").attr("href", "home.html")
            $("#submit").attr({ style: 'background-color:yellow' })
            var jsondata = { "Quiz_Topics": "1", "Question_1": "1", "assigned_student": "2", "Question_2": "", "question_1_answer": "", "question_2_answer": "", "quiz_desc": "", "enterquiz": 0, "student_login": response[n].student_username, "who_gave_assignment": "", "creator_id": "1", "quiz_chosen": "", "quiz_id": "", "Question_3": "", "question_3_answer": "", "Question_4": "", "question_4_answer": "", "user_answer": "" };
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://idassignment2final-af39.restdb.io/rest/quiztopic",
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "63e62546478852088da6800e",
                "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
            }

            $.ajax(settings).done(function (response) {
              console.log(response)
              $("#submit").attr("href", "home.html")
              $("#submit").attr({ style: 'background-color:yellow' })
            });
          }
        }

        if (validornot == 0) {
          $(".message").append("Wrong password. Please try again. ")
        }
      });

    })



  })

})