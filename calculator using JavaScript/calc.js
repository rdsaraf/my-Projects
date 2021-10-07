// console.log("Hello Rushikesh!");
const screen=document.getElementById('screen');
const btn=document.querySelectorAll('button');
screenValue="";
for(nums of btn){
    nums.addEventListener('click',(e)=>{
        let enter=e.target.innerText;
        if(enter == "C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(enter == "="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += enter;
            screen.value = screenValue;
        }
    })
};