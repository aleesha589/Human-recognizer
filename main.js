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
