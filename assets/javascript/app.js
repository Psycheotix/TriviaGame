
$(document).ready(function() { 

    //VARIABLES//    
    var allQuestions = [{
      question: "What decade is the series set?",
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
      choices: ["Super Strength", "Telepathy", "Super Speed", "Telekinesis"],
      correctAnswer: 3
    }];
    
var correct = 0;   //variable is a counter for how many users get's correct
var selected = []; //variable where user answers will be pushed
var position = 0;
var timer = 20;
var timeInterval;


///VARIABLES FOR TIME


    // Show the user the start screen to begin with
    document.getElementById('quiz-container').style.display = 'none'; //Hide quiz-container
    document.getElementById('score-container').style.display = 'none'; //Hide score-container
    
    // When the user clicks the start button show the first question - This is also the reset game
    $("#start, #restart").click(function(){ //Function for buttons Start and restart
        position=0;
        correct=0;
        selected=[];
        timer = 20;
        clearInterval(timeInterval);
        // $('#score-container').empty();
        $('#timer').text("0:" + timer);
        document.getElementById("Instructions").style.display = 'none'; //Hiding Instructions
        document.getElementById("score-container").style.display = 'none'; //Hiding score-container
        showQuestion(); //call function
        startTimer();
        $("#quiz-container").fadeIn("slow"); //Fade in container with questions
    });
    
    // When the user clicks the Done button, check the answer and show the next question
    $("#next").click(function(){
        clearInterval(timeInterval);
        if ($("#answers input").is(":checked")) {
            checkAnswer();
            position++;
            showQuestion();//Go to and show next question function
            timer = 20;
            $('#timer').text("0:" + timer);
            startTimer();
            
        }
        else{
            alert("Please select and answer."); //alert if no answer was picked
            startTimer()
        }
        console.log(correct, selected);
    });
    
    
    // Function that creates the HTML for the question in the current position
    function showQuestion(){
        document.getElementById("question").innerHTML = null; // Setting question in HTML to null first
        document.getElementById("answers").innerHTML = null; // Setting answers in HTML to null
        
        if(position<allQuestions.length){ //If position is less than the content in the array 
            document.getElementById("question").innerHTML += allQuestions[position].question; //Get the id question in the HTML and add question
            for(var i=0; i<allQuestions[position].choices.length; i++){ //for loop to add all the question choices
                document.getElementById("answers").innerHTML += "<div class='radio'><label><input type='radio' value='" + allQuestions[position].choices[i] + "' >" + allQuestions[position].choices[i] + "<label></div><br>" //In answers id add radio buttons and all choices for the questions
            }
        }
        else {
            document.getElementById("quiz-container").style.display = 'none'; //Hide quiz-container
            $("#score-container").append("<h2>You got" + "" + correct + "" + "questions correct!</h2>").fadeIn("slow");  //Fade in the score with the user's correct answers count
        }
    }
    
    // Function that checks to see if the answer is correct
    function checkAnswer(){
        selected.push($("#answers input:checked").val()); //push to the array, check value
        console.log(allQuestions[position].choices)//Console log 
        var correctAnswer = allQuestions[position].choices[allQuestions[position].correctAnswer];
        if(selected[position] === correctAnswer){
            correct++; //add to correct counter +1
        }
    }

    ///Start Timer
    function startTimer(){
        timeInterval = setInterval(function(){
            if( timer == 0 ) {
                checkAnswer();
                position++;
                showQuestion();
                timer = 20;
            } else {
                timer--;
            }
           $("#timer").text("0:" + timer);

        },1000)
    }
    
});
    
