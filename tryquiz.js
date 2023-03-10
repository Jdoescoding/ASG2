let title_box = document.createElement("p")
    title_box.setAttribute("id", "title_box")
    document.body.append(title_box)
    let quizzestitle = document.createElement("h1")
    quizzestitle.append("Quizzes")
    title_box.append(quizzestitle)
    let homepagebuttons = document.createElement("p")
    homepagebuttons.setAttribute("class", "flexboxes_home")
    document.body.append(homepagebuttons)
    let home = document.createElement("a");
    homepagebuttons.append(home);
    home.setAttribute("id", "home")
    home.setAttribute("href", "home.html");
    home.append("Home");
    let quiz = document.createElement("a");
    homepagebuttons.append(quiz);
    quiz.setAttribute("href", "quiz.html");
    quiz.setAttribute("id", "quizbutton")
    quiz.append("Quiz");
    let assignment = document.createElement("a");
    assignment.setAttribute("href", "assignment.html");
    assignment.setAttribute("id", "assignment")
    assignment.append("Assignment");
    homepagebuttons.append(assignment);
    let leaderboard = document.createElement("a");
    leaderboard.setAttribute("href", "leaderboard.html");
    leaderboard.setAttribute("id", "leaderboard")
    leaderboard.append("Leaderboard");
    homepagebuttons.append(leaderboard);
    let profile = document.createElement("a");
    profile.setAttribute("id", "profile")
    profile.setAttribute("href", "profile.html");
    profile.append("Profile");
    homepagebuttons.append(profile);
    function screen() {
        if (a.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#quiz").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:lightblue;width:150px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:45px;margin:30px;background-color:lightblue;color:purple;font-size:30px;border-radius:40px;width:auto;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
        else if (b.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#quiz").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:lightblue;width:150px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:orange;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:45px;margin:30px;background-color:lightblue;color:purple;font-size:30px;border-radius:40px;width:auto;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })

        }
        else if (c.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#quiz").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:lightblue;width:150px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:yellow;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:45px;margin:30px;background-color:lightblue;color:purple;font-size:30px;border-radius:40px;width:auto;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
        else if (d.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#quiz").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:lightblue;width:150px;width:auto;' })
            $("#profile").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:green;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:45px;margin:30px;background-color:lightblue;color:purple;font-size:30px;border-radius:40px;width:auto;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
    }
    var a = window.matchMedia("(max-width:576px)")
    var b = window.matchMedia("(max-width:768px)")
    var c = window.matchMedia("(max-width:992px)")
    var d = window.matchMedia("(min-width:1200px)")
    screen(a)
    screen(b)
    screen(c)
    screen(d)
    a.addListener(screen)
    b.addListener(screen)
    c.addListener(screen)
    d.addListener(screen)
let questions = document.createElement("p")
questions.setAttribute("id", "questionsbox")
document.body.append(questions)
let suggested_a1 = []
let suggested_a2 = []
let suggested_a3 = []
let suggested_a4 = []
let correctas = []
for (n = 1; n < 5; n++) {
  let correcta = Math.floor(Math.random() * 4) + 1
  correctas.push(correcta)
}
console.log(correctas[0])
$("#questionsbox").attr({ style: 'display:flex;flex-direction:column' })
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://idassignment2-4cad.restdb.io/rest/quiztopic",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63e60ecb478852088da6800a",
    "cache-control": "no-cache"
  }
}
/*use restdb api to check for the latest quiz that the user wanted to try. and show those questions and answers for the user to select.There are 4 questions in total for each quiz.After completing,
user clicks submit button to post the data of their answers into restdb.*/
$.ajax(settings).done(function (response) {
  for (n = 0; n < response.length; n++) {
    for (a = 0; a < response.length; a++) {
      if (response[a].quiz_chosen == response[n].quiz_id && response[a].creator_id != response[n].quiz_id && response[n].quiz_id == "1" || response[n].quiz_id == "2") {
        completed_quiz = response[n].quiz_id
        let answer1 = []
        let answer3 = []
        let question1 = document.createElement("h3")
        let question2 = document.createElement("h3")
        let question3 = document.createElement("h3")
        let question4 = document.createElement("h3")
        question1.append(response[n].Question_1)
        question2.append(response[n].Question_2)
        question3.append(response[n].Question_3)
        question4.append(response[n].Question_4)
        question1.setAttribute("class", "questions")
        questions.append(question1)
        suggested_a3 = (response[n].question_3_answer).split(",")
        suggested_a4 = (response[n].question_4_answer).split(",")
        suggested_a1 = (response[n].question_1_answer).split(",")
        suggested_a2 = (response[n].question_2_answer).split(",")
        question2.setAttribute("class", "questions")
        for (n = 1; n < 5; n++) {
          let q1al = document.createElement("label")
          questions.append(q1al)
          let q1a = document.createElement("input")
          q1a.setAttribute("type", "checkbox")
          if (n == correctas[0]) {
            if (n == 1) {
              q1al.append(suggested_a1[0])
              q1a.setAttribute("id", "q1a1")
              q1a.setAttribute("answer", suggested_a1[0])
            }
            else if (n == 2) {
              q1al.append(suggested_a1[0])
              q1a.setAttribute("id", "q1a2")
              q1a.setAttribute("answer", suggested_a1[0])
            }
            else if (n == 3) {
              q1al.append(suggested_a1[0])
              q1a.setAttribute("id", "q1a3")
              q1a.setAttribute("answer", suggested_a1[0])
            }
            else if (n == 4) {
              q1al.append(suggested_a1[0])
              q1a.setAttribute("id", "q1a4")
              q1a.setAttribute("answer", suggested_a1[0])
            }
          }
          else {
            if (n == 1) {
              q1al.append(suggested_a1[1])
              q1a.setAttribute("id", "q1a1")
              q1a.setAttribute("answer", suggested_a1[1])
            }
            else if (n == 2) {
              q1al.append(suggested_a1[2])
              q1a.setAttribute("id", "q1a2")
              q1a.setAttribute("answer", suggested_a1[2])
            }
            else if (n == 3) {
              q1al.append(suggested_a1[3])
              q1a.setAttribute("id", "q1a3")
              q1a.setAttribute("answer", suggested_a1[3])
            }
            else if (n == 4) {
              q1al.append(suggested_a1[4])
              q1a.setAttribute("id", "q1a4")
              q1a.setAttribute("answer", suggested_a1[4])
            }
          }
        }
        else {
          if (n == 1) {
            q1al.append(suggested_a1[1])
            q1a.setAttribute("id", "q1a1")
            q1a.setAttribute("answer", suggested_a1[1])
          }
          else if (n == 2) {
            q1al.append(suggested_a1[2])
            q1a.setAttribute("id", "q1a2")
            q1a.setAttribute("answer", suggested_a1[2])
          }
          else if (n == 3) {
            q1al.append(suggested_a1[3])
            q1a.setAttribute("id", "q1a3")
            q1a.setAttribute("answer", suggested_a1[3])
          }
          else if (n == 4) {
            q1al.append(suggested_a1[4])
            q1a.setAttribute("id", "q1a4")
            q1a.setAttribute("answer", suggested_a1[4])
          }


          $("#q1a1").on("change", function () {
            if ($("#q1a1").prop("checked") == false) {
              answer1.pop(0)
              console.log("no")

            }
            if (answer1.length == 1) {
              alert("There should only be one answer for question 1")
              $("#q1a1").prop("checked", false)
            }

            if ($("#q1a1").prop("checked") == true) {
              console.log("hi")
              answer1.push($("#q1a1").attr("answer"))
            }

            console.log(answer1[0])



          })
          $("#q1a2").on("change", function () {
            if ($("#q1a2").prop("checked") == false) {
              answer1.pop(0)
              console.log("no")

            }
            if (answer1.length == 1) {
              alert("There should only be one answer for question 1")
              $("#q1a2").prop("checked", false)
            }

            if ($("#q1a2").prop("checked") == true) {
              console.log("hi")
              answer1.push($("#q1a2").attr("answer"))
            }

            console.log(answer1[0])



          })
          $("#q1a3").on("change", function () {
            if ($("#q1a3").prop("checked") == false) {
              answer1.pop(0)
              console.log("no")

            }
            if (answer1.length == 1) {
              alert("There should only be one answer for question 1")
              $("#q1a3").prop("checked", false)
            }

            if ($("#q1a3").prop("checked") == true) {
              console.log("hi")
              answer1.push($("#q1a3").attr("answer"))
            }

            console.log(answer1[0])



          })
          $("#q1a4").on("change", function () {
            if ($("#q1a4").prop("checked") == false) {
              answer1.pop(0)
              console.log("no")

            }
            if (answer1.length == 1) {
              alert("There should only be one answer for question 1")
              $("#q1a4").prop("checked", false)
            }

            if ($("#q1a4").prop("checked") == true) {
              console.log("hi")
              answer1.push($("#q1a4").attr("answer"))
            }

            console.log(answer1[0])


          })
          let answer2 = []
          questions.append(question2)
          for (n = 1; n < 5; n++) {
            let q2al = document.createElement("label")
            questions.append(q2al)
            let q2a = document.createElement("input")
            q2a.setAttribute("type", "checkbox")
            if (n == correctas[1]) {
              if (n == 1) {
                q2al.append(suggested_a2[0])
                q2a.setAttribute("id", "q2a1")
                q2a.setAttribute("answer", suggested_a2[0])
              }
              else if (n == 2) {
                q2al.append(suggested_a2[0])
                q2a.setAttribute("id", "q2a2")
                q2a.setAttribute("answer", suggested_a2[0])
              }
              else if (n == 3) {
                q2al.append(suggested_a2[0])
                q2a.setAttribute("id", "q2a3")
                q2a.setAttribute("answer", suggested_a2[0])
              }
              else if (n == 4) {
                q2al.append(suggested_a2[0])
                q2a.setAttribute("id", "q2a4")
                q2a.setAttribute("answer", suggested_a2[0])
              }
            }
            else {
              if (n == 1) {
                q2al.append(suggested_a2[1])
                q2a.setAttribute("id", "q2a1")
                q2a.setAttribute("answer", suggested_a2[1])
              }
              else if (n == 2) {
                q2al.append(suggested_a2[2])
                q2a.setAttribute("id", "q2a2")
                q2a.setAttribute("answer", suggested_a2[2])
              }
              else if (n == 3) {
                q2al.append(suggested_a2[3])
                q2a.setAttribute("id", "q2a3")
                q2a.setAttribute("answer", suggested_a2[3])
              }
              else if (n == 4) {
                q2al.append(suggested_a2[4])
                q2a.setAttribute("id", "q2a4")
                q2a.setAttribute("answer", suggested_a2[4])
              }



            }
            q2a.setAttribute("class", "q2a")
            q2al.append(q2a)
          }


          $("#q2a1").on("change", function () {
            if ($("#q2a1").prop("checked") == false) {
              answer2.pop(0)
              console.log("no")

            }
            if (answer2.length == 1) {
              alert("There should only be one answer for question 2")
              $("#q2a1").prop("checked", false)
            }

            if ($("#q2a1").prop("checked") == true) {
              console.log("hi")
              answer1.push($("#q2a1").attr("answer"))
            }

            console.log(answer2[0])



          })
          $("#q2a2").on("change", function () {
            if ($("#q2a2").prop("checked") == false) {
              answer2.pop(0)
              console.log("no")

            }
            if (answer2.length == 1) {
              alert("There should only be one answer for question 2")
              $("#q2a2").prop("checked", false)
            }

            if ($("#q2a2").prop("checked") == true) {
              console.log("hi")
              answer2.push($("#q2a2").attr("answer"))
            }

            console.log(answer2[0])



          })
          $("#q2a3").on("change", function () {
            if ($("#q2a3").prop("checked") == false) {
              answer2.pop(0)
              console.log("no")

            }
            if (answer2.length == 1) {
              alert("There should only be one answer for question 2")
              $("#q2a3").prop("checked", false)
            }

            if ($("#q2a3").prop("checked") == true) {
              console.log("hi")
              answer2.push($("#q2a3").attr("answer"))
            }

            console.log(answer2[0])



          })
          $("#q2a4").on("change", function () {
            if ($("#q2a4").prop("checked") == false) {
              answer2.pop(0)
              console.log("no")

            }
            if (answer2.length == 1) {
              alert("There should only be one answer for question 2")
              $("#q2a4").prop("checked", false)
            }

            if ($("#q2a4").prop("checked") == true) {
              console.log("hi")
              answer2.push($("#q2a4").attr("answer"))
            }

            console.log(answer2[0])


          })
          questions.append(question3)
          for (n = 1; n < 5; n++) {
            let q3al = document.createElement("label")
            questions.append(q3al)
            let q3a = document.createElement("input")
            q3a.setAttribute("type", "checkbox")
            if (n == correctas[2]) {
              if (n == 1) {
                q3al.append(suggested_a3[0])
                q3a.setAttribute("id", "q3a1")
                q3a.setAttribute("answer", suggested_a3[0])
              }
              else if (n == 2) {
                q3al.append(suggested_a3[0])
                q3a.setAttribute("id", "q3a2")
                q3a.setAttribute("answer", suggested_a3[0])
              }
              else if (n == 3) {
                q3al.append(suggested_a3[0])
                q3a.setAttribute("id", "q3a3")
                q3a.setAttribute("answer", suggested_a3[0])
              }
              else if (n == 4) {
                q3al.append(suggested_a3[0])
                q3a.setAttribute("id", "q3a4")
                q3a.setAttribute("answer", suggested_a3[0])
              }
            }
            else {
              if (n == 1) {
                q3al.append(suggested_a3[1])
                q3a.setAttribute("id", "q3a1")
                q3a.setAttribute("answer", suggested_a3[1])
              }
              else if (n == 2) {
                q3al.append(suggested_a3[2])
                q3a.setAttribute("id", "q3a2")
                q3a.setAttribute("answer", suggested_a3[2])
              }
              else if (n == 3) {
                q3al.append(suggested_a3[3])
                q3a.setAttribute("id", "q3a3")
                q3a.setAttribute("answer", suggested_a3[3])
              }
              else if (n == 4) {
                q3al.append(suggested_a3[4])
                q3a.setAttribute("id", "q3a4")
                q3a.setAttribute("answer", suggested_a3[4])
              }



            }
            q3a.setAttribute("class", "q2a")
            q3al.append(q3a)
          }


          $("#q3a1").on("change", function () {
            if ($("#q3a1").prop("checked") == false) {
              answer3.pop(0)
              console.log("no")

            }
            if (answer3.length == 1) {
              alert("There should only be one answer for question 3")
              $("#q3a1").prop("checked", false)
            }

            if ($("#q3a1").prop("checked") == true) {
              console.log("hi")
              answer3.push($("#q3a1").attr("answer"))
            }

            console.log(answer3[0])



          })
          $("#q3a2").on("change", function () {
            if ($("#q3a2").prop("checked") == false) {
              answer3.pop(0)
              console.log("no")

            }
            if (answer3.length == 1) {
              alert("There should only be one answer for question 3")
              $("#q3a2").prop("checked", false)
            }

            if ($("#q3a2").prop("checked") == true) {
              console.log("hi")
              answer3.push($("#q3a2").attr("answer"))
            }

            console.log(answer3[0])



          })
          $("#q3a3").on("change", function () {
            if ($("#q3a3").prop("checked") == false) {
              answer3.pop(0)
              console.log("no")

            }
            if (answer3.length == 1) {
              alert("There should only be one answer for question 3")
              $("#q3a3").prop("checked", false)
            }

            if ($("#q3a3").prop("checked") == true) {
              console.log("hi")
              answer3.push($("#q3a3").attr("answer"))
            }

            console.log(answer3[0])



          })
          $("#q3a4").on("change", function () {
            if ($("#q3a4").prop("checked") == false) {
              answer3.pop(0)
              console.log("no")

            }
            if (answer3.length == 1) {
              alert("There should only be one answer for question 3")
              $("#q3a4").prop("checked", false)
            }

            if ($("#q3a4").prop("checked") == true) {
              console.log("hi")
              answer3.push($("#q3a4").attr("answer"))
            }

            console.log(answer3[0])


          })
          let answer4 = []
          questions.append(question4)
          for (n = 1; n < 5; n++) {
            let q4al = document.createElement("label")
            questions.append(q4al)
            let q4a = document.createElement("input")
            q4a.setAttribute("type", "checkbox")
            if (n == correctas[3]) {
              if (n == 1) {
                q4al.append(suggested_a4[0])
                q4a.setAttribute("id", "q4a1")
                q4a.setAttribute("answer", suggested_a4[0])
              }
              else if (n == 2) {
                q4al.append(suggested_a4[0])
                q4a.setAttribute("id", "q4a2")
                q4a.setAttribute("answer", suggested_a4[0])
              }
              else if (n == 3) {
                q4al.append(suggested_a4[0])
                q4a.setAttribute("id", "q4a3")
                q4a.setAttribute("answer", suggested_a4[0])
              }
              else if (n == 4) {
                q4al.append(suggested_a4[0])
                q4a.setAttribute("id", "q4a4")
                q4a.setAttribute("answer", suggested_a4[0])
              }
            }
            else {
              if (n == 1) {
                q4al.append(suggested_a4[1])
                q4a.setAttribute("id", "q4a1")
                q4a.setAttribute("answer", suggested_a4[1])
              }
              else if (n == 2) {
                q4al.append(suggested_a4[2])
                q4a.setAttribute("id", "q4a2")
                q4a.setAttribute("answer", suggested_a4[2])
              }
              else if (n == 3) {
                q4al.append(suggested_a4[3])
                q4a.setAttribute("id", "q4a3")
                q4a.setAttribute("answer", suggested_a4[3])
              }
              else if (n == 4) {
                q4al.append(suggested_a4[4])
                q4a.setAttribute("id", "q4a4")
                q4a.setAttribute("answer", suggested_a4[4])
              }



            }
            q4a.setAttribute("class", "q2a")
            q4al.append(q4a)
          }


          $("#q4a1").on("change", function () {
            if ($("#q4a1").prop("checked") == false) {
              answer4.pop(0)
              console.log("no")

            }
            if (answer4.length == 1) {
              alert("There should only be one answer for question 4")
              $("#q4a1").prop("checked", false)
            }

            if ($("#q4a1").prop("checked") == true) {
              console.log("hi")
              answer4.push($("#q4a1").attr("answer"))
            }

            console.log(answer4[0])



          })
          $("#q4a2").on("change", function () {
            if ($("#q4a2").prop("checked") == false) {
              answer4.pop(0)
              console.log("no")

            }
            if (answer4.length == 1) {
              alert("There should only be one answer for question 4")
              $("#q4a2").prop("checked", false)
            }

            if ($("#q4a2").prop("checked") == true) {
              console.log("hi")
              answer4.push($("#q4a2").attr("answer"))
            }

            console.log(answer4[0])



          })
          $("#q4a3").on("change", function () {
            if ($("#q4a3").prop("checked") == false) {
              answer4.pop(0)
              console.log("no")

            }
            if (answer4.length == 1) {
              alert("There should only be one answer for question 4")
              $("#q4a3").prop("checked", false)
            }

            if ($("#q4a3").prop("checked") == true) {
              console.log("hi")
              answer4.push($("#q4a3").attr("answer"))
            }

            console.log(answer4[0])



          })
          $("#q4a4").on("change", function () {
            if ($("#q4a4").prop("checked") == false) {
              answer4.pop(0)
              console.log("no")

            }
            if (answer4.length == 1) {
              alert("There should only be one answer for question 4")
              $("#q4a4").prop("checked", false)
            }
            if ($("#q4a4").prop("checked") == true) {
              console.log("hi")
              answer4.push($("#q4a4").attr("answer"))
            }




          }
          )
          let submit = document.createElement("button")
          submit.append("submit")
          submit.setAttribute("id", "submit")
          questions.append(submit)
          $("#submit").on("click", function () {
            var jsondata = { "Quiz_Topics": "1", "Question_1": "1", "assigned_student": "2", "Question_2": "", "question_1_answer": "", "question_2_answer": "", "quiz_desc": "", "enterquiz": 0, "student_login": "", "who_gave_assignment": "", "creator_id": completed_quiz, "quiz_chosen": "0", "quiz_id": "", "Question_3": "", "question_3_answer": "", "Question_4": "", "question_4_answer": "", "user_answer": answer1[0] + "," + answer2[0] + "," + answer3[0] + "," + answer4[0] };
            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://idassignment2-4cad.restdb.io/rest/quiztopic",
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "63e60ecb478852088da6800a",
                "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
            }

            $.ajax(settings).done(function (response) {
              console.log(response);
              $("#submit").hide()
              let gobacktohome = document.createElement("a")
              gobacktohome.setAttribute("href", "home.html")
              gobacktohome.setAttribute("id", "gbacktoh")
              gobacktohome.append("Return to Home")
              questions.append(gobacktohome)
              $("#gbacktoh").attr({ style: 'padding:20px;font-size:25px;background-color:green' })
            });


          })
          $("#submit").attr({ style: 'padding:20px;font-size:25px;background-color:yellow' })


        }
      }

    }

  }

}

);
