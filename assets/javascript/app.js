

function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 === "Answer-01"){
        correct++;
    }
    if (question2 === "Question2-Answer02"){
        correct++
    }
    if (question3 === "Question3-Answer02"){
        correct++
    }

    var messeges = ["Great Job! You know Stranger Things!", "Time to binge watch again", "I don't think you watched the show"]
    var animated = [ "assets/images/StrangerThingsHug.gif", "assets/images/StrangerThingsMilk.gif", "assets/images/Stranger-Things-Eleven-Kills.gif" ]

    var score;

        if (correct < 1){
            score = 2;
        }

        if (correct > 0 && correct < 3) {
            score = 1;
        }

        if (correct > 2) {
            score = 0;
        }


    document.getElementById("afterSubmit").style.visibility = "visible";
    document.getElementById("messeges").innerHTML = messeges[score]
    document.getElementById("numberCorrect").innerHTML = "You got" + " " + correct + " " + "correct.";
    document.getElementById("animated").src = animated[score];

}