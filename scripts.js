let index=0;
let typLi = ['/graphic-design','/freelance','/full-stack']
const aboutLink = document.querySelector('.abouz a');
const aboutDiv = document.querySelector('#about');
const typm = document.querySelectorAll('.tj');
const aText = aboutDiv.querySelectorAll('.info');
const buttons = document.querySelectorAll('.button-wrapper');
let homeLoad;

async function home(){
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

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    if(aboutDiv.style.display == 'none' || aboutDiv.style.display == '') {
        charIndex =0;
        aboutDiv.style.display = 'block';
        clearInterval(homeLoad);
        console.log('timeoutpause')
        typm.forEach(element => {
            element.style.display = 'none';
        });
        aText.forEach(element => {
            typeText(element,element.textContent);
        });
    }
    else {
        aboutDiv.style.display='none' ;
        typm.forEach(element => {
            element.style.display = 'flex';
        });
        setTimeout(() => {
            homeLoad = setInterval(home, 2000);
        }, 1000);
    }
});


document.addEventListener('DOMContentLoaded', function() {setTimeout(() => {
    homeLoad = setInterval(home, 2000);
    }, 1000);
    setTimeout(() => {
        buttons.forEach(button => {
            button.style.pointerEvents = 'auto';
    });},1500)
})