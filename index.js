async function callRocketAction() {
    getOptions().then(async (options) => {
        const {apiUrl, apiKey} = options;

        let response = await fetch(`${apiUrl}/api/v1/handlers/10b08129-9573-4361-90ea-dfb0000afa29/openUrl`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Rocket-Action-Handler-Key': apiKey
            },
            body: JSON.stringify({})
        });

        let record = await response.json();
        console.log(record);

        document.getElementById("responseTextArea").innerText = record
    })
}


document.getElementById('testCall').addEventListener('click', () => {
    callRocketAction()
});