const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

//update post
const upateFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="blogpost-title"]').value;
    const content = document.querySelector('textarea[name="blogpost-content"]').value;

    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId: id,
            title,
            content,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert("error occurred!");
    }
};
const updateButton = document.querySelector('#update-btn');
updateButton.addEventListener('click', upateFormHandler);


const deleteButton = document.querySelector('#delete-btn');

const deleteButtonHandler = async () => {
    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.status);
    }
};

if (deleteButton != null)
    deleteButton.addEventListener('click', deleteButtonHandler);