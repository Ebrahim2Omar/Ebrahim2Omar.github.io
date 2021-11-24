var count=0;
function display(){
    count++;
    // document.getElementsByClassName("main").innerHTML='<b>hi</b>';
    document.getElementById("container").innerHTML='<nav class="main-nav"><ul class="main-menu"><li><a class="a" href="home.html" target="_blanck">Home</a></li><li><a class="a" href="web.html">Websites</a></li><li><a class="a" href="photo.html">Photos</a></li><li>'+
'<a class="a" href="v.html">Videos</a></li><li><a class="" href="index.html">About</a></li></ul>';
if(count%2==0)close();
}
function close(){
    document.getElementById("container").innerHTML=' ';
}   

function changeImg1(){
    // alert("changeimg")
    img=document.getElementById("img1");
    img.src='image//wfaceboock.png';
}
function img1(){
    img=document.getElementById("img1");
    img.src='image//f0aceboock.png';
}
function changeImg2(){
    // alert("changeimg")
    img=document.getElementById("img2");
    img.src='image//wtwter.png';
}
function img2(){
    img=document.getElementById("img2");
    img.src='image//twter.png';
}
function changeImg3(){
    // alert("changeimg")
    img=document.getElementById("img3");
    img.src='image//winsta.png';
}
function img3(){
    img=document.getElementById("img3");
    img.src='image//insta.png';
}
function changeImg4(){
    // alert("changeimg")
    img=document.getElementById("img4");
    img.src='image//wnet.png';
}
function img4(){
    img=document.getElementById("img4");
    img.src='image//netw.png';
}
function changeImg5(){
    // alert("changeimg")
    img=document.getElementById("img5");
    img.src='image//wwifi.png';
}
function img5(){
    img=document.getElementById("img5");
    img.src='image//wifi.png';
}