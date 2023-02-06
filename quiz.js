$(document).ready(function () {
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
    let title_box = document.createElement("p")
    title_box.setAttribute("id", "title_box")
    document.body.append(title_box)
    let quizzestitle = document.createElement("h1")
    quizzestitle.append("Quizzes")
    title_box.append(quizzestitle)
    function screen() {
        if (a.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $("#quizbutton").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:yellow;width:150px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:20px' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })

            1
        }
        else if (b.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $("#quizbutton").attr({ style: 'padding:20px;background-color:lightblue;width:150px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:yellow;width:150px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:yellow;width:150px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:orange;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:20px' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })

        }
        else if (c.matches) {
            $("#home").attr({ style: 'padding:20px;background-color:yellow;width:180px' })
            $("#quizbutton").attr({ style: 'padding:20px;background-color:lightblue;width:180px' })
            $("#assignment").attr({ style: 'padding:20px;background-color:yellow;width:180px' })
            $("#leaderboard").attr({ style: 'padding:20px;background-color:yellow;width:180px;' })
            $("#profile").attr({ style: 'padding:20px;background-color:yellow;width:180px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:yellow;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:20px' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
        else if (d.matches) {
            $("#home").attr({ style: 'padding:30px;background-color:yellow;width:250px' })
            $("#quizbutton").attr({ style: 'padding:30px;background-color:lightblue;width:250px' })
            $("#assignment").attr({ style: 'padding:30px;background-color:yellow;width:250px' })
            $("#leaderboard").attr({ style: 'padding:30px;background-color:yellow;width:250px;' })
            $("#profile").attr({ style: 'padding:30px;background-color:yellow;width:250px' })
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:red;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:green;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:20px' })
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
    $("#title_box").attr({ style: "display:flex;flex-direction:row;justify-content:center;padding:20px;background-color:yellow" })
    let choosetypes = document.createElement("p")
    choosetypes.setAttribute("id", "choosetypes")
    document.body.append(choosetypes)
    $("#choosetypes").attr({ style: 'display:flex;flex-direction:row;align-items:center' })
    let topictitle = document.createElement("p")
    topictitle.append("topics found: ")
    choosetypes.append(topictitle)
    topictitle.setAttribute("id", "topics")
    $("#topics").attr({ style: 'padding:15px;margin:10px' })
    let topic = document.createElement("p")
    topic.setAttribute("id", "topicfound")
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://assignment2id-dc5f.restdb.io/rest/quiztopics",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63d771f53bc6b255ed0c446c",
            "cache-control": "no-cache"
        }
    }
    $.ajax(settings).done(function (response) {
        for (n = 0; n, response.length; n++) {
            if (response[n].assigned_student == "") {
                topic.append(response[n].Quiz_Topics)
            }
        }
    })
    choosetypes.append(topic)
    $("#topicfound").attr({ style: 'background-color:orange' })
    let quizzes = document.createElement("p")
    quizzes.setAttribute("id", "quizzes")
    document.body.append(quizzes)
    $("#quizzes").attr({ style: 'display:flex;flex-direction:column;background-color:orange;flex-wrap:wrap' })
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://assignment2id-dc5f.restdb.io/rest/quiztopics",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63d771f53bc6b255ed0c446c",
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        for (n = 0; n, response.length; n++) {
            console.log(response[n].student_username)
            if (response[n].assigned_student == "") {
                let quiz = document.createElement("p")
                quiz.setAttribute("id", "quiz")
                quizzes.append(quiz)
                $("#quiz").attr({ style: 'display:flex;flex-direction:column' })
                let desc = document.createElement("p")
                desc.setAttribute("id", "desc")
                desc.append(response[n].quiz_desc)
                quiz.append(desc)
                let numberoftimesenter = document.createElement("p")
                numberoftimesenter.append("Number of times entered: " + response[n].enterquiz)
                quiz.append(numberoftimesenter)
                let quiz_topic = document.createElement("p")
                quiz_topic.append("Topic: " + response[n].Quiz_Topics)
                quiz.append(quiz_topic)
            }
        }
    });
})
