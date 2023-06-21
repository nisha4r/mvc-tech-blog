const blogPostId = document.querySelector('commentbtn').value;


const commentHandler = async (event) => {
    event.preventDefault;
    const commentContent = document.querySelector('comment-content').value.trim();
    if (commentContent) {
        const commentResponse = await fetch('/api/comment', {

            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                blogPostId: blogPostId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};