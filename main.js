Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:'90'
});

Webcam.attach('#camera');

function takepic(){

    Webcam.snap(function(capture_image){
        document.getElementById("result").innerHTML='<img id="pic" src="'+capture_image+'"/>';
    });
}
console.log('ml5 version is:', ml5.version);


classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gez-b5fh1/model.json",modelready);
function modelready(){
    console.log("model loaded succesfully");
}

function identify(){
captured_img=document.getElementById("pic");
classifier.classify(captured_img,getresults);

}
function getresults(error,result){
if (error){

console.error(error);
}
else{
console.log(result);
document.getElementById("object_name").innerHTML=result[0].label;
document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
}


}