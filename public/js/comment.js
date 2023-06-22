const blogPostId = document.querySelector('#blogpost').value;
const commentBtn = document.querySelector('#commentbtn');


const commentHandler = async (event) => {
    event.preventDefault;
    debugger;
    const commentContent = document.querySelector('#comment-content').value.trim();
    console.log(commentContent);
    if (commentContent) {
        const commentResponse = await fetch('/api/comment', {

            method: 'POST',
            body: JSON.stringify({
                comment: commentContent,
                blogPostId: blogPostId,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (commentResponse.ok) {
            document.location.reload();
        } else {
            console.log(commentResponse);
            alert(commentResponse.status);
        }
    }
};

if(commentBtn != null)
commentBtn.addEventListener('click', commentHandler);