function goBack() {
    window.location.href = "index.html";
}

function goBackSimpleAdvancedPage() {
    window.location.href = "select-simple-advanced.html";
}
function resetTranscodingMode() {
    window.location.href = "transcode-mode.html";
}

function resetCopyMode() {
    window.location.href = "copy-mode.html";
}

function generateCopyCommand() {
    const outputBox = document.getElementById('output-box');
    const fileName = document.getElementById("input-file-name");
    const containerFormat = document.querySelector('input[name="select-container"]:checked');
    let output;
    output = "ffmpeg -i " + fileName.value + " -c copy output." + containerFormat.value;
    outputBox.textContent = output;
}

function generateTranscodeCommand() {
    const outputBox = document.getElementById('output-box');
    const fileName = document.getElementById("input-file-name");
    const codingFormat = document.querySelector('input[name="select-coding-format"]:checked');
    const containerFormat = document.querySelector('input[name="select-container"]:checked');
    const transcodingQuality = document.getElementById("quality");
    if (transcodingQuality.value > 51 || transcodingQuality.value < 0) {
        alert('Transcoding Quality should be at least 0, and cannot be more than 51');
    }
    let output = "";
    if (codingFormat.id === "av1") {
        // alert("the function is not finished yet, please try other format")
        output = "ffmpeg -i " + fileName.value + " -c:v libaom-av1 -crf " + transcodingQuality.value + " -preset slow -c:a aac -b:a 320k -movflags +faststart -threads 4 output." + containerFormat.value;
    } else if (codingFormat.id === "hvac") {
        output = "ffmpeg -i " + fileName.value + " -c:v libx265 -crf " + transcodingQuality.value + " -preset slow -c:a aac -b:a 320k -movflags +faststart -threads 4 output." + containerFormat.value;
    } else if (codingFormat.id === "avc") {
        output = "ffmpeg -i " + fileName.value + " -c:v libx264 -crf " + transcodingQuality.value + " -preset slow -c:a aac -b:a 320k -movflags +faststart -threads 4 output." + containerFormat.value;
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
    if (modeID === 0) {
        generateCopyCommand();
    }
    else {
        generateTranscodeCommand();
    }
}