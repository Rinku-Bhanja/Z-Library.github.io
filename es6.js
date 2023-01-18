class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
};

class Display{
    add(book){
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>`;
            tableBody.innerHTML += uiString;
        
    }

    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book){
        if(book.name.length<3 || book.author.length<3){
         return false;
        }
        else{
         return true;
        }
    }

    show(type, displayMessage){
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                               <strong>User🖐</strong> ${displayMessage}
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                               </button>
                            </div>`;
                setTimeout(function(){
                    message.innerHTML = '';
                }, 2000);
    }
}

//Add Submit Event Listener to library Form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have submitted');
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let type;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let history=document.getElementById('history');
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(history){
        type = history.value;
    }

    let book  = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','You Successfully add your book');
    }
   else{
    display.show('danger','Sorry You can not add this book');
   }
    
    
    e.preventDefault();
}