function addAction() {
    const raActionId = document.getElementById("raActionId").value;
    const usageInputParameter = document.getElementById("usageInputParameter").value;


    getOptions().then((object) => {
        if (object.actions === undefined) {
            object.actions = []
        }

        object.actions.push({
            id: raActionId,
            useInput: Boolean(usageInputParameter)
        })

        saveAllOptions(object).then(() => {
            fillList(object)
        })
    })
}

function fillListFromSavedOptions(object) {
    getOptions().then((object) => {
        fillList(object)
    })
}

function fillList(object) {
    const actionsElement = document.getElementById("actions");
    while (actionsElement.firstChild) {
        actionsElement.removeChild(actionsElement.firstChild);
    }

    console.log(object.actions)

    object.actions.forEach((value) => {
        let newElement = document.createElement("p",)
        newElement.innerText = value.id

        actionsElement.appendChild(newElement);
    })
}


function saveOptions() {
    const url = document.getElementById("raUrl").value;
    const key = document.getElementById("raApiKey").value;

    getOptions().then((object) => {
        object.apiUrl = url
        object.apiKey = url

        saveAllOptions(object)
    })
}

function loadOptions() {
    getOptions().then((result) => {
        if (result.apiUrl) {
            document.getElementById("raUrl").value = result.apiUrl;
        }
        if (result.apiKey) {
            document.getElementById("raApiKey").value = result.apiKey;
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    loadOptions()
    fillListFromSavedOptions()
});

document.getElementById('saveOptions').addEventListener('click', () => {
    saveOptions()
});

document.getElementById('addAction').addEventListener('click', () => {
    addAction()
});
