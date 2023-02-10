$(document).ready(function () {
  let pf = document.createElement("p")
  pf.setAttribute("id", "pf")
  document.body.append(pf)
  let student= document.createElement("h1")
  student.append("Profile")
  pf.append(student)
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
  quiz.setAttribute("id", "quiz")
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
  let profilebody = document.createElement("p");
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
          $(".description")
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
  $("#pf").attr({ style: "display:flex;flex-direction:row;justify-content:center;padding:20px;text-align:center;" })
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assignment2id-dc5f.restdb.io/rest/studentdetails",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "	63d771f53bc6b255ed0c446c",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    for(i = 0; response.length > i; i++)
    {
      let pfname= document.getElementsByClassName("name");
      if(pfname == response[i].student_username)
      {
        
      }
    }
  });
})