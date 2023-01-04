let popup = document.querySelector(".popup-menu")
let menubtn = document.querySelector("#menu-butn")

menubtn.onclick = () =>{
    popup.classList.toggle('active');
    menubtn.classList.toggle('invisible');
}

window.onscroll =() =>{
    popup.classList.remove('active');
    menubtn.classList.remove('invisible')
}