function go2SelectedMode() {
    const select_mode = document.querySelector('input[name="select-simple-advanced"]:checked');
    if (select_mode) {
        if (select_mode.id === "simple-mode") {
            window.location.href = "transcode-simple-mode.html";
        }
        else if (select_mode.id === "advanced-mode") {
            window.location.href = "transcode-mode.html";
        }
    }
    else alert('Please select a option!!!');
}

function back2index() {
    window.location.href = "index.html";
}