import {books} from "./books.js";
let allBooks=books;
let pages =allBooks.length/8;

const contBooks = document.getElementById('books-grid');
const numberPages = document.getElementById('books-numberpage');
const header =document.querySelector('header');
const footer =document.querySelector('footer');
const main =document.querySelector('main');
const navBar =document.querySelector('nav');
const logoLetters =document.querySelectorAll('.logo-container >span');
const logobt=document.getElementById('logoimg');
const arrowbt=document.getElementById('arrowimg');

const newBook = document.getElementById('newBookcont');
const btlog=document.querySelector('.login');
btlog.addEventListener('click',()=>{
    location.href=`otherWindow/LoginRegister.html`;
});

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
                            let startpos=18;
                            let timestart=500;

                            for(let i=0;i<logoLetters.length;i++){
                                setTimeout(()=>{
                                    if(i<7){
                                        logoLetters[i].style.top='10%';
                                        logoLetters[i].style.left =`${startpos}%`;
                                        startpos+=2;
                                    }
                                    if(i===7 || i===8){
                                        logoLetters[i].style.top='8%';
                                        logoLetters[i].style.left =`${startpos}%`;
                                        logoLetters[i].style.fontSize='4em';
                                        startpos+=4;
                                    }
                                    if(i>8){
                                        logoLetters[i].style.top='40%';
                                        logoLetters[i].style.left =`${startpos}%`;
                                        startpos+=2;
                                    }
                                },timestart);
                                timestart+=300;
                            }
                            document.querySelector('.logo-container').style.height="auto";
                        },1000);
                    },1000)
                },700);
                main.style.display="block";
                header.style.display="block";
                footer.style.display="block";
                setCookie('animation',1);

            },400);
        },8000)


});

const categoryTap= document.querySelectorAll('.categoryTap');

for (let i=0;i<categoryTap.length;i++) {
    console.log(categoryTap[i]);
    categoryTap[i].addEventListener('click',(e)=>{
        console.log(e.target.dataset.name)
        if(e.target.dataset.name==="off"){
            e.target.style.backgroundColor="white";
            e.target.style.color="black";
            e.target.dataset.name="on";
            contBooks.innerHTML="";
            createBook(1);
        }else{
            contBooks.innerHTML="";

            for(let i=0;i<allBooks.length;i++){
                for(let x=0; x<allBooks[i].category.length;x++){
                    console.log(allBooks[i].category);
                    if(e.target.innerText===allBooks[i].category[x]){
                        contBooks.innerHTML+=`
                          <div class="book">
                             <img class="booktap" id="book_${allBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
                             <span  class="booktap" id="span_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
                          </div>`;
                        break;
                    }
                }
            }
            e.target.dataset.name="off";
            e.target.style.color="white";
            e.target.style.backgroundColor="black";
        }
    })
}
(()=>{
    let param1 = new URLSearchParams(window.location.search).get('param1');
     const img =document.querySelector('.login >img');
    if(param1!==undefined && param1!==null){
        img.setAttribute("src","../images/following.svg");
        btlog.innerText=param1;
    }
    createBook(1);
    for(let i=0;i<pages;i++){
        numberPages.innerHTML+=`
    <div class="numpag">${i+1}</div>
    `;
    }

    if(Number(getCookie('animation'))===1){
        main.style.display="block";
        footer.style.display="block";
        header.style.height="18vh";
        header.style.display="flex";
        navBar.style.display='flex';
        navBar.style.opacity='1';
        logobt.style.top="0";
        logobt.style.left="0";
        logobt.style.width="25vh";
        logobt.style.height="8vw";
        logobt.style.position="relative";
        logobt.style.transform="none";
        logobt.style.margin="5px";
        navBar.style.display='flex';
        navBar.style.opacity='1';
        document.querySelector('.logo-container').style.height="auto";
        let startpos=18;
        let timestart=500;
        for(let i=0;i<logoLetters.length;i++){
            logoLetters[i].style.display="block";
            logoLetters[i].style.top="-100px";
            setTimeout(()=>{
                if(i<7){
                    logoLetters[i].style.top='10%';
                    logoLetters[i].style.left =`${startpos}%`;
                    startpos+=2;
                }
                if(i===7 || i===8){
                    logoLetters[i].style.top='8%';
                    logoLetters[i].style.left =`${startpos}%`;
                    logoLetters[i].style.fontSize='4em';
                    startpos+=4;
                }
                if(i>8){
                    logoLetters[i].style.top='40%';
                    logoLetters[i].style.left =`${startpos}%`;
                    startpos+=2;
                }
            },timestart);
            timestart+=300;
        }
    }

    createanimetionnewtop();
})()


