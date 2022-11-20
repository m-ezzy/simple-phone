function handle_click_pip() {
    if(document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
        document.getElementsByClassName("video remote")[0].requestPictureInPicture();
    }
}
function handle_click_mic() {
    console.log("mic");

    Object.values(conn).forEach(c => {
        console.log(c);
        c.send(JSON.stringify({"purpose": "mic", "user_name": getCookie("user_name")}));
    });
}
function handle_click_canvas() {
}
