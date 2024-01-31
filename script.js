let c1=[-1,-3];
let j=2;
newcall=(ids)=>{ 
  location.reload(false);
}
uncall=(p,ids,s1)=>{
  p.setAttribute("id",ids);
  s1.currentTime=0;
  s1.pause();
  s1.currentTime=0;
  index--;
 // console.log(index);
 console.log("uncalled");
}
index=0
call=(id)=>{       //uncalling
  let p=document.getElementById(id);
  let s=p.getAttribute("value");
  p.setAttribute("id","clicked");
  n=parseInt(s,10)
  s1=sounds[n]
  let ids=id;
  s1.play();
  index++;
  if(index>1){
           // uncall(store[0],store[1],store[2]);
           // store=[p,ids,s1]
           uncall(x1,x2,x3);
            x1=p;
            x2=ids;
            x3=s1;
            console.log("not else")
          }
  else{
   // store=[p,ids,s1]
   x1=p;
   x2=ids;
   x3=s1;
   }

}
let audio=document.getElementsByClassName("audi");
let sounds=[];
for(let j=0;j<audio.length;j++){ 
    sounds.push(audio[j]);
}
let array=document.getElementsByClassName("ayas");
let ayahsarray=[];
for(let i=0;i<array.length;i++){ 
    ayahsarray.push(array[i]);
};
ayahsarray.forEach(element => {
   element.addEventListener("click",()=>{
     let id=element.getAttribute("id"); 
     c1.push(parseInt(element.getAttribute("value"),10))
     i=j-1;
     console.log(c1)
     if(c1[j]!=c1[i])
     {call(id);}
    else
    {newcall(id);}
    j=j+1;
   }
   )
});
let bi=document.getElementById("bi");
//  bi.innerText="Bismillahi Rahmani Raheem";
loopval=0;
//loop setting
let loop=document.getElementById("checkbox");
loop.onclick=()=>{
    if(loopval%2==0)
    sounds.forEach(every=> {
    every.loop=true;
    });
    else{
    sounds.forEach(every=> {
    every.loop=false;
    });
    };
    loopval++;
    console.log(loopval);
}
}
let work=document.getElementById("workspace");
settingval=0
let setting=document.getElementById("settingsicon");
setting.onclick=()=>{
    if(settingval%2==0){
      work.setAttribute("style","display:block");
      autoclose();
      console.log("call");
    }
    else{
      work.setAttribute("style","display:none");
    };
    settingval++;
  }
autoclose=()=>{
  setTimeout(()=>{
    console.log("call");
    work.setAttribute("style","display:none")
    console.log("call")},5000)
};

