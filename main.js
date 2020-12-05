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

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AfaBvyCu4/model.json" , modelLoaded)

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

function predict(){
    img = document.getElementById('captured_image'); 
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error)
    }
     else {
        console.log(results);
        prediction1 = results[0].label
        prediction2 = results[1].label
        console.log(prediction1 , prediction2);
        speak()
        document.getElementById("emotion1").innerHTML=prediction1
        document.getElementById("emotion2").innerHTML=prediction2
        if (prediction1 == "Sad"){
            document.getElementById("emoji1").innerHTML="&#128532;"
        }
        if (prediction1 == "Cry"){
            document.getElementById("emoji1").innerHTML="&#128546;"
        }
        if (prediction1 == "Happy"){
            document.getElementById("emoji1").innerHTML="&#128522;"
        }
        if (prediction1 == "Smiling"){
            document.getElementById("emoji1").innerHTML="&#128512;"
        }
        if (prediction1 == "Angry"){
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if (prediction1 == "Suprised"){
            document.getElementById("emoji1").innerHTML="&#xe410;"
        }
        
        if (prediction2 == "Sad"){
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
        if (prediction2 == "Cry"){
            document.getElementById("emoji2").innerHTML="&#128546;"
        }
        if (prediction2 == "Happy"){
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        if (prediction2 == "Smiling"){
            document.getElementById("emoji2").innerHTML="&#128512;"
        }
        if (prediction2 == "Angry"){
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
        if (prediction2 == "Suprised"){
            document.getElementById("emoji2").innerHTML="&#xe410;"
        }
    }
}