import { formatDistanceToNow } from 'date-fns';

document.getElementById("submit_email")?.addEventListener("click", async () => {
    // Get input email.
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value;
    try {
        // Fetch data.
        let id: number = await fetchXKCDid(email);
        let data: string = await fetchXKCDdata(id);

        // Update on the page.
        updateData(data);
    } catch (error) {
        console.error(error);
        // Handle error display or logging as needed
    }
});

async function fetchXKCDid(email: string): Promise<number> {
    // Getting comic ID by email
    const params = new URLSearchParams();
    params.append('email', email)
    const endPoint = "https://fwd.innopolis.university/api/hw2?"
    const response = await fetch(endPoint + params);
    if (!response.ok) {
        throw new Error('Failed to fetch ID');
    }
    const id: number = await response.json();
    return id;
}

async function fetchXKCDdata(id: number): Promise<any> {
    // Fetching comic data after getting ID
    const params = new URLSearchParams();
    params.append('id', id.toString())
    const endPoint = "https://fwd.innopolis.university/api/comic?"
    const response = await fetch(endPoint + params);
    if (!response.ok) {
        throw new Error('Failed to fetch comic data');
    }
    return response.json();
}

function updateData(data: any) {

    let img = document.createElement('img');
    img.src = data.img;
    img.alt = data.alt;

    let title = document.createElement('span');
    title.textContent = data.safe_title;


    let date = new Date(data.year, data.month - 1, data.day);
    let formattedDate = formatDistanceToNow(date, { addSuffix: true });
    let dateSpan = document.createElement("span");
    dateSpan.classList.add('date');
    dateSpan.textContent = formattedDate;

    let div = document.getElementById('comic-art');
    div?.replaceChildren();
    div?.appendChild(title);
    div?.appendChild(dateSpan);
    div?.appendChild(img);
}
