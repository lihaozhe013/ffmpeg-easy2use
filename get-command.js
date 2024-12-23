let inputFileName = "";
function nevigate2SelectedMode() {
    const select_mode = document.querySelector('input[name="select-mode"]:checked');
    if (select_mode) {
        if (select_mode.id == "copy") {
            window.location.href = "copy-mode.html";
        }
        else if (select_mode.id == "transcode") {
            window.location.href = "transcode-mode.html";
        }
    }
    else alert('Please select a option!!!');
}

function goBack() {
    window.location.href = "index.html";
}


function generateCopyCommand() {
    let output = "";
    const outputBox = document.getElementById('output-box');
    const fileName = document.getElementById("input-file-name");
    const containerFormat = document.querySelector('input[name="select-container"]:checked');
    output = "ffmpeg -i " + fileName.value + " -c copy output." + containerFormat.value;
    outputBox.textContent = output;
}

function generateTranscodeCommand() {
    let output = "";
    const outputBox = document.getElementById('output-box');
    const fileName = document.getElementById("input-file-name");
    const codingFormat = document.querySelector('input[name="select-coding-format"]:checked');
    const containerFormat = document.querySelector('input[name="select-container"]:checked');
    const transcodingQuality = document.getElementById("quality");
    if (codingFormat.id == "av1") {
        alert("the function is not finished yet, please try other format")
    }
    else if (codingFormat.id == "hvac") {
        output = "ffmpeg -i " + fileName.value + " -c:v libx265 -crf " + transcodingQuality.value + " -preset slow -c:a aac -b:a 192k -movflags +faststart output." + containerFormat.value;
    }
    else if (codingFormat.id == "avc") {
        output = "ffmpeg -i " + fileName.value + " -c:v libx264 -crf " + transcodingQuality.value + " -preset slow -c:a aac -b:a 192k -movflags +faststart output." + containerFormat.value;
    }
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

function generateCommand(modeID) {
    if (modeID == 0) {
        generateCopyCommand();
    }
    else {
        generateTranscodeCommand();
    }
}