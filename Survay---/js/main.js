$("#playNowButton").on("click", function() {
    $("#playNowButton").hide()
            var mydiv = $("#startquizz");
            var myvideo = $("<video id='myfileplayer' src='media/logo_reveal.mp4' width='100%' height='100%' control='0' autoplay='1'></video>");
            mydiv.append(myvideo);
                $("#myfileplayer").on("ended", function() {
                    document.getElementById("startquizz").style.backgroundImage = "url('media/Background_questions.png')";
                   // document.getElementById("startquizz").style.display = "inline";
                    document.getElementById("playcontain").style.display = "none";
                    
                    document.getElementById("myfileplayer").style.display = "none";
                    document.getElementById("gameContain").style.visibility = "visible";
                    });
        
    });
 const PlayAgainBtn=document.getElementById('playAgainButton');
 const skipBtn=document.getElementById('skip');
 const startquizz=document.getElementById('startquizz');
 const resultBox=document.getElementById('result');
 const rightWrong=document.getElementById('rightwrong');
 const Reason=document.getElementById('reason');





 const Choices=document.querySelectorAll('.choice-container');
 let x=1;


  function addDelay(){
	  startquizz.style.display='none';
	  resultBox.style.display='block';
	  rightAnswerDivs = document.getElementsByClassName("choice-container");
	  
	  for(var i =0; i < rightAnswerDivs.length; i++){
		rightAnswerDivs[i].style.background = "#4f566b";
	  }
	  
  }
  
  
 Choices.forEach((choice)=>{
   choice.addEventListener('click',()=>{
    //console.log(choice.getAttribute('data-number'));
    
    if(x==1){

      if((choice.getAttribute('data-number'))==="1")
      {
        rightWrong.innerHTML='Right Answer!';
      }else{
        rightWrong.innerHTML='Sorry! Wrong Answer';
		
		  }
	  
	  rightAnswerDiv = document.getElementById("choiceResult1");
	  rightAnswerDiv.style.background = "green";
	  
      Reason.innerHTML=`the correct syntax for referring to an external script called xxx.js by using attribute href`;
       
      
     
    }else if(x==2){

      if((choice.getAttribute('data-number'))==="3")
      {
        rightWrong.innerHTML='Right Answer!';
      }else{
        rightWrong.innerHTML='Sorry! Wrong Answer';
		console.log(choice.getAttribute('data-number'));
		 }
      rightAnswerDiv = document.getElementById("choiceResult3");
	  rightAnswerDiv.style.background = "green";
	  
	  Reason.innerHTML=` we can write Hello World in an alert box using alert('Hello World')`;
      
      
      


    }else if(x==3){

      if((choice.getAttribute('data-number'))==="4")
      {
        rightWrong.innerHTML='Right Answer!';
        
      }else{
        rightWrong.innerHTML='Sorry! Wrong Answer';
		
	  }
	  
	  rightAnswerDiv = document.getElementById("choiceResult4");
	  rightAnswerDiv.style.background = "green";
	  
      Reason.innerHTML=`we put javascript in html element called script`;
      
      
    }
   
	setTimeout(() => {  addDelay() }, 1500);
    
        x++;
   
   })
  
 })
 skipBtn.addEventListener('click',()=>{
  startquizz.style.display='block';
  resultBox.style.display='none';
  if(x == questions.length + 1){
    skipBtn.innerText = "Play Again";
  }else{
    getNewQuestion();
    skipBtn.innerText = "Next Question";
  }

 })



 

 