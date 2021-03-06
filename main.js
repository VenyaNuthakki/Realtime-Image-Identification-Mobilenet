function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  var constraints = { audio: false, video: { facingMode: { exact: "environment" } } };
  video = createCapture(constraints);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", modelloaded);
}

function modelloaded() {
  console.log("modelloaded");
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, get_result);
}

function get_result(error,results) {
  if (error){
    console.log("error")
  }
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
} 