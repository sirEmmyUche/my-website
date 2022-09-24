const menuBar = () => {
    let burger = document.getElementById("burger");
    let nav = document.querySelectorAll(".nav-links");
    burger.addEventListener("click",() => {
        // loop over since its a node collections of an array
        for(let i =0; i < nav.length; i++) {
             nav[i].classList.toggle('responsive');
        }

        burger.classList.toggle('close');
    })

}


menuBar()