const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector("box");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const img = document.querySelector("img");

const getweather =async (e) =>{
     e.preventDefault()

     const response =await fetch(`https://api.weatherapi.com/v1/current.json?key=42d13da4d5754149a7993229232712&q=${input.value}&aqi=yes`)
      const data = await response.json()

      
       
       img.setAttribute('src',data.current.condition.icon)
       h2.innerText ="Climate" + " " + ":" + " " +  data.current.temp_c  + "  °C"
       h1.innerText = data.location.name
      

      console.log(data)
    form.reset()
}

form.addEventListener("submit",getweather);





    


