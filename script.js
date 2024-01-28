
uncall=(p,ids,s1)=>{
  p.setAttribute("id",ids);
  s1.pause();
  s1.currentTime=0;
  index--;
  console.log("uncalled")
  console.log(index)
}
index=0
call=(id)=>{       //uncalling
 //b=0
  let p=document.getElementById(id);
  let s=p.getAttribute("value");
  p.setAttribute("id","clicked");
  n=parseInt(s,10)
  s1=sounds[n]
  let ids=id;
  s1.play();
  index++;
  if(index>1){
            uncall(store[0],store[1],store[2]);
            store=[p,ids,s1]
          }
  else{
    store=[p,ids,s1]
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
     call(id);
   }
   )
});






