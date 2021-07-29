Webcam.set(
    {
        width:290,
        height:300,
        image_format:"png",
        png_quality:90,
        constraints:{facingMode:"environment"}
    }
);
var camera= document.getElementById("camera");
Webcam.attach(camera);

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ML5 version: "+ ml5.version);


var classifier=ml5.imageClassifier("MobileNet",model_loaded);

function model_loaded(){
    console.log("model is loaded");
}

function Check(){
     var img_captured=document.getElementById("captured_image");
     classifier.classify(img_captured, gotRuselt);

}

function gotRuselt(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}