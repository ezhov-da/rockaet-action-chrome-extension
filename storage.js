async function getOptions() {
    return chrome.storage.local.get()
}

async function saveAllOptions(object) {
    return chrome.storage.local.set(object)
}