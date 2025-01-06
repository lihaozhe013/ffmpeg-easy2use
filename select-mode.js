function go2SelectedMode() {
    const select_mode = document.querySelector('input[name="select-mode"]:checked');
    if (select_mode) {
        if (select_mode.id === "copy") {
            window.location.href = "copy-mode.html";
        }
        else if (select_mode.id === "transcode") {
            window.location.href = "select-simple-advanced.html";
        }
    }
    else alert('Please select a option!!!');
}