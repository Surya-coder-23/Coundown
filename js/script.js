const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");


function updateTime(){
    const currentYear=new Date().getFullYear();
    const newYEar=new Date(`january 1 ${currentYear+1} 00:00:00`);
    const currentDate=new Date();
    const diff=newYEar-currentDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);
    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

    //console.log(d+" "+h+" "+m+" "+s+" ");
}
setInterval(updateTime,1000)

//const currentYear=new Date().getFullYear();
//console.log(currentYear+1);
//const newYEar=new Date(`january 1 ${currentYear+1} 00:00:00`);
//console.log(newYEar);
//const currentDate=new Date();
//console.log(currentDate);
//const diff=newYEar-currentDate;
//const d=Math.floor(diff/1000/60/60/24);
//console.log(d);
//const h=Math.floor((diff/1000/60/60)%24);
//console.log(h);
//const m=Math.floor((diff/1000/60)%60);
//console.log(m);
//const s=Math.floor((diff/1000)%60);
//console.log(s);