const bt_login= document.getElementById('bt_login');
const loganame= document.getElementById('loganame');
const logapass= document.getElementById('logapass');

const bt_reg= document.getElementById('bt_reg');
const reganame= document.getElementById('reganame');
const regapass= document.getElementById('regapass');
const regapass2= document.getElementById('regapass2');

const routeToRegister= document.getElementById('routeToRegister');
const routeToLogin= document.getElementById('routeToLogin');


const card=document.querySelector('.card-inner');
routeToRegister.addEventListener('click',()=>{
    card.style.transform="rotateY(180deg)";
});
routeToLogin.addEventListener('click',()=>{
    card.style.transform="rotateY(0)";
});

bt_reg.addEventListener('click',()=>{
   if(reganame.value!==""){
       if(regapass.value===regapass2.value &&regapass.value!==""){
           setCookie('Name',reganame.value);
           setCookie('pass',regapass.value);
           location.href=`../index.html?param1=${reganame.value}`;
           reganame.value="";
           regapass.value="";
           regapass2.value="";

       }
   }

});
bt_login.addEventListener('click',()=>{

});
function setCookie(name,value,options={}){

    options={
        path:'',
        ...options
    };

    if(options.expires instanceof Date){
        options.expires=options.expires.toUTCString();
    }

    let updateCookie = encodeURIComponent(name) + '='+
        encodeURIComponent(value);

    for(const key in options){
        updateCookie+='; ' + key;
        let optionValue = options[key];
        if(optionValue !== true){
            updateCookie+= '=' +optionValue;
        }

    }
    document.cookie=updateCookie;
}
function getCookie(name) {
    let value = `${document.cookie}`
    let parts = value.split(`${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
}
