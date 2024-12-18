// Select the button and the transcript container
const transcriptBtn = document.querySelector('.transcript-btn');
const transcriptContainer = document.querySelector('.transcript-container');

// Add a click event listener to the button
transcriptBtn.addEventListener('click', () => {
    // Toggle the visibility of the transcript container
    transcriptContainer.classList.toggle('hidden');
});


//form test
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
    const submitButton = commentForm.querySelector('button');

    // Handle form submission
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Button animation
        submitButton.classList.add('clicked');
        setTimeout(() => {
            submitButton.classList.remove('clicked');
        }, 200);

        // Get form inputs
        const username = document.getElementById('username').value.trim();
        const commentText = document.getElementById('comment').value.trim();

        if (username && commentText) {
            // Create comment element
            const commentItem = document.createElement('li');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `
                <strong>${username}</strong>
                <p>${commentText}</p>
            `;

            // Append the comment to the list
            commentList.appendChild(commentItem);

            // Clear form
            commentForm.reset();
        } else {
            alert("Please fill in all fields!");
        }
    });
});






