let onclick=false;

let hamburger= document.getElementById('hamburger');
let Card = document.querySelector('.card');
const Mains =document.querySelector('.mains');
let dragItems=document.querySelectorAll('.items');
let curentDragItem;
// window.onload(()=>{
//     onclick=false;
//     Modal.style.top='50px';
//     Modal.style.right='35px';
//     Modal.style.display='none';
// });


hamburger.addEventListener('click',animation);


function animation(){
    let start_first, start_second, deg_first,deg_second,opac;
    if(onclick===false){
        opac=0;
        Mains.style.display='grid';

        Card.style.height='500px';
        start_first=20;
        start_second=80;
        deg_first=0;
        deg_second=0;
        let animate=setInterval(()=>{
            Mains.style.opacity=`${opac+=0.02}`;
            if(start_first>=50 && start_second<=50){
                if(deg_first>=45 && deg_second<=45){
                    hamburger.children[0].style.transform=" rotate(45deg)";
                    hamburger.children[0].style.top="50%";
                    hamburger.children[1].style.width="0";
                    hamburger.children[2].style.transform=" rotate(-45deg) ";
                    hamburger.children[2].style.top="50%";
                    Mains.style.opacity=`1`;
                    clearInterval(animate);
                }
                hamburger.children[1].style.width="0";
                hamburger.children[0].style.transform=` rotate(${deg_first+=2}deg)`;
                hamburger.children[2].style.transform=` rotate(${deg_second-=2}deg) `;

            }else{
                hamburger.children[0].style.top=`${start_first+=2}%`;
                hamburger.children[2].style.top=`${start_second-=2}%`;
            }
        },20)
        onclick=true;
    }else{
        Mains.style.display='none';
        Card.style.height='70px';
        start_first=50;
        start_second=50;
        deg_first=45;
        deg_second=-45;

        let animate=setInterval(()=>{
            if(deg_first<=0 && deg_second>=0){
                if(start_first<=20 && start_second>=80){
                    hamburger.children[0].style.transform=" rotate(0deg)";
                    hamburger.children[0].style.top="20%";
                    hamburger.children[1].style.width="45px";
                    hamburger.children[2].style.transform=" rotate(0deg) ";
                    hamburger.children[2].style.top="80%";
                    clearInterval(animate);
                }
                hamburger.children[1].style.width="45px";
                hamburger.children[0].style.top=`${start_first-=2}%`;
                hamburger.children[2].style.top=`${start_second+=2}%`;

            }else{

                hamburger.children[0].style.transform=` rotate(${deg_first-=2}deg)`;
                hamburger.children[2].style.transform=` rotate(${deg_second+=2}deg) `;
            }
        },20)
        onclick=false;
    }
}

function handleDragStart(e){
    curentDragItem=this;

    e.dataTransfer.effectAllowed='move';
     e.dataTransfer.setData('text/html',this.innerHTML);

}

function handleDragEnter(e){
    console.log('handleDragEnter');

    if(this!==curentDragItem && curentDragItem !=null){
        // this.classList.add('drag-over');
    }


}

function handleDragOver(e){
    console.log('handleDragOver');

    if(e.preventDefault){
        e.preventDefault();
    }
    e.dataTransfer.dropEffect='move';
    return false;
}

function handleDragLeave(e){
    this.classList.remove('drag-over');
}

function handleDragEnd(e){
    dragItems.forEach(item=>{
        item.classList.remove('drag-over');
    })
}
function handleDragDrop(e){
    e.stopPropagation();
    if(this!==curentDragItem && curentDragItem !=null){
        curentDragItem.innerHTML=this.innerHTML;
        this.innerHTML=e.dataTransfer.getData('text/html');
    }
}

dragItems.forEach(item=>{
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
    item.addEventListener('drop', handleDragDrop, false);
})
