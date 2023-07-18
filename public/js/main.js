const subbtn= document.getElementById('subbtn');
const city=document.getElementById('city');
const temprature=document.getElementById('temp');
const mood=document.getElementById('mood');
const loc=document.getElementById('location');
const day=document.getElementById('day');
const date=document.getElementById('date');

const getInfo=async()=>{
    
    let cityname=city.value;
    
    if(cityname===''){
       alert('Please enter a city name to search');
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=2537ac65cd8c538e2efbd11758e62228`;
            const response=await fetch(url);
            
            const data=await response.json();
            
            const arrData=[data];console.log(arrData);
            temprature.innerHTML=arrData[0].main.temp;
            const wmood=arrData[0].weather[0].main;
            loc.innerHTML=`${arrData[0].name}, ${arrData[0].sys.country}`;
            console.log(wmood);
            if(wmood=='Clouds'){
                mood.innerHTML=` <i class="fa fa-cloud "></i>`;
            }else if(wmood=='Rain'){
                mood.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
            }else if(wmood=='Sunny'){
               mood.innerHTML=` <i class="fa-solid fa-sun-plant-wilt"></i>`;
            }else{
                mood.innerHTML=` <i class="fa-solid fa-sun-plant-wilt"></i>`;
            }

            const dates=new Date().getDate();
            const days=new Date().getDay();
            const month=new Date().getMonth();
            console.log(date);
            console.log(day);
            console.log(month);
            const weakarr=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
            const montharr=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
            day.innerHTML=weakarr[days];
            date.innerHTML=`${dates} ${montharr[month]}`;


        }catch(error){
            alert('Please check the spelling of city or enter a valid one');
        }
        
    }
};

const defaultfunc=async()=>{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=Dhanbad&units=metric&appid=2537ac65cd8c538e2efbd11758e62228`;
        const response=await fetch(url);
        
        const data=await response.json();
        
        const arrData=[data];console.log(arrData);
        temprature.innerHTML=arrData[0].main.temp;
        const wmood=arrData[0].weather[0].main;
        loc.innerHTML=`${arrData[0].name}, ${arrData[0].sys.country}`;
        console.log(wmood);
        if(wmood=='Clouds'){
            mood.innerHTML=` <i class="fa fa-cloud "></i>`;
        }else if(wmood=='Rain'){
            mood.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        }else if(wmood=='Sunny'){
           mood.innerHTML=` <i class="fa-solid fa-sun-plant-wilt"></i>`;
        }else{
            mood.innerHTML=` <i class="fa-solid fa-sun-plant-wilt"></i>`;
        }

        const dates=new Date().getDate();
        const days=new Date().getDay();
        const month=new Date().getMonth();
        console.log(date);
        console.log(day);
        console.log(month);
        const weakarr=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
        const montharr=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        day.innerHTML=weakarr[days];
        date.innerHTML=`${dates} ${montharr[month]}`;


    }catch(error){
        alert('Please check the spelling of city or enter a valid one');
    }
}
subbtn.addEventListener('click',getInfo);
defaultfunc();