let tit = document.title;
const l = tit.length;
let i=1;
let x=0;
let index=0;
let typLi = ['/graphic-design','/freelance','/full-stack']
async function titlee(){
    if(i==l)
    x=1;
    else if(i==1)
    x=0
    if(x==0){
        i++;
        document.title=tit.substring(0,i)
    }
    else {
        i--;
        document.title=tit.substring(0,i)
    }
}

async function home(){
    const typ = document.getElementById("typ");
    typ.textContent = typLi[index];
    if(index==2)
    index-=3;
    index++;
}

function delayedStart() {setInterval(home,2000)}

setInterval(titlee,500)
setTimeout(delayedStart,1000);

