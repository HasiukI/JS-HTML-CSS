const bt_left =document.querySelectorAll(".cont-bt-left >div");
 const bt_right =document.querySelectorAll(".cont-bt-right >div");

const head =document.getElementById('head');
const body =document.getElementById('body');
const leg =document.getElementById('leg');

const heads=["images/head_skin1.png","images/head_skin2.png","images/head_skin3.png","images/head_skin4.png"];
const bodys=["images/body_skin1.png","images/body_skin2.png","images/body_skin3.png","images/body_skin4.png"];
const legs=["images/leg_skin1.png","images/leg_skin2.png","images/leg_skin3.png","images/leg_skin4.png"];

const index=[0,0,0];


const sound = new Audio('audio/minecraft_click.mp3');
 for (let i=0;i<bt_left.length;i++){
     bt_left[i].addEventListener('click',(e)=>{
         sound.play();
        switch (i){
            case 0:
                index[0]++;
                if(index[0]>3){
                    index[0]=-1;
                }

                if(index[0]===-1){
                    head.style.display='none';
                }else{
                    head.style.display='block';
                    head.src=heads[index[0]];
                }
                setCookie('head',index[0]);
                break;
            case 1:
                index[1]++;
                if(index[1]>3){
                    index[1]=-1;
                }

                if(index[1]===-1){
                    body.style.display='none';
                }else{
                    body.style.display='block';
                    body.src=bodys[index[1]];
                }
                setCookie('body',index[1]);
                break;
            case 2:
                index[2]++;
                if(index[2]>3){
                    index[2]=-1;
                }

                if(index[2]===-1){
                    leg.style.display='none';
                }else{
                    leg.style.display='block';
                    leg.src=legs[index[2]];
                }
                setCookie('leg',index[2]);
                break;
        }
     });
 }

 for(let i=0; i<bt_right.length;i++){
     bt_right[i].addEventListener('click',(e)=>{
         sound.play();
         switch (i){
             case 0:
                 index[0]--;
                 if(index[0]<-1){
                     index[0]=3;
                 }
                 console.log(index[0]);
                 if(index[0]===-1){
                     head.style.display='none';
                 }else{
                     head.style.display='block';
                     head.src=heads[index[0]];
                 }
                 setCookie('head',index[0]);
                 break;
             case 1:
                 index[1]--;
                 if(index[1]<-1){
                     index[1]=3;
                 }

                 if(index[1]===-1){
                     body.style.display='none';
                 }else{
                     body.style.display='block';
                     body.src=bodys[index[1]];
                 }
                 setCookie('body',index[1]);
                 break;
             case 2:
                 index[2]--;
                 if(index[2]<-1){
                     index[2]=3;
                 }

                 if(index[2]===-1){
                     leg.style.display='none';
                 }else{
                     leg.style.display='block';
                     leg.src=legs[index[2]];
                 }
                 setCookie('leg',index[2]);
                 break;
         }
     });
 }

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

(()=>{
    // music.play();
    index[0]=Number(getCookie('head'));
    index[1]=Number(getCookie('body'));
    index[2]=Number(getCookie('leg'));

    if(index[0]===-1){
        head.style.display='none';
    }else{
        head.style.display='block';
        head.src=heads[index[0]];
    }

    if(index[1]===-1){
        body.style.display='none';
    }else{
        body.style.display='block';
        body.src=bodys[index[1]];
    }

    if(index[2]===-1){
        leg.style.display='none';
    }else{
        leg.style.display='block';
        leg.src=legs[index[2]];
    }

})()