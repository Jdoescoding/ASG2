$(document).ready(function () {
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
    $("#title_box").attr({ style: "display:flex;flex-direction:row;justify-content:center;background-image:url(background.jpg)" })
    let choosetypes = document.createElement("p")
    choosetypes.setAttribute("id", "choosetypes")
    document.body.append(choosetypes)
    $("#choosetypes").attr({ style: 'display:flex;flex-direction:row;align-items:center' })
    let tips = document.createElement("p");
    document.body.append(tips);
    let top = document.createElement("p");
    top.append("Take part in quizzes to have fun and improve your learning!")
    tips.append(top);
    let topictitle = document.createElement("p")
    topictitle.append("Topics found: ")
    choosetypes.append(topictitle)
    topictitle.setAttribute("id", "topics")
    $("#topics").attr({ style: 'padding:15px;margin:10px' })
    let quizbody = document.createElement("p");
    document.body.append(quizbody);
    quizbody.setAttribute("id", "quizbody");
    let img = document.createElement("img");
    img.setAttribute("src", "online learning.png");
    img.setAttribute("id", "image");
    img.setAttribute("width", "400px")
    img.setAttribute("height", "auto")
    quizbody.append(img);
    let topic = document.createElement("p")
    choosetypes.append(topic)
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
    $.ajax(settings).done(function (response) {
        for (n = 0; n < response.length; n++) {
            if (response[n].assigned_student == "0") {
                topic.append(response[n].Quiz_Topics)
            }
        }
    })
    $("#topicfound").attr({ style: 'background-color:orange' })
    let quizzes = document.createElement("p")
    quizzes.setAttribute("id", "quizzes")
    document.body.append(quizzes)
    $("#quizzes").attr({ style: 'display:flex;flex-direction:column;background-color:orange;flex-wrap:wrap' })
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

    $.ajax(settings).done(function (response) {
        for (n = 0; n < response.length; n++) {
            if (response[n].assigned_student == "0") {
                let quizfound = document.createElement("button")
                quizfound.setAttribute("id", "quiz" + n)
                quizzes.append(quizfound)
                quizfound.setAttribute("href", "quizchosen.html")
                $("#quiz" + n).attr({ style: 'display:flex;flex-direction:column;padding:60px' })
                let desc = document.createElement("p")
                desc.setAttribute("id", "desc")
                desc.append(response[n].quiz_desc)
                quizfound.append(desc)
                let numberoftimesenter = document.createElement("p")
                numberoftimesenter.append("Number of times entered: " + response[n].enterquiz)
                quizfound.append(numberoftimesenter)
                let quiz_topic = document.createElement("p")
                quiz_topic.append("Topic: " + response[n].Quiz_Topics)
                quizfound.append(quiz_topic)
                quizfound.setAttribute('quizid', response[n].quiz_id)
                console.log(response[n].quiz_id)
                $("#quiz" + n).on("click", function () {
                    var jsondata = { "Quiz_Topics": "1", "Question_1": "1", "assigned_student": "2", "Question_2": "", "question_1_answer": "", "question_2_answer": "", "quiz_desc": "", "enterquiz": 0, "student_login": "student", "who_gave_assignment": "", "creator_id": "", "quiz_chosen": quizfound.getAttribute('quizid'), "quiz_id": "", "Question_3": "", "question_3_answer": "", "Question_4": "", "question_4_answer": "", "user_answer": "" };
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
                    });
                    let enter = document.createElement("a")
                    quizfound.append(enter)
                    enter.append("Try Quiz")
                    enter.setAttribute("href", "tryquiz.html")
                })

            }

        }



    })
    $("#searchbutton").on("click", function () {
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


        $.ajax(settings).done(function (response) {
            for (n = 0; n < response.length; n++) {
                if ((response[n].Quiz_Topics)[0] == $("#input").val()[0] && response[n].Quiz_Topics[1] == $("#input").val()[1]) {
                    if (response[n].assigned_student == "0") {
                        $("#quizzes").hide()
                        console.log(response[n].quiz_id)
                        let quizzes2 = document.createElement("p")
                        quizzes2.setAttribute("id", "quizzes2")
                        document.body.append(quizzes2)
                        $("#quizzes2").attr({ style: 'display:flex;background-color:orange;flex-wrap:wrap' })
                        let quizfound = document.createElement("button")
                        quizfound.setAttribute("id", "quizsearched" + n)
                        quizzes2.append(quizfound)
                        quizfound.setAttribute("href", "quizchosen.html")
                        $("#quizsearched" + n).attr({ style: 'display:flex;flex-direction:column;padding:60px' })
                        let desc = document.createElement("p")
                        desc.setAttribute("id", "desc")
                        desc.append(response[n].quiz_desc)
                        quizfound.append(desc)
                        let numberoftimesenter = document.createElement("p")
                        numberoftimesenter.append("Number of times entered: " + response[n].enterquiz)
                        quizfound.append(numberoftimesenter)
                        let quiz_topic = document.createElement("p")
                        quiz_topic.append("Topic: " + response[n].Quiz_Topics)
                        quizfound.append(quiz_topic)
                        quizfound.setAttribute('quizid', response[n].quiz_id)
                        $("#quizsearched" + n).on("click", function () {
                            var jsondata = { "Quiz_Topics": "1", "Question_1": "1", "assigned_student": "2", "Question_2": "", "question_1_answer": "", "question_2_answer": "", "quiz_desc": "", "enterquiz": 0, "student_login": "student", "who_gave_assignment": "", "creator_id": "", "quiz_chosen": quizfound.getAttribute('quizid'), "quiz_id": "", "Question_3": "", "question_3_answer": "", "Question_4": "", "question_4_answer": "", "user_answer": "" };
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
                            });
                            let enter = document.createElement("a")
                            quizfound.append(enter)
                            enter.append("Try Quiz")
                            enter.setAttribute("href", "tryquiz.html")
                        })
                    }
                }
            }

        });

    })

})*/
})
