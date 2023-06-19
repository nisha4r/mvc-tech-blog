const createpostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="blogpost-title"]').value;
    const content = document.querySelector('textarea[name="blogpost-content"]').value;

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Something wrong!');
    }
};

document.querySelector('#createform').addEventListener('submit', createpostFormHandler);