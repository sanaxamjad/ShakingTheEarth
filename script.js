
searchButton.addEventListener('click', () => {
  const searchText = document.querySelector('#search-text').value;

  // Perform the API request using fetch()
  fetch(`https://api.example.com/search?q=${searchText}`)
    .then(response => response.json())
    .then(data => {
      // Process the response data and display it on the page
      const resultsContainer = document.querySelector('#search-results');
      resultsContainer.innerHTML = '';

      if (data.results.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
      } else {
        data.results.forEach(result => {
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result');

          const title = document.createElement('h2');
          title.innerText = result.title;

          const description = document.createElement('p');
          description.innerText = result.description;

          resultDiv.appendChild(title);
          resultDiv.appendChild(description);
          resultsContainer.appendChild(resultDiv);
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Display an error message on the page
      const resultsContainer = document.querySelector('#search-results');
      resultsContainer.innerHTML = 'An error occurred. Please try again later.';
    });



});