function Book(bookName, authorName, type) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.type = type;
}
function Display() {

}
Display.prototype.add = function () {
    let info = localStorage.getItem('info');
        if (info == null) {
            infoArr = [];
        }
        else {
            infoArr = JSON.parse(info);
        }
    let tableBody = document.getElementById('tableBody');
    let html = "";
    infoArr.forEach(function (element,index) {
        html += `<tr>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td>${element[2]}</td>
                        <td><button class="btnDel" onclick="deleteNote(${index})">Delete</button></td>
                    </tr>`;
    })
    tableBody.innerHTML = html;
}
Display.prototype.clear = function () {
    let form = document.getElementById('form');
    form.reset();
}
Display.prototype.validate = function (book) {
    if (book.bookName.length > 2 || book.authorName.length > 3) {
        return true;
    }
    else {
        return false;
    }
}
Display.prototype.show = function (type, message) {
    let alert = document.getElementById('alert');
    alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>${type}</strong> ${message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
    setTimeout(function () {
        alert.innerHTML = "";
    }, 2000);
}
let form = document.getElementById('form');
showTable();
form.addEventListener('submit', libraryForm);
function libraryForm(e) {
    let bookName = document.getElementById('bookName').value;
    let authorName = document.getElementById('authorName').value;
    let type;
    let Type1 = document.getElementById('Type1');
    let Type2 = document.getElementById('Type2');
    let Type3 = document.getElementById('Type3');
    if (Type1.checked) {
        type = Type1.value;
    }
    else if (Type2.checked) {
        type = Type2.value;
    }
    else if (Type3.checked) {
        type = Type3.value;
    }
    let book = new Book(bookName, authorName, type);
    let display = new Display();
    if (display.validate(book)) {
        let info = localStorage.getItem('info');
        if (info == null) {
            infoArr = [];
        }
        else {
            infoArr = JSON.parse(info);
        }
        infoArr.push([book.bookName, book.authorName, book.type]);
        localStorage.setItem('info', JSON.stringify(infoArr));
        display.add();
        display.clear();
        display.show("success", "Successfully added !");
    }
    else {
        display.show("Error", "Book's name should be greater than 2 characters and author's name should be greater than 3 characters")
    }
    e.preventDefault();
}
function showTable() {
    let info = localStorage.getItem('info');
    if (info == null) {
        infoArr = [];
    }
    else {
        infoArr = JSON.parse(info);
    }
    let tableBody = document.getElementById('tableBody');
    let html = "";
    infoArr.forEach(function (element,index) {
        html += `<tr>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td>${element[2]}</td>
                        <td><button class="btnDel" onclick="deleteNote(${index})">Delete</button></td>
                    </tr>`;
    })
    tableBody.innerHTML = html;
}
function deleteNote(index) {
    let info = localStorage.getItem('info');
    if (info == null) {
        infoArr = [];
    }
    else {
        infoArr = JSON.parse(info);
    }
    infoArr.splice(index,1);
    localStorage.setItem('info', JSON.stringify(infoArr));
    showTable();
}