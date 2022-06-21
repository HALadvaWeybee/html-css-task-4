const ul = document.getElementById('nv');
const listItems = ul.getElementsByTagName('li');
console.log(listItems.length);
for (let i = 0; i <= listItems.length - 1; i += 1) {

    console.log(listItems[i].innerText);
}
// Loop through the NodeList object.


function jsUpdateSize() {
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    
    const ul2 = document.getElementById('nv2');
    if (width <= 955) {
        for (let i = 0; i <= listItems.length - 1; i += 1) {
            // ul.removeChild(listItems[i]);
            listItems[i].classList.add('nav__item');
            listItems[i].classList.add('nav__link');
            ul2.appendChild(listItems[i]);
        }
       
    }
    
    // else if (width == 956 || width >= 956) { 
    //     const ule = document.getElementById('nv2');
    //     const listUp = ule.getElementsByTagName('li');

    //     console.log(listItems.length);
    //     for (let i = listUp.length - 1; i > listItems.length; i--) {
    //         listItems[i].classList.remove('nav__item');
    //         listItems[i].classList.remove('nav__link');
    //         ul.appendChild(listItems[i]);
    //         ule.removeChild(listItems[i]);   
    //     }
    // }

};


window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;