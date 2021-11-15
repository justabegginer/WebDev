const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await dadJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const dadJokes = async () => {
    try{
        const config = { headers: { Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }catch(e){
        return "No jokes available, sorry :(";
    }
    
//  console.log(res.data.joke)
    
}

button.addEventListener('click', addNewJoke)