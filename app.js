
let boxes = document.querySelectorAll('.box');
let resetbtn = document.getElementById("reset-btn");
let msgContainer = document.querySelector('.msg-container');
let msgWinner = document.getElementById('msg');
let drawMsg = document.getElementById('draw-msg');
let turn0 = true;
let count = 0;
let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetG = ()=>{
    turn0 = true;
    count = 0;
    msgContainer.classList.add('hide');
    enables();
}
boxes.forEach(box => {
    box.addEventListener('click',function(){
        if(turn0){
            box.innerHTML= `<span style="color: white; font-weight: bold;">O</span>`;
            turn0 = false;
        }
        else{
            box.innerHTML = `<span style="color: #000; font-weight: bold;">X</span>`;
            turn0 = true;
        }
        box.disabled = true;
        count++;
       let isWinner =  cheakWinner();
       if(count === 9 && !isWinner ){
        gmDrw();
        console.log('hii')
       }
    })
   
});

const gmDrw=()=>{
    
    msgContainer.classList.remove('hide');
    msgWinner.innerText = `🙅‍♂️✋🗽 game is draw !`;
    disabled();
}

const disabled = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enables = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}
const showWinner=(winner)=>{
    msgWinner.innerText = `Congratulations, winner is ${winner} !!! 🤩🥳🤩🤑`;
    msgContainer.classList.remove('hide');
    disabled();
}
const cheakWinner= () =>{
    for(let pattern of winPatterns ){
           let posN0boxes= boxes[pattern[0]].innerText;
            let posN1boxes = boxes[pattern[1]].innerText;
            let posN2boxes = boxes[pattern[2]].innerText
            if(posN0boxes != '' && posN1boxes != '' && posN2boxes != '' ){
                if(posN0boxes === posN1boxes && posN1boxes === posN2boxes){
                    showWinner(posN0boxes);
                }
            }
    }
}

resetbtn.addEventListener('click',()=>{
    resetG();
})
document.getElementById('newGame-btn').addEventListener('click',()=>{
    resetG();
})

