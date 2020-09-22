const axios = require('axios').default;

const form = document.querySelector('.url-form');
const result = document.querySelector('.result-section');

form.addEventListener('submit', event => {
    event.preventDefault()

    const input = document.querySelector('.url-input');

   
    async function urlPost() {
        try {
            
            const postResponse = await axios.post('/link', {
                headers: { 'Accept': 'application/json',
                           'Content-Type': 'application/json' },
                data: input.value
            });
            
            console.log(postResponse);
            let response = postResponse.data
            return response.json();

        } catch (e) {
            console.error(e)
        }
    }
    urlPost();
});
