/**
  Copyright 2016
  Written by Jardón Fonseca Bruno
  http://bjardon.github.io
**/
var quizz = handler.getquizz(parseInt($("#_quizz").text()));
var current = 0;
var points = 0;
var total = quizz.questions.length;

$(document).ready(function() {
	$("#cntQuestionnaire").hide();
	$("#cntResult").hide();
});


$("#btnGo").click(function () {
	$("#hideable").hide();
	start();
});

$("#btnTrue").click(function () {
	check(true);
});

$("#btnFalse").click(function () {
	check(false);
});

var check = function(ans) {
	if(current == total - 1)
		stop();
	if(ans == quizz.questions[current].answer)
		points++
	current++;
	showQuestion(current);
}

var start = function() {
	$("#cntQuestionnaire").show();
	showQuestion(current);
}

var showQuestion = function(i) {
	$("#question").empty();
	$("#title").text("Pregunta " + (i + 1));
	$("#question").append('<strong>' + quizz.questions[i].question + '</strong>');
}

var stop = function() {
	var avg = points / total * 10;
	var phrase;
	
	if(avg < 6)
		phrase = "Sigue estudiando";
	else if(avg >= 6 && avg < 8)
		phrase = "Puedes lograr algo mejor";
	else if(avg >= 8 && avg < 10)
		phrase = "¡Felicidades!";
	else
		phrase = "¡EXCELENTE!";

	$("#cntQuestionnaire").hide();
	$("#cntResult").show();
	$("#correct").text(points);
	$("#total").text(total);
	$("#avg").text(avg);
	$("#phrase").text(phrase);
	$("#btnNext").removeClass("disabled");
}