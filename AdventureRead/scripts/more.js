import {books} from './books.js';
let param1 = Number(new URLSearchParams(window.location.search).get('param1'));
let allBooks=books;
let currentBook,copyBook;
for(let i=0;i<allBooks.length;i++){
    if(param1===allBooks[i]['id']){
        currentBook=allBooks[i];
        copyBook=currentBook;
        break;
    }
}




//controller
const ans1=document.getElementById('ans1');
const ans2=document.getElementById('ans2');
const nextPage =document.getElementById('nextPage');
const end=document.getElementById('end');
//other
const mainBook =document.querySelector('.book');
const infoBook=document.querySelector('.info');
const reviewBook=document.getElementById('review');
const inpRew=document.getElementById('inpRew');
let indexpage=0;
let the_end=false;

(()=>{
infoBook.innerHTML+=`
        <h2>${copyBook.name}</h2><br>
        <h3>Author: ${copyBook.author}</h3><br>
        <h4>Rainting: ${copyBook.raiting}/10</h4><br>
        <p><b>Опис: </b>${copyBook.opus} </p><br>
       <button id="startread">start read</button>`;
})();

document.getElementById('startread').addEventListener('click',()=>{
    infoBook.style.left="2000px";
    nextPage.style.display='flex';
    reviewBook.style.top="2000px";

    setTimeout(()=>{
        infoBook.style.display="none";
        reviewBook.style.display="none";
    },1000)
    mainBook.style.left="50%";
    copyBook=currentBook;
    copyBook=copyBook.history;

});

ans1.addEventListener('click',()=>{
    copyBook=copyBook.answer1;
    createPage(copyBook.text);

    ans1.style.display="none"
    ans2.style.display="none"
    nextPage.style.display="block";
    if(copyBook.answer1===undefined){
        the_end=true;
    }
});
ans2.addEventListener('click',()=>{
    copyBook=copyBook.answer2;
    createPage(copyBook.text);

    ans1.style.display="none"
    ans2.style.display="none"
    nextPage.style.display="block";
    if(copyBook.answer1===undefined){
        the_end=true;
    }

});
nextPage.addEventListener('click',()=>{
        const pages= document.querySelectorAll('.page');
        pages[indexpage].style.transform="rotateY(-180deg)";
        indexpage++;
        setTimeout(()=>{
            pages[indexpage].style.zIndex="0";
            pages[indexpage].style.zIndex="1";
        },1000);


        if(the_end){
            end.style.display="block";
            nextPage.style.display="none";
        }
        else{
            if(indexpage+1===pages.length){

                ans1.style.display="block"
                ans1.innerText=copyBook.answer1.answer;
                ans2.style.display="block"
                ans2.innerText=copyBook.answer2.answer;
                nextPage.style.display="none";
            }
        }
});
end.addEventListener('click',()=>{
    const pages= document.querySelectorAll('.page');
    let index=pages.length;
    end.style.display="none";

    for(let i=0;i<pages.length;i++){
        setTimeout(()=>{
            pages[i].style.transform="rotateY(0)";
            pages[indexpage].style.zIndex=`${index++}`;

        },i*250);
    }
    setTimeout(()=>{

        infoBook.style.display="block";
        infoBook.style.left="2000px";
        reviewBook.style.display="flex";
        reviewBook.style.top="2000px";

        setTimeout(()=>{
            infoBook.style.left="58%";
            mainBook.style.left="20%";
            reviewBook.style.top="80%";
            mainBook.innerHTML=" ";
            copyBook=currentBook;
            createBook();
            indexpage=0;
            the_end=false;
        },200)



    },1600);

})
inpRew.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
        createReview(getCookie('Name'),inpRew.value);
    }
});
function createReview(who,text){
    let date = new Date();

    document.getElementById('reviewPeople').innerHTML+=`
     <div class="peoplesay">
                <span><b>${who}</b> <i style="font-size: 12px">${date.toDateString()}</i></span>
                <p>${text}</p>
            </div>
    `;
}
function createBook(){
    mainBook.innerHTML+=`
<div class="page" style="z-index: 100">
    <div class="front">
        <div class="title">
            <img src="${copyBook['imagesrc']}">
            <p style="font-size: 24px">${copyBook['name']}</p>
            
        </div>
     
    </div>
    <div class="back">
    </div>
</div>
`;

    createPage(copyBook.history.text);
    copyBook=copyBook.history;
}
 createBook();
function createPage(text){
    if(text.length>1100){
        let strings = splitString(text);
        let index= strings.length;
        for(let i=0;i<strings.length;i+=2){
            if(i+2>strings.length){
                mainBook.innerHTML+=`
                        <div class="page" style="z-index: ${0}">
                        <div class="front">
                            <div class="title">
                                <p>${strings[i]}</p>
                            </div>
                            <div class="numpage">
                                <p>${indexpage}</p>
                            </div>
                        </div>
                        <div class="back"> 
                          <div class="title">
                                <p>${strings[i+1]}</p>
                            </div>
                            <div class="numpage">
                                <p>${indexpage+1}</p>
                        </div>
                        </div>
                    </div>`;
            }else{
                mainBook.innerHTML+=`
                    <div class="page" style="z-index: ${index--}">
                    <div class="front">
                        <div class="title">
                            <p>${strings[i]}</p>
                        </div>
                        <div class="numpage">
                            <p>${indexpage}</p>
                        </div>
                    </div>
                    <div class="back"> 
                      <div class="title">
                            <p>${strings[i+1]}</p>
                        </div>
                        <div class="numpage">
                            <p>${indexpage}</p>
                    </div>
                    </div>
                </div>`;
            }

        }
    }else{
        mainBook.innerHTML+=`
            <div class="page">
            <div class="front">
                <div class="title">
                    <p>${text}</p>
                </div>
                <div class="numpage">
                    <p>${indexpage+1}</p>
                </div>
            </div>
            <div class="back"> 
            </div>
        </div>`;

    }

}
// Функція, яка ділить рядок на масив рядків заданої довжини
function splitString(str) {
    let result = [];

    if (typeof str === "string" ) {
        for (let i = 0; i < str.length; i += 800) {
            result.push(str.substring(i, i + 800));
        }
    }
    return result;
}
function getCookie(name) {
    let value = `${document.cookie}`
    let parts = value.split(`${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
}


