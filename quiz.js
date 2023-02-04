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
    let yourQuizbox = document.createElement("p")
    yourQuizbox.setAttribute('id', 'yourquizbox')
    document.body.append(yourQuizbox)
    $("#yourquizbox").attr({ style: 'display:flex;flex-direction:row;justify-content:center' })
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
    /*var settings = {
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
    */
    choosetypes.append(topic)
    $("#topicfound").attr({ style: 'background-color:orange;margin:25px' })
    let searchtopictitle = document.createElement("p")
    searchtopictitle.append("Search topic: ")
    choosetypes.append(searchtopictitle)
    let search = document.createElement("form")
    choosetypes.append(search)
    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "input")
    search.append(input)
    $("#input").attr({ style: 'padding:20px' })
    let searchbutton = document.createElement("button")
    searchbutton.append("Search")
    searchbutton.setAttribute("id", "searchbutton")
    choosetypes.append(searchbutton)
    let yourquiz = document.createElement("a")
    yourquiz.setAttribute("href", "yourquiz.html")
    yourquiz.append("Your Quiz")
    yourQuizbox.append(yourquiz)
    yourquiz.setAttribute("id", "yourquiz")
    $("#yourquiz").attr({ style: 'background-color:lightblue;padding:20px' })
    let quizzes = document.createElement("p")
    quizzes.setAttribute("id", "quizzes")
    document.body.append(quizzes)
    $("#quizzes").attr({ style: 'display:flex;background-color:orange;flex-wrap:wrap' })
    $("#searchbutton").attr({ style: 'background-color:lightblue;padding:20px' })
    /*var settings = {
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
                let quizfound = document.createElement("p")
                quizfound.setAttribute("id", "quiz")
                quizzes.append(quizfound)
                $("#quiz").attr({ style: 'display:flex;flex-direction:column;padding:60px' })
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

            }
        }
    });
    $("#searchbutton").on("click", function () {
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
            for (n = 0; n < response.length; n++) {
                if ((response[n].Quiz_Topics)[0] == $("#input").val()[0] && response[n].Quiz_Topics[1] == $("#input").val()[1]) {
                    if (response[n].assigned_student == "") {
                        $("#quizzes").hide()
                        let quizzes2 = document.createElement("p")
                        quizzes2.setAttribute("id", "quizzes2")
                        document.body.append(quizzes2)
                        $("#quizzes2").attr({ style: 'display:flex;background-color:orange;flex-wrap:wrap' })
                        let quizfound = document.createElement("p")
                        quizfound.setAttribute("id", "quiz")
                        quizzes2.append(quizfound)
                        $("#quiz").attr({ style: 'display:flex;flex-direction:column;padding:60px' })
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
                    }

                }
            }
        });

    })*/

})
