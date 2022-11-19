function load() {
    
}

let theme = 0;
function change_theme() {
    if (theme == 24) {
        theme = 0;
    } else {
        theme++;
    }
    document.getElementById("container").style.backgroundImage = "url(../assets/images/" + theme + ".jpg)";
}
