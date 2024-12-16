// Select the button and the transcript container
const transcriptBtn = document.querySelector('.transcript-btn');
const transcriptContainer = document.querySelector('.transcript-container');

// Add a click event listener to the button
transcriptBtn.addEventListener('click', () => {
    // Toggle the visibility of the transcript container
    transcriptContainer.classList.toggle('hidden');
});