// for(let i=0; i<allBooks.length;i++){
//     if(i===4)break;
//     contBooks.innerHTML+=`
//      <div class="book">
//         <img class="booktap" id="book_${allBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
//         <span  class="booktap" id="span_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
//      </div>
//     `;
// }

document.addEventListener('click',(e)=>{
    if(e.target.className==="numpag"){
        contBooks.innerHTML="";
        createBook(Number(e.target.innerText));
    }
    if(e.target.className==="booktap"){
        let str = e.target.id.split('_')[1];
        location.href=`otherWindow/MoreBook.html?param1=${str}`;
    }
})

const fBook =document.getElementById('findBook');
fBook.addEventListener('keyup',(e)=>{

    if(fBook.value===""){
        contBooks.innerHTML="";
        createBook(1);
        numberPages.style.display="flex";
    }else {
        numberPages.style.display="none";
        contBooks.innerHTML="";
        let findBooks=[];
        for (let i=0;i<allBooks.length;i++){
            if(allBooks[i].name.indexOf(fBook.value)!==-1){
                findBooks.push(allBooks[i]);
            }
        }
        for(let i=0; i<8;i++){
            contBooks.innerHTML+=`
              <div class="book">
                 <img class="booktap" id="book_${findBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
                 <span  class="booktap" id="span_${findBooks[i]['id']}">${allBooks[i]['name']}</span>
             </div>`;
        }
    }

});
function createBook(numpage){
    for(let i=(numpage-1)*8; i<allBooks.length;i++){
        if(i===((numpage-1)*8)+8)break;
        contBooks.innerHTML+=`
              <div class="book">
                 <img class="booktap" id="book_${allBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
                 <span  class="booktap" id="span_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
             </div>`;
    }
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

function createanimetionnewtop(){

    for(let i=0;i<2;i++){
        newBook.innerHTML+=`
              <div class="newbooktap">
                 <img class="booktapnew" id="newBook_${allBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
                 <span  class="booktap" id="newspan_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
             </div>`;
    }
    let newindex=0;
    let news=document.querySelectorAll('.newbooktap');
    news[0].style.left='6%';
    news[1].style.left='8%';
    // news[2].style.left='10%';

    setInterval(()=>{
        if(newindex>=2){
            newindex=0;
        }
        setTimeout(()=>{
            news[newindex].style.left="25%";
            news[newindex].style.transform="scale(1.1)";
            news[newindex].style.boxShadow="0 0 30px black";

            setTimeout(()=>{


                switch (newindex){
                    case 0:
                        news[newindex].style.left="6%";
                        break;
                    case 1:
                        news[newindex].style.left="8%";
                        break;
                    // case 2:
                    //     news[newindex].style.left="10%";
                    //     break;
                }
                news[newindex].style.transform="scale(0.8)";
                news[newindex].style.boxShadow="none";
                newindex++;
            },4900);
        },100);
    },5000);


    for(let i=0;i<2;i++){
        document.getElementById('topBookcont').innerHTML+=`
              <div class="topbooktap">
                 <img class="booktaptop" id="topBook_${allBooks[i]['id']}" src="${allBooks[i]['imagesrc']}">
                 <span  class="booktap" id="topspan_${allBooks[i]['id']}">${allBooks[i]['name']}</span>
             </div>`;
    }
    let topindex=0;
    let tops=document.querySelectorAll('.topbooktap');
    tops[0].style.right='6%';
    tops[1].style.right='8%';
    // tops[2].style.right='10%';

    setInterval(()=>{
        if(topindex>=2){
            topindex=0;
        }
        setTimeout(()=>{
            tops[topindex].style.right="25%";
            tops[topindex].style.transform="scale(1.1)";
            tops[topindex].style.boxShadow="0 0 30px black";
            setTimeout(()=>{
                switch (topindex){
                    case 0:
                        tops[topindex].style.right="6%";
                        break;
                    case 1:
                        tops[topindex].style.right="8%";
                        break;
                    // case 2:
                    //     tops[topindex].style.right="10%";
                    //     break;
                }
                tops[topindex].style.transform="scale(0.8)";
                tops[topindex].style.boxShadow="none";
                topindex++;
            },4900);
        },100);
    },5000);
}
