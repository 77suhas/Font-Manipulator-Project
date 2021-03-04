noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup() {
  canvas = createCanvas(500, 500)
  canvas.position(600, 150)
  video = createCapture(VIDEO)
  video.size(500, 500)
  poseNet = ml5.poseNet(video, modelloaded)
  poseNet.on("pose", gotResults)
}
function modelloaded() {
  console.log("model is loaded")
}
function gotResults(results) {
  if(results.length > 0) {
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    rightWristX = results[0].pose.rightWrist.x
    leftWristX = results[0].pose.leftWrist.x
    difference = floor(leftWristX - rightWristX)
  }
}
function draw() {
  background("aqua")
  fill("violet")
  stroke("violet")
  text("suhas", noseX, noseY)
  textSize(difference)
  document.getElementById("size").innerHTML = "font size = "+difference
}