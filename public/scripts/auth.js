let current = "log_in";

function switch_forms(s) {
    if (current != s) {
        document.getElementById(current).style.display = "none";
        current = s;
        document.getElementById(current).style.display = "flex";
    }
}


