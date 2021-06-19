function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    v1=createCapture(VIDEO);
    v1.hide()
    detected=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="detecting objects";
    }
    status="";objects=[];
    function modelLoaded(){
    console.log("model has loaded");
    status=true;
    }
    function draw(){
    image(v1,0,0,700,500);
    if(status !="")
    { 
      r=random(255);  
      g=random(255);
      b=random(255);  
        detected.detect(v1,gotResult);
    for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="detected!!!!";
    document.getElementById("number").innerHTML=objects.length;
    stroke(r,g,b);
    p=floor(objects[i].confidence*100);
    text(objects[i].label+" "+p+"%",objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
    }
    function gotResult(error,results){
    if(error){console.log(error);}else{
    console.log(results);
    objects=results;
    }
    }