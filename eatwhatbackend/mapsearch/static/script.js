/* 
const title =  document.getElementById("title");
title.innerHTML =" Hi from JS";

console.dir(title);
document.title = 'chanhe';


const title = document.querySelector("#title");
const BASE_COLOR = "aliceblue";
const OTHER_COLOR = "rgb(0,0,0)";

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }

}

init(); 

*/

//let emojiArr = ["🍔","🍖","🍚","🍕","🥗","🍜"];
//let foodName = ["햄버거","고기","밥","피자","샐러드","국수"];


const btn = document.querySelector(".btn");
//골라줘 버튼이 눌렸을때
btn.addEventListener("click", 
    function(){
        //const index = Math.floor(Math.random() * emojiArr.length);  
        document.querySelector(".em").innerHTML = JSON.parse("{{ emo }}");
        //console.log(index);
    
        document.querySelector("h1").innerHTML = "오늘은 {{ foodname }} 먹자!"
        document.querySelector(".btn-onclick").innerHTML = '근처가게보기';
        btn.style.gridColumn = 2; 
        console.log('isClicked');
})

