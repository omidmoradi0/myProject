let loader = document.getElementById("loader").style
window.setInterval(function onloading() {
    loader.visibility = "hidden"
    document.querySelector("body").style.visibility = "visible"
}, 4000);