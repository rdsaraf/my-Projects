// console.log("Hello Rushikesh");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let titleTxt=document.getElementById('addTitle');
    let title=localStorage.getItem('title');
    if(title == null){
        titleArr=[];
    }
    else{
        titleArr=JSON.parse(title);
    }
    titleArr.push(titleTxt.value);
    localStorage.setItem('title',JSON.stringify(titleArr));
    titleTxt.value="";
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteArr = [];
    }
    else {
        noteArr = JSON.parse(notes);
    }
    noteArr.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(noteArr));
    addTxt.value = "";
    showNotes();
})
function showNotes() {
    let title=localStorage.getItem('title');
    if(title == null){
        titleArr=[];
    }
    else{
        titleArr=JSON.parse(title);
    }
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteArr = [];
    }
    else {
        noteArr = JSON.parse(notes);
    }
    let html = "";
    noteArr.forEach(function (element, index) {
        html += `<div class="rd card my-3 mx-3" style="width: 18rem;border: 2px solid black;box-shadow: 2px 2px 12px cyan;border-radius: 12px;">
        <div class="card-body" style="background-color: black;color: white;border-radius: 12px;">
            <h5 class="card-title">${titleArr[index]}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`
    });
    let notemake = document.getElementById('notes');
    if (noteArr.length != 0) {
        notemake.innerHTML = html;
    }
    else {
        notemake.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    let title=localStorage.getItem('title');
    if(title == null){
        titleArr=[];
    }
    else{
        titleArr=JSON.parse(title);
    }
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteArr = [];
    }
    else {
        noteArr = JSON.parse(notes);
    }
    noteArr.splice(index, 1);
    titleArr.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteArr));
    localStorage.setItem('title',JSON.stringify(titleArr));
    showNotes();
}
let search = document.getElementById('search');
search.addEventListener('input', function () {
    let text = search.value;
    let notecard = document.getElementsByClassName('rd');
    Array.from(notecard).forEach(function (element) {
        let noteyour = element.getElementsByTagName('p')[0].innerText;
        let titleyour = element.getElementsByTagName('h5')[0].innerText;
        if (noteyour.includes(text)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
        if (titleyour.includes(text)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})
