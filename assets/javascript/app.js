
$(document).ready(function() {

    //VARIABLES//    
    var allQuestions = [{
      question: "What year decade is the series set?",
      choices: ["1950s", "1970s", "1980s", "1990s"],
      correctAnswer: 2
    }, {
      question: "Where does the story take place?",
      choices: ["Dungeaons & Dragons", "Super Mario Bros", "The Legend of Zelda", "Pack Man"],
      correctAnswer: 0
    }, {
      question: "Name the actress who plays Will's mom?",
      choices: ["Ashley Judd", "Winona Ryder", "Lena Headey", "Katie McGrath"],
      correctAnswer: 1
    }, {
      question: "What is Eleven's super power?",
      choices: ["Super Strenght", "Telepathy", "Super Speed", "Telekinesis"],
      correctAnswer: 3
    }];
    
var correct = 0;
var selected = [];
var position = 0;


///VARIABLES FOR TIME


    // Show the user the start screen to begin with
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'none';
    
    // When the user clicks the start button show the first question
    $("#start, #restart").click(function(){
        position=0;
        correct=0;
        selected=[];
        document.getElementById("Instructions").style.display = 'none';
        document.getElementById("score-container").style.display = 'none';
        showQuestion();
        
        $("#quiz-container").fadeIn("slow");
    });
    
    // When the user clicks next, check the answer and show the next question
    $("#next").click(function(){
        if ($("#answers input").is(":checked")) {
            checkAnswer();
            position++;
            showQuestion();
            
        }
        else{
            alert("You need to select an answer.");
        }
        console.log(correct, selected);
    });
    
    
    // Function that creates the HTML for the question in the current position
    function showQuestion(){
        document.getElementById("question").innerHTML = null;
        document.getElementById("answers").innerHTML = null;
        
        if(position<allQuestions.length){
            document.getElementById("question").innerHTML += allQuestions[position].question;
            for(var i=0; i<allQuestions[position].choices.length; i++){
                document.getElementById("answers").innerHTML += "<div class='radio'><label><input type='radio' value='" + allQuestions[position].choices[i] + "' >" + allQuestions[position].choices[i] + "<label></div><br>"
            }
        }
        else {
            document.getElementById("quiz-container").style.display = 'none';
            $("#score-container").append("<h1>You got " + correct + " questions correct!</h1>").fadeIn("slow");   
        }
    } 
    
    // Function that checks to see if the answer is correct
    function checkAnswer(){
        selected.push($("#answers input:checked").val());
        var correctAnswer = allQuestions[position].choices[allQuestions[position].correctAnswer];
        if(selected[position] === correctAnswer){
            correct++;
        }
    }  
    
});
    
