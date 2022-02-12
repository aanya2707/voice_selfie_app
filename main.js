var SpeechRecognition = window.webkitSpeechRecognition ;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("take my selfie");
        speak();}
    
}

function speak(){
var synth = window.speechSynthesis;
speak_data = "taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(Camera);
setTimeout(function(){
    take_snapshot();
    Save();
 },5000);
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 90 
});
Camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src = " '+data_uri+'"/>';
    });
}

function Save(){
    link = document.getElementById("link");
    selfie = document.getElementById("selfie").src;
    link.href=selfie;
    link.click();
}