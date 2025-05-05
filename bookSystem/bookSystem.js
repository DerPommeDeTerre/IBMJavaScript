let books = [];

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

    if (bookName && authorName && bookDescription && pagesNumber && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
        showDeleteButton();
    } else {
        alert("Please, fill in al fields correctly");
    }
}

function showBooks(){
    const booksDiv = books.map(function (book, index){
        return `<h1>Book Number: ${index + 1}</h1>
                <p><strong>Book Name: </strong> ${book.name}</p>
                <p><strong>Author Name: </strong> ${book.authorName}</p>
                <p><strong>Book Description: </strong> ${book.bookDescription}</p>
                <p><strong>No. of pages: </strong> ${book.pagesNumber}</p><br>
                <button onclick="deleteBook(${index})">Delete Book</button>`
    })
    document.getElementById("books").innerHTML = booksDiv.join('');
}

function clearInputs(){
    document.getElementById("bookName").value = '';
    document.getElementById("authorName").value = '';
    document.getElementById("bookDescription").value = '';
    document.getElementById("pagesNumber").value = '';
}

function deleteBook(index){
    books.splice(index,1);//splice(startIndex - position where4 changes begin, deleteCount - number of elements to remove)
    showBooks();
}