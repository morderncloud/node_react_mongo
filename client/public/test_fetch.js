
// Can be tested by copy & paste to Chrome console
function fetchData(){
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchData();

async function aFetchData(){
    const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
    const json = await res.json();

    console.log(json);
}