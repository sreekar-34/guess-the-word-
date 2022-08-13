player_1Name=localStorage.getItem("player1_name");
player_2Name=localStorage.getItem("player2_name");
player_1score=0;
player_2score=0;


document.getElementById("player1_name").innerHTML=player_1Name+" : ";
document.getElementById("player2_name").innerHTML=player_2Name+" : ";


document.getElementById("player1Score").innerHTML=player_1score;
document.getElementById("player2Score").innerHTML=player_2score;


document.getElementById("player_question").innerHTML="question turn-"+player_1Name;
document.getElementById("player_answer").innerHTML="answer turn-"+player_2Name;


function send(){
    get_word=document.getElementById("word").value;
    word= get_word.toLowerCase();
    console.log("word in lowercase = " + word);


    charAt1= word.charAt(1);
    console.log(charAt1);


    length_divide_2= Math.floor(word.length/2);
    charAt2= word.charAt(length_divide_2);
    console.log(charAt2);

   
    length_minus_1= word.length - 1;
    charAt3= word.charAt(length_minus_1);
    console.log(charAt3);


    remove_charAt1= word.replace(charAt1,"_");
    remove_charAt2= remove_charAt1.replace(charAt2,"_");
    remove_charAt3= remove_charAt2.replace(charAt3,"_");
    question_word="<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> check </button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}


question_turn="player1";
answer_turn="player2";


function check() {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    

    if(answer==word){
    if(answer_turn=="player1"){
        player_1score+=1;
        document.getElementById("player1Score").innerHTML=player_1score;
    }
    else{
        player_2score+=1;
        document.getElementById("player2Score").innerHTML=player_2score;
    }
    }


    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn -"+ player_2Name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn -"+ player_1Name;
    }


    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn -"+ player_2Name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn -"+ player_1Name;
    }
    document.getElementById("output").innerHTML="";
}