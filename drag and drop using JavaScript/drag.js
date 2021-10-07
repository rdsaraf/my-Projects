// console.log("Hello Rushikesh !");
const boxes=document.getElementsByClassName('boxes');
const imgBox=document.querySelector('.imgBox');

imgBox.addEventListener('dragstart',(e)=>{
    // console.log("dragStart");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className='hide';
    }, 0);
})
imgBox.addEventListener('dragend',(e)=>{
    // console.log("dragEnd");
    e.target.className='imgBox';
})
for (box of boxes){
    box.addEventListener('dragenter',(e)=>{
        // console.log("dragEnter");
        e.target.className+=' dashed';
    })
    box.addEventListener('dragleave',(e)=>{
        // console.log("dragLeave");
        e.target.className='boxes';
    })
    box.addEventListener('dragover',(e)=>{
        // console.log("dragOver");
        e.preventDefault();
    })
    box.addEventListener('drop',(e)=>{
        // console.log("Drop");
        e.target.append(imgBox);
    })
}