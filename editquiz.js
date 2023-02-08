$(document).ready(function () {
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
    let title_box = document.createElement("p")
    title_box.setAttribute("id", "title_box")
    document.body.append(title_box)
    let yourquestiontitle = document.createElement("h2")
    yourquestiontitle.append("Start Creating Your Questions")
    yourquestiontitle.setAttribute("id", "yourquestiontitle")
    title_box.append(yourquestiontitle)
    $("#yourquestiontitle").attr({ style: 'background-color:green;display:flex;flex-direction:row' })
    function screen() {
        if (a.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:#FFFACD' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:20px;margin:5px;background-color:yellow;color:purple' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })


        }
        else if (b.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:#FFFACD;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:30px;margin:10px;background-color:yellow;color:purple;font-size:20px' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })

        }
        else if (c.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:#FFFACD;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:30px;margin:10px;background-color:yellow;color:purple;font-size:20px' })
            $(".flexboxes_home").on("click", function () { style: 'color:purple' })
        }
        else if (d.matches) {
            $(".flexbox_topstudent").attr({ style: 'display:flex;flex-direction:row;justify-content:space-between;padding:20px;margin:5px' })
            $("#announcements").attr({ style: 'width:200px;height:400px;background-color:#FFFACD;color:purple' })
            $("#top_student").attr({ style: 'width:200px;height:400px;background-color:#E0FFFF;color:purple' })
            $(".flexboxes_home").attr({ style: 'display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:45px;margin:30px;background-color:yellow;color:purple;font-size:30px' })
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


})