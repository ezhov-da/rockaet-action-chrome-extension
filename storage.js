async function getOptions() {
    return chrome.storage.local.get(["apiUrl", "apiKey"])
}