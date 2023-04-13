'use script'

const timeOutput= document.querySelector('.time')
const conditionOutput= document.querySelector('.condition')
const nameOutput= document.querySelector('.name')
const icon= document.querySelector('.icon')
const cloudOutput= document.querySelector('.cloud')
const humidityOutput= document.querySelector('.humidity')
const windOutput= document.querySelector('.wind')
const form= document.getElementById('.locationInput')
const search= document.querySelector('.search')
const btn= document.querySelector('.submit')  
const cities= document.querySelector('.city') 


let cityInput="London";

cities.forEach((city)=>{
    city.addEventListener('click',(e)=>{
        cityInput=e.target.innerHtml;
        fetchWeatherData();
        page.sttyle.opacity="0";

    });
   
})

form.addEventListener('submit',(e)=>{
    if(search.ariaValueMax.length==0){
        alert('Sheher adini daxil edin');
    }else{
        cityInput=search.value;
        fetchWeatherData();
        search.value="";
        page.style.opacity="0"
    }

    e.preventDefault();
});

function dayOfWeek(day,month,year){
    const weekday=["Bzr", "Bzr Ert","","Ch a","Ch","C a","C",];
    return weeekday[new Date('${day}/${moth}/${year}).getDay')]
}
function fetchWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}=${cityInput}');
     then(response=> response.json())
     then(data=>{
        console.log(data);

        temp.innerHtml=data.cuurrent.temp_c+"&#176";
        conditionOutput.innerHTML=data.cuurrent.text;
        const data=data.location.locationtime;
        const a=parseInt(date.substr(0,4));
        const b=parseInt(date.substr(5,2));
        const c=parseInt(date.substr(8,2));
        const time=date.substr(11);
        dateOutput.innerHTML='${dayOfTheWeek(d,m,y)}${d},${m},${y}';
        timeOutput.innerHTML=time;
        nameOutput.innerHTML=data.location.name;
        const iconId=data.current.icon.substr( "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}".length);
        icon.src="./icons"+iconId;
        cloudOuptput.innerHtml=data.current.cloud+"%";
        humidityOutput.innerHTML=data.current.humidity;
        windOutput.innerHTML=data.current.wind_kph+"km/h";
        let timeOfDay="day";
        const code=data.current.condition.code;

        if(!data.current.is_day){
            timeOfDay="night;"
        }

        if(code==1000){
            page.style.backgroundImage=`url(./night-img/$(timeOfDay)/cloudy.jpg)`
            
        }

       
     })

}



