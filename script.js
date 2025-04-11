// Function to fetch a random Neko photo
function fetchRandomNekoPhoto() {
    fetch('https://api.waifu.pics/nsfw/waifu')
        .then(response => response.json())
        .then(data => {
            const photoUrl = data.url;
            const imgElement = document.getElementById('randomPhoto');
            imgElement.src = photoUrl;
            imgElement.style.display = 'block'; // Show the image

            // Set the download link
            const downloadLink = document.getElementById('downloadLink');
            const timestamp = new Date().getTime(); // Use timestamp for a unique filename
            downloadLink.href = photoUrl;
            downloadLink.download =
            downloadLink.style.display = 'inline'; // Show the download link
        })
        .catch(error => {
            console.error('Error fetching the photo:', error);
        });
}

// Fetch a random photo immediately when the page loads
fetchRandomNekoPhoto();

// Set an interval to fetch a new photo every 5 seconds (5000 milliseconds)
setInterval(fetchRandomNekoPhoto, 5000);
