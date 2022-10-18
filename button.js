const mp=document.querySelector("#button");
mp.addEventListener("mouseover",(event)=>{
   const x= event.pageX - mp.offsetLeft;
   const y= event.pageY - mp.offsetTop;
   console.log(x)
   console.log(y)
   mp.style.setProperty("--xpos",x+"px");
   mp.style.setProperty("--ypos",y+"px");
});