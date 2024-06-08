const button = document.getElementById("search-button");
const searchBar = document.getElementById("search-input");

async function getData(value) {
 const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7b690487cadd4c0db22162457240706&q=${value}&aqi=yes`
  );
  return await promise.json();
}


button.addEventListener('click', async ()=>{

    const value = searchBar.value;
    const result = await getData(value);

    console.log(result)

    const name = document.getElementById('name');
    const time = document.getElementById('time');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('Humidity');
    const image = document.getElementById('image-gif');
    name.innerText=result.location.name;
    time.innerText=result.location.localtime;
    temp.innerText=`${result.current.temp_c} celsius`;
    humidity.innerText=`Humidity is ${result.current.humidity}`;
    if(result.current.temp_c>30){
        document.getElementById("image-gif").src = "summer.gif"
    }else if(result.current.temp_c<10){
        document.getElementById("image-gif").src = "cold.gif"

    }else if(result.current.temp_c<30){
        document.getElementById("image-gif").src = "winter.gif"

    }
    
});

