
nosex=0
nosey=0

earsx=0
earsy=0


function preload(){
clown= loadImage("https://i.postimg.cc/KjbPfM9t/images-10-removebg-preview-removebg-preview.png")
ears=  loadImage("https://i.postimg.cc/MGMZP3N8/images-10-removebg-preview-removebg-preview-2.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotResult)
}

function gotResult(result){
    if (result.length>0){
        console.log(result)
        nosex=result[0].pose.nose.x-100;
        nosey=result[0].pose.nose.y-180;
        console.log("nosex = " +nosex)
        console.log("nosey = " +nosey)
        earsx=result[0].pose.rightEar.x-58;
        earsy=result[0].pose.rightEar.y-150;
        console.log("earsx = " +earsx)
        console.log("earsy = " +earsy)
    }
}

function modelLoaded(){
    console.log("modelLoaded")
}


function takeSnapshot(){
    save("pic.png")
}

function draw(){
    image(video,0,0,300,300)
    value=document.getElementById("ddown").value
    filterValue=eval(value)
    filter(filterValue)

   image(clown,nosex,nosey,200,200)
   image(ears,earsx,earsy,200,200)
}

