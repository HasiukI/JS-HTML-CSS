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
//
const mainBook =document.querySelector('.book');
const infoBook=document.querySelector('.info');
let indexpage=0;
let the_end=false;
document.getElementById('startread').addEventListener('click',()=>{
    infoBook.style.left="2000px";
    nextPage.style.display='flex';

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
        infoBook.style.left="50%";
        mainBook.style.left="20%";

        mainBook.innerHTML=" ";
        copyBook=currentBook;
        createBook();
        indexpage=0;
        the_end=false;
    },2000);

})


function createBook(){
    mainBook.innerHTML+=`
<div class="page" style="z-index: 100">
    <div class="front">
        <div class="title" >
            <p>${copyBook['name']}</p>
        </div>
        <div class="numpage">
            <p>1</p>
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
    if(text.length>835){
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
                                <p>1</p>
                            </div>
                        </div>
                        <div class="back"> 
                          <div class="title">
                                <p>${strings[i+1]}</p>
                            </div>
                            <div class="numpage">
                                <p>2</p>
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
                            <p>1</p>
                        </div>
                    </div>
                    <div class="back"> 
                      <div class="title">
                            <p>${strings[i+1]}</p>
                        </div>
                        <div class="numpage">
                            <p>2</p>
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
                    <p>1</p>
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
        for (let i = 0; i < str.length; i += 835) {
            result.push(str.substring(i, i + 835));
        }
    }
    return result;
}

