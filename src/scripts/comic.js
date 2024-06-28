document.getElementById("submit_email").addEventListener("click", async function () {
    // Get input email.
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Fetch data.
    let id = await fetchXKCDid(email);
    let data = await fetchXKCDdata(id);

    // Update on the page.
    updateData(data);
});

async function fetchXKCDid(email) {
    // Getting comic ID by email
    const params = new URLSearchParams();
    params.append('email', email)
    const endPoint = "https://fwd.innopolis.university/api/hw2?"
    return fetch(endPoint + params)
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            let a = document.getElementById('email')
            a.value = error.text
            console.error(error)
        })
}

 async function fetchXKCDdata(id) {
    // Fetching comic data after getting ID
    const params = new URLSearchParams();
    params.append('id', id)
    const endPoint = "https://fwd.innopolis.university/api/comic?"
    return fetch(endPoint + params)
        .then(data => {
            return data.json();
        })
}

function updateData(data) {

    console.log(data)

    let img = document.createElement('img')
    img.src = data['img']
    img.alt = data['alt']

    let title = document.createElement('span')
    title.textContent = data['safe_title']

    // Date
    let { day, month, year } = data;
    let date = new Date(year, month - 1, day);
    let formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    let dateSpan = document.createElement("span")
    dateSpan.classList.add('date')
    dateSpan.textContent = formattedDate

    let div = document.getElementById('comic-art')
    div.replaceChildren()
    div.appendChild(title)
    div.appendChild(dateSpan)
    div.appendChild(img)
}