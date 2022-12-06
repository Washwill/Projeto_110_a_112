var previsao1 = "";

Webcam.set({
width: 350, height: 300, imageFormat: 'png', pngQuality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

 function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="foto" src="'+data_uri+'"/>';
     });
 }

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yHBEvqiRV/model.json', modelLoded);

 function modelLoded(){
     console.log("modelo carregado"); 
 }

 function speak(){
     synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é: " + previsao1;
    utterThis = new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis);
 }

 function check(){
    img = document.getElementById("foto");
    classifier.classify(img, gotResult);
 }

 function gotResult(error, results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("resultEnotionName").innerHTML = results[0].label;

         previsao1 = results[0].label;

         speak();

         if(previsao1 == "Tranquilo"){
            document.getElementById("updateEmoji").innerHTML = "&#129305;";
         }
         if(previsao2 == "Vitória"){
            document.getElementById("updateEmoji").innerHTML = "&#65039;";
         }
         if(previsao1 == "Legal"){
            document.getElementById("updateEmoji").innerHTML = "&#128077;";
         }
         }
     }
   }