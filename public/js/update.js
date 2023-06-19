const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

//update post
const upateFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="blogpost-title"]').value;
    const content = document.querySelector('textarea[name="blogpost-content"]').value;

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId: id,
            title,
            content,
        }),
        headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert("error occurred!");
    }
};

document.querySelector('.updateform').addEventListener('submit', upateFormHandler);