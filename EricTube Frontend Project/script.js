const menuicon = document.querySelector(".menu-bar");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}