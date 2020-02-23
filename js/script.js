var element = document.getElementById("container");


function closeNav() {
    element.classList.remove("utility");
    document.getElementById("sidenav").style.transition = "0.3s";
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// icon 
feather.replace();