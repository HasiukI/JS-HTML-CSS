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
            push(data);
        })
        .catch(error=>error);
}
let data= GetWeather();


function push(data){
    const mainObject= data;
    console.log(mainObject);
   



}