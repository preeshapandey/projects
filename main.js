function preload() {
    mustache = loadImage("https://i.postimg.cc/tJs8w9fh/mustache.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getPoses);

}

function modelLoaded() {
    console.log("posenet is initialized");
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, noseX, noseY, 45, 30);
}

function take_snapshot() {
    save("captured_image.png");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y + 5;
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
    }
}
noseX = 0;
noseY = 0;