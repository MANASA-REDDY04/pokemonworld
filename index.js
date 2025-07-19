async function fetchData() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');
    const pokemonMessage = document.getElementById('pokemonMessage');
    const welcomeText = document.getElementById('welcomeText');

    try {
        // API URL
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        // CHECK IF THE RESPONSE IS VALID
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        // FORMAT THE RESPONSE

        const data = await response.json();
        const sprite = data.sprites.front_default;

        // Set image and message
        pokemonSprite.src = sprite;
        pokemonSprite.style.display = 'block';
        welcomeText.textContent = `Hi, I'm ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}, welcome to Pokemon World!`;

        pokemonMessage.style.display = 'block';
    } catch (error) {
        alert('Oops! Pokemon not found!😣');
    }
}

// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and 
//         used for interacting with APIs to retrieve and send 
//         data asynchronously over the web.

// fetch(url, {method: "GET"})
