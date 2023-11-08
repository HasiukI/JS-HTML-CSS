const base ="https://api.openweathermap.org/data/2.5";

const city_name="Ternopil";
// 149a9906b6f660e847e7b0fcb45a6106
const API_key="149a9906b6f660e847e7b0fcb45a6106";

const params =`/forecast?q=${city_name}&appid=${API_key}&lang=ua&units=metric`;

const options={
    method:"GET"
}

const url=base+params;

let list;
function GetWeather(){

    return fetch(url, options)
        .then(resp => {
            return resp.json();
        }).then(data=> {
            readApi(data);
        })
        .catch(error=>error);
}
let data= GetWeather();

const description_img=["рвані хмари","уривчасті хмари","легкий дощ","помірний дощ","хмарно","чисте небо","кілька хмар"];
const img_index=[0,0,0,0,0];

const img_card=document.querySelectorAll('.card_img');
function readApi(data){
     const mainObject= data;
     console.log(mainObject);

    const DaysInWeek=["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];
    const MonthNames = ["січня", "лютого", "березеня", "квітня", "травеня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];



    let daystr = mainObject['list'][0]['dt_txt'].split(' ')[0];
    let numbers_temp =[];

    start_widget(mainObject['list'][0]);

    for(let i=0; i<mainObject['list'].length;i++){

        numbers_temp.push(mainObject['list'][i]['main']['temp'])

        if(daystr !== mainObject['list'][i]['dt_txt'].split(' ')[0] || i===mainObject['list'].length-1 ){

            createCard(
                DaysInWeek[new Date(Date.parse(daystr)).getDay()],
                daystr.split('-')[2],
                MonthNames[new Date(Date.parse(daystr)).getMonth()],
                getMax(numbers_temp),
                getMin(numbers_temp)
              );
            numbers_temp=[];
            daystr = mainObject['list'][i]['dt_txt'].split(' ')[0];
        }
    }
}

function start_widget(data){
    const clouds=document.getElementById('clouds');
    const rains = document.querySelectorAll('.rains');
    const light =document.getElementById('light');

    if (data['clouds']['all']<20) {
           clouds.style.width=' 150px';
           clouds.style.height=' 150px';
           clouds.style.top= '200px';

    }else if(data['clouds']['all']>=20 && data['clouds']['all']<=70){
        clouds.style.width=' 250px';
        clouds.style.height=' 250px';
        clouds.style.top= '140px';

    }
    if(data['pop']<0.25){
        for (let i=0;i<rains.length;i++){
            rains[i].style.display='none';
        }
        light.style.display='none';
    }else if(data['pop']>=0.25 && data['pop']<=0.50){
        light.style.display='none';
    }

    if(data['weather']['main']==="Snow" ){
        for (let i=0;i<rains.length;i++){
            rains[i].src='/images/snow.png';
        }
    }

    let info=document.querySelector('.info');

    info.innerHTML=`
     <h4>Додаткова інформація</h4>
            <span><i>Температура</i>: ${data['main']['temp']}</span>
            <span><i>Вологість</i>: ${data['main']['humidity']}</span>
            <span><i>Хмарність</i>: ${data['clouds']['all']}</span>
            <span><i>Швидкість вітру</i>: ${data['wind']['speed']}</span>
            <span><i>Імовірність опадів</i>: ${data['pop']}</span>
    `;
}
function createCard(day_name,day_num,mount,max,min){
     const container_card=document.getElementById('container-card');

     container_card.innerHTML+=`
      <div class="card">
            <div>
                <span>${day_name}</span>
                <div>
                    <span>${day_num}</span>
                    <span>${mount}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Мін:</span>
                    <span>${min}</span>
                </div>
                <div>
                    <span>Макс:</span>
                    <span>${max}</span>
                </div>
            </div>
        </div>
     `;
}

function getMax(numbers){

    let max=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}

function getMin(numbers){
    let min=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<min){
            min=numbers[i];
        }
    }
    return min;
}









// var date = new Date("2023-11-07");
// var month = date.getMonth();
// var monthNames = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];
// var monthName = monthNames[month];
// console.log(monthName); //