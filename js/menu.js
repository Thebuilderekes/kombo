const menu = document.getElementById("hamburger-menu");
const  navItems = document.getElementById("nav-menu-items-mobile");
const body = document.getElementById("body")
let clickCount = 'close'; 
navItems.style.display = "none"
 // to set the state for the clicks to determine when to hide the navigation menu on click


menu.addEventListener("click",  function toggleMenu() {

  // open navigation menu on click

  if (clickCount  === 'close'){ 

        navItems.style.left = '0';
        navItems.style.display = "block"
        clickCount  = 'open'
        console.log("menu open")
       }
 // close navigation menu on click
        else if (clickCount  === 'open'){ 
          navItems.style.display = "-20"
          clickCount  = 'close'
          
            }

        
})


window.addEventListener("mouseup", function(event){

  if(event.target != navItems) {

    navItems.style.display = "none";
  }

})


// Enable hidden nav bar

  const nav = document.querySelector(".nav-container");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });


  

