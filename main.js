Webcam.set({
    width:350 , 
    hieght:300 , 
    image_format: "png" ,
    png_quality : 90  
});

Webcam.attach("#camera")

function take_photo(){

    Webcam.snap(
     function(selfie){
         document.getElementById("result").innerHTML=`<img src=${selfie} id='captured_image'>`
     }
        );
}

console.log("ml5" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AfaBvyCu4/model.json" , modelLoaded())

function modelLoaded(){
    console.log("model has been loaded")
}

function speak(){
    var speech = window.speechSynthesis;
    var speak_data1 = "The first prediction is "+prediction1;
    var speak_data2 = "The second prediction is "+prediction2;
    var speak_this = new SpeechSynthesisUtterance (speak_data1+speak_data2);
    speech.speak(speak_this);
}