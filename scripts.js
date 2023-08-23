let index=0;
let typLi = ['/graphic-design','/freelance','/full-stack']
const aboutLink = document.querySelector('.abouz a');
const aboutDiv = document.querySelector('#about');
const typm = document.querySelectorAll('.tj');
const aText = aboutDiv.querySelectorAll('.info');

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

aboutLink.addEventListener('click', () => {
    aboutDiv.style.display = 'block';
    typm.forEach(element => {
        element.style.display = 'none';
    });
    charIndex =0;
    aText.forEach(element => {
        typeText(element,element.textContent);
    });
});

aboutDiv.addEventListener('click', (event) => {
    if (event.target === aboutDiv) {
        aboutDiv.style.display = 'none';
    }
});




function delayedStart() {setInterval(home,2000)}
document.addEventListener('DOMContentLoaded', function() {setTimeout(delayedStart,1000);});