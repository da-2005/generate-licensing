
const newKey = async () => {
    let key = generateKey()

    const urlParams = new URLSearchParams(window.location.search);
    const project_id = urlParams.get('project_id');

    const response = await fetch(`/api/keys`, {
        method: 'POST',
        body: JSON.stringify({ key, project_id }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/users/keys?project_id=${project_id}`);
    } else {
        alert('Failed to create key');
    }
}
const generateKey = () => {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}

document
    .querySelector('#generate-key')
    .addEventListener('click', newKey)