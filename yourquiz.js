$(document).ready(function () {
    let quizzes = document.createElement("p")
    quizzes.setAttribute("id", "quizzes")
    document.body.append(quizzes)
    $("#quizzes").attr({ style: 'display:flex;flex-wrap:wrap' })
    let quizfound = document.createElement("p")
    quizfound.setAttribute("id", "quiz")
    quizzes.append(quizfound)
    $("#quiz").attr({ style: 'display:flex;flex-direction:column;padding:60px' })
    let desc = document.createElement("p")
    desc.setAttribute("id", "desc")
    desc.append("desc")
    quizfound.append(desc)
    let numberoftimesenter = document.createElement("p")
    numberoftimesenter.append("Number of times entered: ")
    quizfound.append(numberoftimesenter)
    let quiz_topic = document.createElement("p")
    quiz_topic.append("Topic: ")
    quizfound.append(quiz_topic)
    let edit = document.createElement("a")
    edit.append("Edit")
    edit.setAttribute("href", "editquiz.html")
    edit.setAttribute("id", "edit")
    quizfound.append(edit)
    $("#edit").attr({ style: 'padding:20px;background-color:lightblue;width:50px' })
    let createquiz = document.createElement("a")
    createquiz.append("Create Quiz")
    createquiz.setAttribute("href", "editquiz.html")
    createquiz.setAttribute("id", "createquiz")
    quizzes.append(createquiz)
    $("#createquiz").attr({ style: 'background-color:green;padding:60px' })
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
            if (response[n].creator_id == reponse[response.length - 1].student_login) {
                let quizfound = document.createElement("p")
                quizfound.setAttribute("id", "quiz")
                quizzes.append(quizfound)
                $("#quiz").attr({ style: 'display:flex;flex-direction:column' })
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
let edit = document.createElement("a")
    edit.append("Edit")
    edit.setAttribute("href", "editquiz.html")
    edit.setAttribute("id", "edit")
    quizfound.append(edit)
    $("#edit").attr({ style: 'padding:20px;background-color:lightblue;width:50px' })
            }
        }
    });*/
})
