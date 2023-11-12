const bt_left =document.querySelectorAll(".cont-bt-left >div");
 const bt_right =document.querySelectorAll(".cont-bt-right >div");

const head =document.getElementById('head');
const body =document.getElementById('body');
const leg =document.getElementById('leg');

const heads=["images/head_skin1.png","images/head_skin2.png","images/head_skin3.png","images/head_skin4.png"];
const bodys=["images/body_skin1.png","images/body_skin2.png","images/body_skin3.png","images/body_skin4.png"];
const legs=["images/leg_skin1.png","images/leg_skin2.png","images/leg_skin3.png","images/leg_skin4.png"];

const index=[0,0,0];
 for (let i=0;i<bt_left.length;i++){
     bt_left[i].addEventListener('click',(e)=>{
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
                break;
        }
     });
 }

 for(let i=0; i<bt_right.length;i++){
     bt_right[i].addEventListener('click',(e)=>{
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
                 break;
         }
     });
 }