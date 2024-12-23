const select_mode = document.querySelector('input[name="select-mode"]:checked');

function nevigate2SelectedMode() {
    if (select_mode) {
        window.location.href = select_mode.value;
    }
    
}


let output = "";
let inputFileName = "";
const outputBox = document.getElementById('output-box');
function generateCopyCommand() {
    // ffmpeg -i input.mkv -c copy output.mp4
    output = "ffmpeg -i " + inputFileName + " -c copy output.mp4";
    outputBox.textContent = output;
}


function copyText() {
    const outputBox = document.getElementById('output-box');
    const textToCopy = outputBox.textContent;
    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        document.execCommand('copy');
        alert('Command Copied!!!');
    } catch (err) {
        alert('Failed to Copy the command, please copy it by hand!');
    }

    document.body.removeChild(tempInput);
}

function generateCommand() {
    generateCopyCommand();
}