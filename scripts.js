let index=0;
let typLi = ['/graphic-design','/freelance','/full-stack']
const aboutDiv = document.querySelector('#About');
const typm = document.querySelectorAll('.tj');
const aText = aboutDiv.querySelectorAll('.info');
const buttons = document.querySelectorAll('.button-wrapper');
const imgs = document.querySelectorAll('img');
const projDiv = document.querySelector('#Project');
let homeLoad;
let currPage='#Home';
let tit = document.title.toUpperCase();
let x=0;
let i=0;
let l=tit.length;

function closeAll() {
    aboutDiv.style.display='none' ;
    clearInterval(homeLoad);
    typm.forEach(element => {
        element.style.display = 'none';
    });
    aText.forEach(element => {
        typeText(element,element.textContent);
    });
    projDiv.style.display = 'none';
}

function openHome() {
    typm.forEach(element => {
        element.style.display = 'flex';
    });
    setTimeout(() => {
        homeLoad = setInterval(home, 2000);
    }, 1000);
}

function home(){
    const typ = document.getElementById("typ");
    typ.textContent = typLi[index];
    if(index==typLi.length-1)
    index=-1;
    index++;
}

function typeText(element, text) {
    let charIndex = 0;
    function animateTyping() {
      if (charIndex < text.length) {
        element.innerHTML = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(animateTyping, 10);
      }
    }
    animateTyping();
}

function titlee(){
    if(i==l)
    x=1;
    else if(i==1)
    x=0;
    if(x==0){
        i++;
        document.title=tit.substring(0,i)
    }
    else {
        i--;
        document.title=tit.substring(0,i)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId=='#Home'||targetId=='#About'||targetId=='#Project') {
                e.preventDefault();
                closeAll();
            }
            if(targetId==currPage) {
                closeAll();
                openHome();
                currPage='home';
                tit='HOME';
                l=tit.length;
            }
            else {
                const targetSection = document.querySelector(targetId);
                targetSection.style.display = 'grid';
                currPage=targetId;
                tit=targetId.substring(1).toUpperCase();
                l=tit.length;
            }
        });
    });
});
 
document.addEventListener('DOMContentLoaded', function() {setTimeout(() => {
    homeLoad = setInterval(home, 2000);
    }, 1000);
    setTimeout(() => {
        imgs.forEach(img => {
            img.style.pointerEvents = 'auto';
        });
        buttons.forEach(button => {
            button.style.pointerEvents = 'auto';
    });},1500)
})

setInterval(titlee,500)