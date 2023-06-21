const blogPostId = document.querySelector('blogpost').value;
const commentBtn = document.querySelector('commentbtn');


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
        if (commentResponse.ok) {
            document.location.reload();
        } else {
            alert(commentResponse.status);
        }
    }
};

if(commentBtn != null)
commentBtn.addEventListener('click', commentHandler);