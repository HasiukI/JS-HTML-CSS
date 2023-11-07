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
            push_item(data);
        })
        .catch(error=>error);
}
let data= GetWeather();


function push_item(data){
    const mainObject= data;
    const DaysInWeek=["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
    const Weather=[];
    console.log(mainObject);
    const days_card =document.querySelectorAll('.days');
    const min_card =document.querySelectorAll('.min');
    const max_card =document.querySelectorAll('.max');
    const days_name_card= document.querySelectorAll('.days_name');

    let card_count=0;

    let daystr = mainObject['list'][0]['dt_txt'].split(' ')[0];
    let numbers_temp =[];

    let number_img=["рвані хмари","уривчасті хмари","легкий дощ","помірний дощ","хмарно","чисте небо","кілька хмар"];

    for(let i=0; i<mainObject['list'].length;i++){

        console.log(mainObject['list'][i]['weather'][0]['description'])
        if(daystr !== mainObject['list'][i]['dt_txt'].split(' ')[0] || i===mainObject['list'].length-1 ){


            days_card[card_count].innerText=daystr.split('-')[2];
            days_name_card[card_count].innerText=DaysInWeek[new Date(Date.parse(daystr)).getDay()-1];

            numbers_temp.sort();
            min_card[card_count].innerText=numbers_temp[0];
            max_card[card_count++].innerText=numbers_temp[numbers_temp.length-1];
            // min_card[card_count].innerText=Math.min(numbers_temp);
            // max_card[card_count++].innerText=Math.max(numbers_temp);
            numbers_temp=[];

            daystr = mainObject['list'][i]['dt_txt'].split(' ')[0];

        }else{
            // console.log(mainObject['list'][i]['main']['temp']);
            numbers_temp.push(mainObject['list'][i]['main']['temp'])
        }


    }
}

function change_wither(numbers, card_img){
    
}
