const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector();
    const password = document.querySelector();

    if(email && password) {
        const response = await fetch({
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: { 'Content-Type' : ' '},
        });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
    }
};

document
    .querySelector(' ')
    .addEventListener('submit', loginFormHandler)