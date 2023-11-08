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
    const MonthNames = ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];



    let daystr = mainObject['list'][0]['dt_txt'].split(' ')[0];
    let numbers_temp =[];

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