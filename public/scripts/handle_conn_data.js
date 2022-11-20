function handle_conn_data(data) {
    console.log(data);
    
    let un2 = JSON.parse(data).user_name;

    if(JSON.parse(data).purpose == "mic") {
        Object.values(document.getElementsByClassName("video remote")).forEach(element => {
            element.muted = "muted";
        });
        document.getElementById("video_" + un2).muted = "false";
    }
}
