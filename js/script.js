// Get UI Elements
let form = document.querySelector('#book-form');



// Book Class
class Book{
	constructor(title,author,isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI class
class Display{
	constructor(){}
	addToBookList(book){
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
	clearFields(){
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
	showAlert(message, className){
		let div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		let container = document.querySelector('.container');
		let form = document.querySelector('#book-form');
		container.insertBefore(div,form);

		setTimeout(()=>{
			document.querySelector('.alert').remove();
		}, 3000);
	}
}
// Add EventListener
form.addEventListener('submit', newBook);



//  Define Function
function newBook(e) {
	let title = document.querySelector('#title').value,
	author = document.querySelector('#author').value, isbn = document.querySelector('#isbn').value;

	let display = new Display();

	if (title ==='' || author ==='' || isbn ===''){
		display.showAlert('Please fill all the fields!','error');
	}
	else{
		let book = new Book(title,author,isbn);
		
		display.addToBookList(book);

		display.clearFields();
		// console.log(book);
		display.showAlert('Book added successfully!','success');
		e.preventDefault();
	}
	
}
