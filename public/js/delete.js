const blogPostId = document.querySelector('#blogpostid').value;
const deleteButton = document.querySelector('#delete-btn');

const deleteButtonHandler = async() =>{
    const response = await fetch(`/api/blogpost/${blogPostId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
        alert(response.status);
    }
};

if(deleteButton != null)
deleteButton.addEventListener('click', deleteButtonHandler);