// window.addEventListener('scroll',(e)=>{
//     console.log('asdasdasd');
// });
// document.body.style.overflowY='hidden';


let space =1000,
    $blocks_element = document.getElementsByClassName('block'),
    blocks= Array.from($blocks_element);


window.onscroll = function (){
    let scrollPerc=((document.documentElement.scrollTop + document.body.scrollTop)/ (document.body.scrollHeight- document.documentElement.clientHeight));

    blocks.forEach((block, i, blocks)=>{

        let position=(((i) *space) * scrollPerc);
        block.style.transform=`translateZ(${position}px)`;
             // if(position>680){
             //     block.style.opacity=0;
             // }else{
             //     block.style.opacity=1;
             // }
    })
}