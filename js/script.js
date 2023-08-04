// Get UI Elements
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');
// console.log(booklist)



// Book Class
class Book{
	constructor(title,author,isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// Display class
class Display{
	static addToBookList(book){
		let list = document.querySelector('#book-list');
		let row = document.createElement('tr');
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href='#' class='delete'>X</a></td>`;
		list.appendChild(row);
		// console.log(row)
	}
	static clearFields(){
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
	static showAlert(message, className){
		let div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		let container = document.querySelector('.container');
		let form = document.querySelector('#book-form');
		container.insertBefore(div,form);

		setTimeout(()=>{
			document.querySelector('.alert').remove();
		}, 2000);
	}
	static deleteFormBook(target){
		if (target.hasAttribute('href')){
			Display.showAlert('Book Removed!', 'success');
			target.parentElement.parentElement.remove();
		}
		
	}
}
// Add EventListener
form.addEventListener('submit', newBook);
booklist.addEventListener('click',removeBook);


//  Define Function
function newBook(e) {
	let title = document.querySelector('#title').value,
	author = document.querySelector('#author').value, isbn = document.querySelector('#isbn').value;

	// let display = new Display();

	if (title ==='' || author ==='' || isbn ===''){
		Display.showAlert('Please fill all the fields!','error');
	}
	else{
		let book = new Book(title,author,isbn);
		
		Display.addToBookList(book);

		Display.clearFields();
		// console.log(book);
		Display.showAlert('Book added successfully!','success');
		e.preventDefault();
	}
}
function removeBook(e) {
		// let display = new Display();
		Display.deleteFormBook(e.target);
		e.preventDefault();
	}