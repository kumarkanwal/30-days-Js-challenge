// // Book class represents a book

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// store Class : Handle Storage
class Store{
  static  getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    }else{
        books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  
  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }

  static removeBook(isbn){ 
    const books = Store.getBooks();
    books.forEach((book, index)=>{

        if(book.isbn === isbn){
            books.splice(index,1);

        }

    });

    localStorage.setItem("books",JSON.stringify(books))

  }
}


class UI {

 static displayBooks(){
        const storeBooks = Store.getBooks();
        // = [
        //     {
        //         title: "Kiss that frog",
        //         author : "Brain Tracy",
        //         isbn: "2475252743"
        //     },
        //     {
        //         title: "The kita Runner",
        //         author : "Khalid hussini",
        //         isbn: "89283592435"
        //     }

            
        // ]

        const books = storeBooks;

        books.forEach((book) => UI.addBookToList(book));


    }

   static addBookToList(book){

        const list = document.querySelector('#book-list');
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-sm btn-danger delete">X</a></td>;
        `
        list.appendChild(row);

    }
    static deleteBook(el){

        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // vanish in 3 seconds
        setTimeout(()=>document.querySelector(".alert").remove(),3000)
    }

    static clearFields(){
        document.querySelector('#title').value = ''; 
        document.querySelector('#author').value = ''; 
        document.querySelector('#isbn').value = ''; 
    }
}


document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate

    if(title === "" || author == "" || isbn == ""){
    
        UI.showAlert("Pleases fill in all Fields","danger")
    }else{
        // Instatiate book
    const book = new Book(title,author,isbn);

    UI.addBookToList(book);
    Store.addBook(book);

    // show success message
    UI.showAlert(`new Book is Added in the list`,"success")
    // clear field after submit
    UI.clearFields();
}
    });


// Event: remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
UI.deleteBook(e.target)

// remove book from store
Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

// show success message
UI.showAlert("The book has been deleted", "danger")
})















// // Book Class : represents a Book

// class Book {
//     constructor(title ,author,isbn){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }


// // UI  Class: Handle UI Tasks 

// class UI{
    
//     static displayBooks(){
//         const storeBooks = [
//             {
//                 title: "Book One",
//                 author: "Vishal Kumar",
//                 isbn: "2235454644"
//             },
//             {
//                 title: "Book Two",
//                 author: "Raj Kumar",
//                 isbn: "22354546789"
//             }
//         ]

//         const books = storeBooks

//         books.forEach((book)=> UI.addBookToList(book));
//     }

//     static addBookToList(book){

//         const list = document.querySelector("#book-list");
//         const row = document.createElement("tr");
//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>
//         `;

//         list.appendChild(row);
//     }
// }

// // Store Class: Handles Storage

// // Event : Display Books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event : Add a Book

// document.querySelector('#book-form').addEventListener('submit', (e)=>{

//     // prevent actual submit 

//     e.preventDefault();
//     // Get form values  
//     const title = document.querySelector('#title').value;
//     const auther = document.querySelector('#author').value;
//     const isbn = document.querySelector('#isbn').value;

//     // Instatiate book
//     const book = new Book(title, author, isbn);

//     // Add Book to the UI

//     UI.addBookToList(book);
// })
// // Event : remove a Book
