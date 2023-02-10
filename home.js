window.setTimeout(function () {
    $("#animation").hide()
    let homepagebuttons = document.createElement("p")
    homepagebuttons.setAttribute("class", "flexboxes_home")
    document.body.append(homepagebuttons)
    let home = document.createElement("a");
    homepagebuttons.append(home);
    home.setAttribute("href", "home.html");
    home.append("Home");
    let quiz = document.createElement("a");
    homepagebuttons.append(quiz);
    quiz.setAttribute("href", "quiz.html");
    quiz.append("Quiz");
    let assignment = document.createElement("a");
    assignment.setAttribute("href", "assignment.html");
    assignment.append("Assignment");
    homepagebuttons.append(assignment);
    let leaderboard = document.createElement("a");
    leaderboard.setAttribute("href", "leaderboard.html");
    leaderboard.append("Leaderboard");
    homepagebuttons.append(leaderboard);
    let profile = document.createElement("a");
    profile.setAttribute("href", "profile.html");
    profile.append("Profile");
    homepagebuttons.append(profile);
    let homecontent = document.createElement("p")
    homecontent.setAttribute("class", "flexbox_topstudent")
    document.body.append(homecontent)
    let announcements = document.createElement("p")
    announcements.setAttribute("id", "announcements")
    homecontent.append(announcements)
    let titleannouncement = document.createElement("h2")
    titleannouncement.append("Announcements")
    announcements.append(titleannouncement)
    let anndetails2 = document.createElement("p")
    anndetails2.append("Welcome back. You have some undone assignments:")
    announcements.append(anndetails2)
    let anndetails = document.createElement("p")
    anndetails.setAttribute("id", "anndetails")
    announcements.append(anndetails)
    $("#anndetails").attr({ style: 'display:flex;flex-direction:column;margin:25px;background-color:lightpink' })
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
            if (response[response.length - 1].student_login == response[n].student_username) {
                let people_gave_assignment = document.createElement("p")
                anndetails.append(people_gave_assignment)
                people_gave_assignment.append(response[n].who_gave_assignment + " assigned you a quiz: ")
                let quiz_desc = document.createElement("p")
                anndetails.append(quiz_desc)
                quiz_desc.append(response[n].quiz_desc)
            }
        }
    })
    let topstudent = document.createElement("p");
    topstudent.setAttribute("id", "top_student")
    homecontent.append(topstudent)
    function screen() {
        if (a.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px;border-radius:40px;' })
            $("#announcements").attr({ style: 'width:500px;height:400px;background-color:pink;color:purple;border-radius:40px;' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple;border-radius:40px;' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:20px;margin:5px;background-color:lightblue;color:purple;border-radius:40px;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple;' })


        }
        else if (b.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px;' })
            $("#announcements").attr({ style: 'width:500px;height:400px;background-color:pink;color:purple;border-radius:40px;' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple;border-radius:40px;' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:30px;margin:10px;background-color:lightblue;color:purple;font-size:20px;border-radius:40px;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })

        }
        else if (c.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:500px;height:400px;background-color:pink;color:purple;border-radius:40px;' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple;border-radius:40px;' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:30px;margin:10px;background-color:lightblue;color:purple;font-size:20px;border-radius:40px;' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
        else if (d.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:500px;height:400px;background-color:pink;color:purple;border-radius:40px;' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple;border-radius:40px;' })
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
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idassignment2-4cad.restdb.io/rest/topstudentspoint",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "63e60ecb478852088da6800a",
            "cache-control": "no-cache"
        }
    }
    let studentname = [];
    let studentpoint = [];
    let topstudentspoints = 0;
    let nintopstudentslist = 0;
    $.ajax(settings).done(function (response) {
        for (i = 0; i < response.length; i++) {
            if (response[i].topstudentspoints > topstudentspoints) {
                nintopstudentslist = i;
                studentname.push(response[i].topstudentsname)
                studentpoint.push(response[i].topstudentspoints)
            }
        }
        topstudent.append(studentname[1] + " is the top scoring student with " + studentpoint[1] + " points!");


    });
}, 400);

