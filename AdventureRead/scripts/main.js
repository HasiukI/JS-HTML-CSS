import {books} from "./books.js";
let allBooks=books;

const contBooks = document.getElementById('books-grid');
const numberPages = document.getElementById('books-numberpage');
const header =document.querySelector('header');
const footer =document.querySelector('footer');
const main =document.querySelector('main');
const navBar =document.querySelector('nav');
const logoLetters =document.querySelectorAll('.logo-container >span');
const logobt=document.getElementById('logoimg');
const arrowbt=document.getElementById('arrowimg');



logobt.addEventListener('click',()=>{
    logobt.style.left='20%';
    for (let i=0;i<logoLetters.length;i++) {
        logoLetters[i].style.display='block';
    }

    let startpos=30;
    let timestart=1000;
    for(let i=0;i<logoLetters.length;i++){
        setTimeout(()=>{
            if(i<7){
                logoLetters[i].style.top='30%';
                logoLetters[i].style.left =`${startpos}%`;
                startpos+=2;
            }
            if(i===7 || i===8){
                logoLetters[i].style.top='30%';
                logoLetters[i].style.left =`${startpos}%`;
                logoLetters[i].style.fontSize='4em';
                startpos+=4;
            }
            if(i>8){
                logoLetters[i].style.top='35%';
                logoLetters[i].style.left =`${startpos}%`;
                startpos+=2;
            }
        },timestart);
        timestart+=500;
    }
    setTimeout(()=>{
        arrowbt.style.left="15%";
        arrowbt.style.top="48%";
        setTimeout(()=>{
            for(let i=0;i<logoLetters.length;i++){
                logoLetters[i].style.top=`-100px`;
            }
            logobt.style.transform="translate(-50%,-50%) rotateZ(10deg)";
            logobt.style.top="75%";
            arrowbt.style.transition='all 2s';
            arrowbt.style.top="120%";
            setTimeout(()=>{
                for(let i=0;i<logoLetters.length;i++){
                    logoLetters[i].style.display="none";
                }
                arrowbt.style.display="none";
                header.style.height="18vh";
                header.style.display="flex";
                setTimeout(()=>{
                    logobt.style.top="0";
                    logobt.style.left="0";
                    logobt.style.width="25vh";
                    logobt.style.height="8vw";
                    setTimeout(()=>{
                         navBar.style.display='flex';
                         navBar.style.opacity='1';
                         logobt.style.position="relative";
                         logobt.style.transform="none";
                         logobt.style.margin="5px";
                    },1000);
                },1000)
            },700);
            main.style.display="block";
            header.style.display="block";
            footer.style.display="block";
        },400);
    },8000)
});


let pages =allBooks.length/8;
console.log(pages)
for(let i=0;i<pages;i++){
    numberPages.innerHTML+=`
    <div class="numpag">${i+1}</div>
    `;
}
for(let i=0; i<allBooks.length;i++){
    if(i===8)break;
    contBooks.innerHTML+=`
     <div class="book">
        <img class="booktap" id="book_${allBooks[i]['id']}" src="images/top_20.jpeg">
        <span  class="booktap" id="span_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
     </div>
    `;
}

document.addEventListener('click',(e)=>{
    if(e.target.className==="numpag"){
        contBooks.innerHTML="";
        console.log(Number(e.target.innerText)-1)
        for(let i=(Number(e.target.innerText)-1)*8; i<allBooks.length;i++){

            if(i===((Number(e.target.innerText)-1)*8)+8)break;
            contBooks.innerHTML+=`
                 <div class="book">
                    <img class="booktap" id="book_${allBooks[i]['name']}" src="images/top_20.jpeg">
                    <span>${allBooks[i]['name']}</span>
                 </div>
            `;
        }
    }
    if(e.target.className==="booktap"){
        let str = e.target.id.split('_')[1];
        location.href=`otherWindow/MoreBook.html?param1=${str}`;
    }
})
