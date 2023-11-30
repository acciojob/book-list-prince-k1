//your JS code here. If required.
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let isbn = document.querySelector('#isbn');
let btn = document.querySelector('#submit');
let body = document.querySelector('#book-list');
btn.addEventListener('click', () => {
	
	let tr = document.createElement('tr');
	let arr = [title.value, author.value, isbn.value];
	for(let i = 0; i < 3; i++){
		let td = document.createElement('td');
		td.innerText = arr[i];
		tr.appendChild(td);
	}
	let td = document.createElement('td');
	td.innerHTML = `<button id = "delete" class = "delete" onclick ="deleteElement(this)">X</button>`;
	tr.appendChild(td);
	body.appendChild(tr);
})

function deleteElement(event){
	let tr = event.parentNode.parentNode;
	tr.remove();
}