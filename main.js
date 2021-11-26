noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video = createCapture(VIDEO);
video.size(560, 500);

canvas = createCanvas(550, 550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
}


function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}
function draw(){
    background('#0ee3ce');
    textSize(difference)
    text('Sai',50, 400);
    fill('#f7bb07');
    }
    