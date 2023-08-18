let tit = document.title;
const l = tit.length;
let i=1;
let x=0;

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

setInterval(titlee,500)