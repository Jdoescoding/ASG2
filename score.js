let box = document.createElement("p")
box.setAttribute("id", "scorebox")
document.body.append(box)
$("#scorebox").attr({ style: 'display:flex;justify-content:center;flex-direction:column' })
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://idassignment2final-af39.restdb.io/rest/quiztopic",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "63e62546478852088da6800e",
        "cache-control": "no-cache"
    }
}
correctanswers = 0
let useranswer = []
$.ajax(settings).done(function (response) {
    for (n = 0; n < response.length; n++) {
        if (response[n].creator_id != "") {
            for (a = 0; a < response.length; a++) {
                if (response[n].creator_id == response[a].quiz_id) {
                    console.log(useranswer)
                    useranswer = (response[n].user_answer).split(",")
                    correctanswer1 = (response[a].question_1_answer).split(",")
                    correctanswer2 = (response[a].question_2_answer).split(",")
                    correctanswer3 = (response[a].question_3_answer).split(",")
                    correctanswer4 = (response[a].question_4_answer).split(",")
                    if (useranswer[0] == correctanswer1[0]) {
                        correctanswers = correctanswers + 1

                        if (useranswer[1] == correctanswer2[0]) {
                            correctanswers = correctanswers + 1

                        }
                        if (useranswer[2] == correctanswer3[0]) {
                            correctanswers = correctanswers + 1

                        }
                        if (useranswer[3] == correctanswer4[0]) {
                            correctanswers = correctanswers + 1

                        }
                    }


                }

            }
        }
    }
    let score = document.createElement("p")
    score.append("You have gotten " + correctanswers + " out of 4 questions correct!")
    box.append(score)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassignment2final-af39.restdb.io/rest/studentdetail",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63e62546478852088da6800e",
            "cache-control": "no-cache"
        }
    }
    $.ajax(settings).done(function (response2) {
        for (n = 0; n < response.length; n++) {
            for (a = 0; a < response2.length; a++) {
                if (response[n].student_login == response2[a].student_username) {
                    response2[a].student_points = response2[a].student_points + 10 * correctanswers
                    let points = document.createElement("p")
                    points.append("You now have " + response2[a].student_points + " points")
                    box.append(points)
                    var jsondata = { "student_username": response2[a].student_username, "student_password": response2[a].student_password, "student_points": response2[a].student_points };
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "https://idassignment2final-af39.restdb.io/rest/studentdetail/" + response2[a]._id,
                        "method": "PUT",
                        "headers": {
                            "content-type": "application/json",
                            "x-apikey": "63e62546478852088da6800e",
                            "cache-control": "no-cache"
                        },
                        "processData": false,
                        "data": JSON.stringify(jsondata)
                    }
                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        let gobacktohome = document.createElement("a")
                        gobacktohome.append("Return to Home")
                        gobacktohome.setAttribute('href', "home.html")
                        box.append(gobacktohome)
                    });
                }

            }
        }
    })




});