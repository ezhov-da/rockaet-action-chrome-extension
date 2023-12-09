function saveOptions() {
    const url = document.getElementById("raUrl").value;
    const key = document.getElementById("raApiKey").value;

    const options = {apiUrl: url, apiKey: key}
    chrome.storage.local.set(options).then(() => {
        console.log(options);
    });
}

function loadOptions() {
    getOptions().then((result) => {
        document.getElementById("raUrl").value = result.apiUrl;
        document.getElementById("raApiKey").value = result.apiKey;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    loadOptions()
});
document.getElementById('saveOptions').addEventListener('click', () => {
    saveOptions()
});