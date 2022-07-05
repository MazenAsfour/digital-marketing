const a=document.querySelector('.load');
const b=document.querySelector('body');
const c=document.querySelector('.bar ');
const d=document.querySelector('nav .container .header ul');
console.log(b)
setTimeout(a1,3000);
function a1(){
a.style.transitionDuration="3s";
document.querySelector('.load h1').opacity=0;
a.style.opacity=0;

setTimeout(a2,2000);
}
function a2(){
    document.querySelector('.load h1').style.display="none";
    a.style.display="none";
    b.style.overflow="auto";
};

function bars(){

if(d.style.display==="none"){
d.style.display="inline";
}
else {
d.style.display="none";
}

if(c.style.display==="none"){
    d.style.display="inline";
}
console.log(c)

}


    








