let index=0;
let typLi = ['/graphic-design','/freelance','/full-stack']

async function home(){
    const typ = document.getElementById("typ");
    typ.textContent = typLi[index];
    if(index==typLi.length-1)
    index=-1;
    index++;
}

function delayedStart() {setInterval(home,2000)}
document.addEventListener('DOMContentLoaded', function() {setTimeout(delayedStart,1000);});