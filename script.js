javascript
document.getElementById('fetchFacts').addEventListener('click', function() {
    const animeName = document.getElementById('animeSelect').value;
    const apiUrl = `https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const factsContainer = document.getElementById('factsContainer');
            factsContainer.innerHTML = ''; // Clear previous facts

            if (data && data.data && data.data.length > 0) {
                data.data.forEach(fact => {
                    const factElement = document.createElement('p');
                    factElement.textContent = fact;
                    factsContainer.appendChild(factElement);
                });
            } else {
                factsContainer.textContent = 'No facts found for this anime.';
            }
        })
        .catch(error => {
            console.error('Error fetching the facts:', error);
        });
});
