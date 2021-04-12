noseX= 0;
noseY= 0;
rightWristx = 0;
rightWristy = 0;
leftWristx = 0;
leftWristy = 0;
difference= 0;

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        rightWristx = results[0].pose.rightWrist.x
        rightWristy = results[0].pose.rightWrist.y
        leftWristx = results[0].pose.leftWrist.x
        leftWristy = results[0].pose.leftWrist.y
        difference = floor(leftWristx - rightWristx)
        console.log("noseX = " + noseX + "noseY = " + noseY);
    }
}

function draw(){
   background('lightblue')
   fill('pink')
   stroke('black')
   textSize(difference);
   text("Yashraj", noseX, noseY)
}