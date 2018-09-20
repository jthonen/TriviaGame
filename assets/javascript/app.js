$(document).ready(function(){
   
    var timeset = 10;
    var counter = setInterval(timer, 1000)
    var correctanswers = 0;
    var incorrectanswes = 0;
    var unanswer = 0;

    hidestart();

    function hidestart() {
        $(".qone").hide();
        $(".qtwo").hide();
        $(".qthree").hide();
        $(".qfour").hide();
    }

    function countdown() {
        timeset = timeset-1; 
        if (timeset <= 0) {
            clearInterval(counter);
            return;
        }
        
    }

    $(".start-button").on("click", function(){
        $(".start").hide();
        $(".qone").show();
        countdown();
        
    })



});